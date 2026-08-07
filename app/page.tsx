import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/');
}


import HeroNew from '@/components/hero1'
import Intro from '@/components/intro'
import Features from '@/components/features'
import PortfolioSlider from '@/components/portfolio-slider'
import Process from '@/components/process'
import GlobalDelivery from '@/components/global-delivery'
import CTASection from '@/components/cta-section'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden flex flex-col items-center justify-center">
      <HeroNew />
      <Intro />
      <Features />
      <PortfolioSlider />
      <Process />
      <GlobalDelivery />
      <CTASection />
    </main>
  )
}
