import { Metadata } from 'next';
import FAQClient from '@/components/faq-client';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getDynamicMetadata('/faq');
  
  // If Strapi returns metadata for '/faq', use it.
  if (metadata.title !== 'Neologicx | Software Engineering') {
    return metadata;
  }
  
  // Otherwise, fallback to static metadata
  return {
    title: 'Frequently Asked Questions | Neologicx',
    description: 'Find answers to common questions about our software development, product engineering, SaaS development, and consulting services.',
    alternates: {
      canonical: 'https://neologicx.com/faq',
    }
  };
}

export default function FAQPage() {
  return <FAQClient />;
}
