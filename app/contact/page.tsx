import DynamicStructuredData from '@/components/DynamicStructuredData';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';
import ContactClient from '@/components/contact-client';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('contact'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Contact Neologicx | Discuss Your Software Needs',
        description: seoData.seo.metaDescription || 'Get in touch with Neologicx to discuss your software engineering and product development requirements.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for contact:", error);
  }

  return {
    title: 'Contact Neologicx | Discuss Your Software Needs',
    description: 'Get in touch with Neologicx to discuss your software engineering and product development requirements.',
  };
}
export default function ContactPage() {
  return (
  <main className="w-full overflow-x-hidden">
      <DynamicStructuredData slug="contact" />
      <ContactClient />
    </main>
  );
}

