import DynamicStructuredData from '@/components/DynamicStructuredData';
import IndustriesClient from '@/components/industries-client';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('industries'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Software Development Across Industries | Neologicx',
        description: seoData.seo.metaDescription || 'Neologicx software experience across education, manufacturing, FMCG, retail, construction, hospitality, events and professional workflows.',
        alternates: {
          canonical: 'https://neologicx.com/industries',
        },
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for industries:", error);
  }

  return {
    title: 'Software Development Across Industries | Neologicx',
    description: 'Neologicx software experience across education, manufacturing, FMCG, retail, construction, hospitality, events and professional workflows.',
    alternates: {
      canonical: 'https://neologicx.com/industries',
    },
  };
}
export default function IndustriesPage() {
  return (
  <>
    <DynamicStructuredData slug="industries" />
    <IndustriesClient />
  </>
);
}