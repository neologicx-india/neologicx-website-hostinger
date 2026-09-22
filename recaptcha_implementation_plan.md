# Google reCAPTCHA v3 Implementation Plan

Provide a brief description of the problem, any background context, and what the change accomplishes.
You mentioned that you want reCAPTCHA on the **entire website**, and that your backend is mostly Strapi (GET APIs) with the only POST action being the contact form pointing to a Google Sheet.

The best approach here is **Google reCAPTCHA v3**.
reCAPTCHA v3 runs invisibly in the background. By adding it to your entire website, it tracks user behavior across all pages and accurately determines if the visitor is a human or a bot without interrupting them. When the user finally submits the Contact Form, a background token is generated and sent to your Google Sheet (via Google Apps Script) for verification.

## User Review Required
> [!IMPORTANT]
> Since we are switching to v3, you will need to generate new keys in the Google reCAPTCHA console specifically for **reCAPTCHA v3**. Old v2 keys will not work.

## Open Questions
> [!NOTE]
> Are there any other forms on the website (like Newsletter or Careers) that also submit data to Google Sheets? If so, they will need the exact same token logic as the Contact form.

## Proposed Changes

---

### 1. Generate API Keys for v3
1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2. Create a new site, choose **reCAPTCHA v3**.
3. Add your domains (e.g., `localhost` and `neologicx.com`).
4. Copy the **Site Key** (for Frontend) and **Secret Key** (for Backend).

### 2. Frontend Implementation (Next.js)

#### [MODIFY] `.env.local`
Add your new v3 Site Key.
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_v3_site_key_here
```

#### [NEW] Dependencies
We will use a popular library for v3 integration in React/Next.js.
```bash
npm install react-google-recaptcha-v3
```

#### [MODIFY] `app/layout.tsx`
We will wrap your entire application in the reCAPTCHA provider so that Google can track interactions across all pages.
```tsx
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
          {/* Your existing Navbar, Providers, etc */}
          {children}
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
```

#### [MODIFY] `components/contact-client.tsx`
We will use the hook to generate a token instantly when the user hits "Submit", and send it to your Google Apps Script backend.

```tsx
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactClient() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    // Generate the v3 token in the background
    const token = await executeRecaptcha('contact_form_submit');

    // ... your existing code ...
    const payload = {
      ...formData,
      recaptchaToken: token // Send this to Google Sheets / Apps Script
    };

    // fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) })
  };
  
  // ... rest of the component
}
```

### 3. Backend Verification (Google Apps Script)

Since Strapi is only used for GET requests, the only place we need to verify the token is inside your Google Apps Script `doPost` function. If the token's score is too low (meaning it's a bot), the script will reject the request.

#### [MODIFY] Google Apps Script (`Code.gs`)
```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var recaptchaToken = data.recaptchaToken;
  var secretKey = "YOUR_V3_SECRET_KEY_HERE"; // Put your secret key here
  
  // 1. Verify reCAPTCHA token with Google
  var verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
  var options = {
    "method": "post",
    "payload": {
      "secret": secretKey,
      "response": recaptchaToken
    }
  };
  
  var response = UrlFetchApp.fetch(verifyUrl, options);
  var json = JSON.parse(response.getContentText());
  
  // 2. Check if verification failed or score is too low (bots get low scores like 0.1)
  // Usually, a score >= 0.5 is considered human.
  if (!json.success || json.score < 0.5) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "message": "Spam detected by reCAPTCHA."
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // 3. If success and score is good, continue saving data to Google Sheet
  // ... your existing sheet code ...
}
```

## Verification Plan

### Manual Verification
1. Open the website, ensure the reCAPTCHA badge appears on all pages (bottom right corner).
2. Go to the Contact page, fill out the form.
3. Submit the form, verify that the data successfully appears in the Google Sheet.
4. Intentionally send an invalid token via Postman or curl, verify that the Google Apps Script rejects it with a "Spam detected" message.
