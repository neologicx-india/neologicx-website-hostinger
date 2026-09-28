import DynamicStructuredData from '@/components/DynamicStructuredData';
import CareersClient from '@/components/careers-client';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('careers'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Careers | Neologicx',
        description: seoData.seo.metaDescription || 'Join our team at Neologicx. We are always looking for talented individuals to help us build innovative software solutions.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data:", error);
  }

  return {
    title: 'Careers | Neologicx',
    description: 'Join our team at Neologicx. We are always looking for talented individuals to help us build innovative software solutions.',
  };
}

export default async function CareersPage() {
  let careers = [];
  try {
    const careersData = await strapiService.getAllCareers();
    careers = careersData?.data || [];
  } catch (error) {
    console.error("Failed to fetch careers:", error);
  }

  return (
    <>
      <DynamicStructuredData slug="careers" />
      <CareersClient initialCareers={careers} />
    </>
  );
}
