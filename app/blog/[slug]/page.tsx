import InsightDetailClient from '@/components/insight-detail-client';
import { strapiService } from '@/services/strapiService';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = await strapiService.getBlogBySlug(slug);

  if (!blog) {
    return {
      title: `Insight: ${slug} | Neologicx`,
    };
  }

  const seo = blog.seo || {};
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  const imgUrl = blog.featuredImage?.url ? `${STRAPI_URL}${blog.featuredImage.url}` : undefined;

  return {
    title: seo.metaTitle || `${blog.title} | Neologicx Insights`,
    description: seo.metaDescription || blog.excerpt,
    openGraph: {
      title: seo.ogTitle || seo.metaTitle || blog.title,
      description: seo.ogDescription || seo.metaDescription || blog.excerpt,
      images: imgUrl ? [{ url: imgUrl }] : [{ url: '/neo_logo.png', width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.metaTitle || blog.title,
      description: seo.twitterDescription || seo.metaDescription || blog.excerpt,
      images: imgUrl ? [imgUrl] : ['/neo_logo.png'],
    },
    alternates: {
      canonical: seo.canonicalUrl || `https://neologicx.com/blog/${slug}`,
    },
    robots: seo.robots || 'index, follow',
    keywords: blog.categories?.map((cat: any) => cat.name).join(', '),
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const slug = (await params).slug;
  console.log("=== SLUG RECEIVED ===", slug);
  
  const blog = await strapiService.getBlogBySlug(slug);
  console.log("=== STRAPI API BLOG DATA ===", blog);

  if (!blog) {
    return <InsightDetailClient initialInsight={null} />;
  }

  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  
  const mappedBlog = {
    slug: blog.slug,
    title: blog.title,
    category: blog.categories?.[0]?.name || 'Uncategorized',
    categories: blog.categories?.map((cat: any) => cat.name) || [],
    date: new Date(blog.publishedDate || blog.createdAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }),
    author: blog.author || 'Neologicx',
    readTime: blog.readingTime || '5 mins',
    heroImage: blog.featuredImage?.url ? `${STRAPI_URL}${blog.featuredImage.url}` : '/images/placeholder.jpg',
    excerpt: blog.excerpt || '',
    content: blog.content
  };

  return (
    <>
      {blog.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.seo.structuredData) }}
        />
      )}
      <InsightDetailClient initialInsight={mappedBlog} />
    </>
  );
}
