import InsightDetailClient from '@/components/insight-detail-client';
import { insightsDb } from '@/lib/insights-db';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const insight = insightsDb[slug];

  if (!insight) {
    return {
      title: 'Insight Not Found | Neologicx',
    };
  }

  return {
    title: `${insight.title} | Neologicx Insights`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      images: [insight.heroImage],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(insightsDb).map((slug) => ({
    slug: slug,
  }));
}

export default async function InsightDetailPage({ params }: Props) {
  const slug = (await params).slug;
  return <InsightDetailClient slug={slug} />;
}
