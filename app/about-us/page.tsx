import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';
import AboutClient from '@/components/about-client';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('about-us'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'About Neologicx | Software Engineering Company',
        description: seoData.seo.metaDescription || 'Learn about Neologicx and our mission to build scalable software solutions.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for about-us:", error);
  }

  return {
    title: 'About Neologicx | Software Engineering Company',
    description: 'Learn about Neologicx and our mission to build scalable software solutions.',
  };
}

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <AboutClient />
    </main>
  );
}
