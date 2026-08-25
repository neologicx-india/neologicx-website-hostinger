import LegalPageLayout from '@/components/legal-page-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Neologicx',
  description: 'Learn how Neologicx Resources Pvt Ltd collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: '1. Information Collection',
      content: (
        <>
          <p>
            We collect information from you when you visit our website, fill out a form, or communicate with us. The types of information we may collect include your name, email address, phone number, company details, and any other information you choose to provide.
          </p>
          <p>
            We also automatically collect certain technical information when you navigate our site, such as your IP address, browser type, operating system, and browsing behavior.
          </p>
        </>
      ),
    },
    {
      id: 'use-of-information',
      title: '2. Use of Information',
      content: (
        <>
          <p>
            Any of the information we collect from you may be used in the following ways:
          </p>
          <ul>
            <li>To personalize your experience and better respond to your individual needs.</li>
            <li>To improve our website offerings based on the information and feedback we receive from you.</li>
            <li>To improve customer service and more effectively respond to your requests and support needs.</li>
            <li>To send periodic emails regarding your project, inquiry, or other relevant company updates.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'information-protection',
      title: '3. Information Protection',
      content: (
        <>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you submit a request or enter your personal information. These measures include secure servers, encrypted data transmission, and restricted access to authorized personnel only.
          </p>
        </>
      ),
    },
    {
      id: 'third-party-disclosure',
      title: '4. Third-Party Disclosure',
      content: (
        <>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </>
      ),
    },
    {
      id: 'your-rights',
      title: '5. Your Rights',
      content: (
        <>
          <p>
            Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict the processing of your data. To exercise any of these rights, please contact us at <a href="mailto:support@neologicx.com">support@neologicx.com</a>.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Learn how Neologicx collects, uses, and protects your data when you use our website and services."
      lastUpdated="August 10, 2026"
      sections={sections}
    />
  );
}
