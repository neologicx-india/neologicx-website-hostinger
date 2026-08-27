# Google reCAPTCHA Implementation Plan

Here is the complete, step-by-step solution to add Google reCAPTCHA to your contact form to prevent spam. Since your backend is running on Google Apps Script (GAS), we have to configure both the Next.js frontend and the GAS backend.

We recommend using **reCAPTCHA v2 (Checkbox "I'm not a robot")** because it's very reliable and easy to integrate with Apps Script.

---

### Step 1: Generate API Keys
1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2. Create a new site, choose **reCAPTCHA v2 (Checkbox)**.
3. Add your domains (e.g., `localhost` and `neologicx.com`).
4. Copy the **Site Key** (for Frontend) and **Secret Key** (for Backend).

### Step 2: Frontend Implementation (Next.js)

#### 1. Install Dependencies
Run the following command in your terminal to install the react wrapper for reCAPTCHA:
```bash
npm install react-google-recaptcha
npm install --save-dev @types/react-google-recaptcha
```

#### 2. Update Environment Variables
Add the Site Key to your `.env.local` file:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
```

#### 3. Update `contact-client.tsx`
We will modify the form to include the ReCAPTCHA widget and block submission until it's verified.

```tsx
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactClient() {
  // Add a state to store the token
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
       alert("Please complete the reCAPTCHA");
       return;
    }
    
    // ... inside payload, pass the token to your backend ...
    const payload = {
      ...formData,
      fileData,
      fileName,
      mimeType,
      recaptchaToken // <--- Send this to Apps Script
    };
    // ... fetch(SCRIPT_URL, ...)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ... other form fields ... */}
      
      {/* Add reCAPTCHA before the submit button */}
      <div className="mb-6">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => setRecaptchaToken(token)}
        />
      </div>

      <button disabled={!recaptchaToken || loading}>
         Submit
      </button>
    </form>
  )
}
```

### Step 3: Backend Implementation (Google Apps Script)

You must verify the token securely on your server (Apps Script). If you only verify on the frontend, hackers can easily bypass it.

Modify your `doPost(e)` function in the Google Apps Script editor:

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var recaptchaToken = data.recaptchaToken;
  var secretKey = "YOUR_SECRET_KEY_HERE"; // Put your secret key here
  
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
  
  // 2. Check if verification failed
  if (!json.success) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "message": "reCAPTCHA verification failed."
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // 3. If success, continue saving the data to your Google Sheet...
  // (Your existing code goes here)
}
```
