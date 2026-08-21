import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function getDynamicMetadata(path: string): Promise<Metadata> {
  try {
    // Remove leading slash to get the slug
    const slug = path.startsWith('/') ? path.slice(1) : path;
    const pageSlug = slug || 'home';

    const seoData = await strapiService.getPageSeo(pageSlug);

    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Neologicx',
        description: seoData.seo.metaDescription || 'Software Engineering Company',
        alternates: {
          canonical: seoData.seo.canonicalUrl || undefined,
        },
        openGraph: {
          title: seoData.seo.ogTitle || seoData.seo.metaTitle,
          description: seoData.seo.ogDescription || seoData.seo.metaDescription,
        },
        robots: seoData.seo.robots || 'index, follow',
        twitter: {
          card: 'summary_large_image',
          title: seoData.seo.metaTitle,
          description: seoData.seo.metaDescription,
        },
      };
    }
  } catch (error) {
    console.error(`Error fetching SEO data for ${path}:`, error);
  }

  // Fallback metadata in case the API fails or no SEO data found
  return {
    title: 'Neologicx',
    description: 'Software Engineering Company',
  };
}
