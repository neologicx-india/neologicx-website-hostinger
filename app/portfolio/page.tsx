import DynamicStructuredData from '@/components/DynamicStructuredData';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';
import PortfolioClient from '@/components/portfolio-client';
import CTASection from '@/components/cta-section';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('case-studies'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Software Development Case Studies | Neologicx',
        description: seoData.seo.metaDescription || 'Explore case studies and portfolio of Neologicx software projects.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for case-studies:", error);
  }

  return {
    title: 'Software Development Case Studies | Neologicx',
    description: 'Explore case studies and portfolio of Neologicx software projects.',
  };
}
export default function PortfolioPage() {
  return (
  <main className="w-full overflow-x-hidden">
      <DynamicStructuredData slug="portfolio" />
      <PortfolioClient />
      <CTASection
        title="Have a similar workflow?"
        description="Use these examples as a starting point—not a promise that your project will look the same. Tell us your users, constraints and systems, and we will map the right approach for your context."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
    </main>
  );
}
