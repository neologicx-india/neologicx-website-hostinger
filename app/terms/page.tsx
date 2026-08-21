import LegalPageLayout from '@/components/legal-page-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Neologicx',
  description: 'Read the terms and conditions that govern the use of Neologicx website and services.',
};

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance-of-terms',
      title: '1. Acceptance of Terms',
      content: (
        <>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: '2. Intellectual Property Rights',
      content: (
        <>
          <p>
            The content, design, and graphics on this website are owned by Neologicx Resources Pvt Ltd and are protected by applicable copyright and trademark laws. You may not copy, reproduce, or distribute any part of this site without our express written permission.
          </p>
        </>
      ),
    },
    {
      id: 'services',
      title: '3. Software Services',
      content: (
        <>
          <p>
            Neologicx provides custom software development, product engineering, and consultation services. Any specific engagements or projects will be governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW) agreed upon by both parties.
          </p>
        </>
      ),
    },
    {
      id: 'limitation-of-liability',
      title: '4. Limitation of Liability',
      content: (
        <>
          <p>
            In no event shall Neologicx be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the site. All content is provided "as is" without warranty of any kind.
          </p>
        </>
      ),
    },
    {
      id: 'governing-law',
      title: '5. Governing Law',
      content: (
        <>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Rajasthan, India.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="Read the terms and conditions that govern the use of our website, materials, and consultation services."
      lastUpdated="August 10, 2026"
      sections={sections}
    />
  );
}
