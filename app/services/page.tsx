import ServicesClient from '@/components/services-client';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('services');

    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Software Engineering Services | Neologicx',
        description: seoData.seo.metaDescription || 'Product engineering, custom software, web and mobile development, e-commerce, APIs, integrations and automation from Neologicx.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for services:", error);
  }

  return {
    title: 'Software Engineering Services | Neologicx',
    description: 'Product engineering, custom software, web and mobile development, e-commerce, APIs, integrations and automation from Neologicx.',
  };
}
export default function ServicesPage() {
  return <ServicesClient />;
}
