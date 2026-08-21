import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';
import CaseStudyDetailClient from '@/components/case-study-detail-client';
import CTASection from '@/components/cta-section';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const study = await strapiService.getCaseStudyBySlug(slug);
    const seo = study?.seo;

    if (seo) {
      return {
        title: seo.metaTitle || study.title,
        description: seo.metaDescription || study.summary,
        openGraph: {
          title: seo.ogTitle || seo.metaTitle || study.title,
          description: seo.ogDescription || seo.metaDescription || study.summary,
        },
        twitter: {
          title: seo.twitterTitle || seo.metaTitle || study.title,
          description: seo.twitterDescription || seo.metaDescription || study.summary,
        },
        alternates: seo.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
        robots: seo.robots || 'index, follow',
      };
    }

    return {
      title: study?.title || 'Case Study | Neologicx',
      description: study?.summary || 'Neologicx Case Study',
    };
  } catch (error) {
    console.error('Error fetching case study metadata:', error);
    return {
      title: 'Case Study | Neologicx',
    };
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="w-full overflow-x-hidden">
      <CaseStudyDetailClient slug={slug} />
      <CTASection
        title="Have a similar project?"
        description="Tell us about your challenge. We will map the right approach for your context."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
    </main>
  );
}
