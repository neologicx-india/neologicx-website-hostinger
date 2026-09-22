import DynamicStructuredData from '@/components/DynamicStructuredData';
import ServicesClient from '@/components/services-client';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('services');

    if (seoData && seoData.seo) {
      const metadata: Metadata = {
        title: seoData.seo.metaTitle || 'Software Engineering Services | Neologicx',
        description: seoData.seo.metaDescription || 'Product engineering, custom software, web and mobile development, e-commerce, APIs, integrations and automation from Neologicx.',
      };
      
      if (seoData.seo.canonicalUrl) {
        metadata.alternates = {
          canonical: seoData.seo.canonicalUrl,
        };
      } else {
        metadata.alternates = {
          canonical: 'https://neologicx.com/services',
        };
      }
      return metadata;
    }
  } catch (error) {
    console.error("Error fetching SEO data for services:", error);
  }

  return {
    title: 'Software Engineering Services | Neologicx',
    description: 'Product engineering, custom software, web and mobile development, e-commerce, APIs, integrations and automation from Neologicx.',
    alternates: {
      canonical: 'https://neologicx.com/services',
    },
  };
}
export default function ServicesPage() {
  return (
  <>
    <DynamicStructuredData slug="services" />
    <ServicesClient />
  </>
);
}