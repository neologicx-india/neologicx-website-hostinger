import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';
import CaseStudyDetailClient from '@/components/case-study-detail-client';
import CTASection from '@/components/cta-section';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = 'https://neologicx.com';
  const defaultCanonical = `${baseUrl}/portfolio/${slug}`;
  const defaultTitle = `Case Study: ${slug} | Neologicx`;

  try {
    const study = await strapiService.getCaseStudyBySlug(slug);
    const seo = study?.seo;

    if (seo) {
      return {
        title: seo.metaTitle || study.title || defaultTitle,
        description: seo.metaDescription || study.summary || 'Neologicx Case Study',
        openGraph: {
          title: seo.ogTitle || seo.metaTitle || study.title || defaultTitle,
          description: seo.ogDescription || seo.metaDescription || study.summary || 'Neologicx Case Study',
          images: seo.ogImage ? [{ url: seo.ogImage.url }] : [{ url: '/neo_logo.png', width: 1200, height: 630 }],
          url: defaultCanonical,
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: seo.twitterTitle || seo.metaTitle || study.title || defaultTitle,
          description: seo.twitterDescription || seo.metaDescription || study.summary || 'Neologicx Case Study',
          images: seo.ogImage ? [seo.ogImage.url] : ['/neo_logo.png'],
        },
        keywords: study.tags?.join(', '),
        alternates: {
          canonical: seo.canonicalUrl || defaultCanonical,
        },
        robots: seo.robots || 'index, follow',
      };
    }

    return {
      title: defaultTitle,
      description: study?.summary || 'Neologicx Case Study',
      alternates: {
        canonical: defaultCanonical,
      },
      openGraph: {
        title: defaultTitle,
        description: study?.summary || 'Neologicx Case Study',
        url: defaultCanonical,
        images: [{ url: '/neo_logo.png', width: 1200, height: 630 }],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description: study?.summary || 'Neologicx Case Study',
        images: ['/neo_logo.png'],
      },
    };
  } catch (error) {
    console.error('Error fetching case study metadata:', error);
    return {
      title: `Case Study: ${slug} | Neologicx`,
      alternates: { canonical: `https://neologicx.com/portfolio/${slug}` }
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
