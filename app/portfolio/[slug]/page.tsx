import { getDynamicMetadata } from '@/lib/metadata';
import CaseStudyDetailClient from '@/components/case-study-detail-client';
import CTASection from '@/components/cta-section';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return await getDynamicMetadata(`/portfolio/${slug}`);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <main className="w-full overflow-x-hidden">
      <CaseStudyDetailClient slug={slug} />
      <CTASection
        title={<>Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary drop-shadow-lg">similar project?</span></>}
        description="Tell us about your challenge. We will map the right approach for your context."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
    </main>
  );
}
