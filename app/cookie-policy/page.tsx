import LegalPageLayout from '@/components/legal-page-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Neologicx',
  description: 'Understand how Neologicx uses cookies and similar technologies to improve your browsing experience.',
};

export default function CookiePolicyPage() {
  const sections = [
    {
      id: 'what-are-cookies',
      title: '1. What are Cookies?',
      content: (
        <>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information and personalized experiences.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use-cookies',
      title: '2. How We Use Cookies',
      content: (
        <>
          <p>
            Neologicx uses cookies for several reasons, including:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the basic functioning of our website, such as page navigation and secure areas.</li>
            <li><strong>Performance & Analytics:</strong> To understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics).</li>
            <li><strong>Functionality:</strong> To remember choices you make (such as language preferences) and provide enhanced, more personal features.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'third-party-cookies',
      title: '3. Third-Party Cookies',
      content: (
        <>
          <p>
            In some special cases, we also use cookies provided by trusted third parties. For example, we use third-party analytics to track and measure usage of this site so that we can continue to produce engaging content and improve our web experience.
          </p>
        </>
      ),
    },
    {
      id: 'managing-cookies',
      title: '4. Managing Cookies',
      content: (
        <>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Cookie Policy"
      description="Understand how Neologicx uses cookies and tracking technologies to improve your experience."
      lastUpdated="August 10, 2026"
      sections={sections}
    />
  );
}
