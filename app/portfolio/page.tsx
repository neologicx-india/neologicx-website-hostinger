import { getDynamicMetadata } from '@/lib/metadata';
import PortfolioClient from '@/components/portfolio-client';
import CTASection from '@/components/cta-section';

export async function generateMetadata() {
  return await getDynamicMetadata('/portfolio');
}

export default function PortfolioPage() {
  return (
    <main className="w-full overflow-x-hidden">
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
