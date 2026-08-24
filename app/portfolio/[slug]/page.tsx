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
          images: seo.ogImage ? [{ url: seo.ogImage.url }] : undefined,
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: seo.twitterTitle || seo.metaTitle || study.title,
          description: seo.twitterDescription || seo.metaDescription || study.summary,
          images: seo.ogImage ? [seo.ogImage.url] : undefined,
        },
        keywords: study.tags?.join(', '),
        alternates: {
          canonical: seo?.canonicalUrl || `https://neologicx.com/portfolio/${slug}/`,
        },
        robots: seo.robots || 'index, follow',
      };
    }

    return {
      title: study?.title || `Case Study: ${slug} | Neologicx`,
      description: study?.summary || 'Neologicx Case Study',
    };
  } catch (error) {
    console.error('Error fetching case study metadata:', error);
    return {
      title: `Case Study: ${slug} | Neologicx`,
    };
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await strapiService.getCaseStudyBySlug(slug);

  return (
    <main className="w-full overflow-x-hidden">
      {study?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(study.seo.structuredData) }}
        />
      )}
      <CaseStudyDetailClient slug={slug} initialData={study} />
      <CTASection
        title="Have a similar project?"
        description="Tell us about your challenge. We will map the right approach for your context."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
    </main>
  );
}
