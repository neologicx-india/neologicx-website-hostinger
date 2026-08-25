import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('home');

    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Neologicx | Custom Software & Product Engineering',
        description: seoData.seo.metaDescription || 'Neologicx builds scalable software solutions for businesses.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for home:", error);
  }

  return {
    title: 'Neologicx | Custom Software & Product Engineering',
    description: 'Neologicx builds scalable software solutions for businesses.',
  };
}

import HeroNew from '@/components/hero1';
import Intro from '@/components/intro';
import Features from '@/components/features';
import dynamic from 'next/dynamic';

const PortfolioSlider = dynamic(() => import('@/components/portfolio-slider'), { ssr: true });
const Process = dynamic(() => import('@/components/process'), { ssr: true });
const GlobalDelivery = dynamic(() => import('@/components/global-delivery'), { ssr: true });
const InsightsSlider = dynamic(() => import('@/components/insights-slider'), { ssr: true });
const GlobalLocations = dynamic(() => import('@/components/GlobalLocations'), { ssr: true });

export default async function Home() {
  const [caseStudiesRes, blogsRes] = await Promise.all([
    strapiService.getAllCaseStudies(),
    strapiService.getAllBlogs(1, 10, 'All')
  ]);

  const caseStudies = caseStudiesRes?.data || [];
  const blogs = blogsRes?.data || [];

  return (
    <main className="w-full overflow-x-hidden flex flex-col items-center justify-center">
      <HeroNew />
      <Intro />
      <Features />
      <PortfolioSlider caseStudies={caseStudies} />
      <Process />
      <GlobalDelivery />
      <InsightsSlider blogs={blogs} />
      {/* <OurLocations /> */}
      <GlobalLocations />
    </main>
  )
}
