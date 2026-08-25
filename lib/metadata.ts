import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

function formatSlugToTitle(slug: string): string {
  if (!slug || slug === 'home') return 'Custom Software & Product Engineering';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function getDynamicMetadata(path: string): Promise<Metadata> {
  const baseUrl = 'https://neologicx.com';
  // Remove leading slash to get the slug
  const slug = path.startsWith('/') ? path.slice(1) : path;
  const pageSlug = slug || 'home';
  const defaultCanonical = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const defaultTitle = formatSlugToTitle(slug);
  const defaultDescription = 'Custom software and product engineering for web, mobile, SaaS, business systems, e-commerce and integrations.';

  try {
    const seoData = await strapiService.getPageSeo(pageSlug);

    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || defaultTitle,
        description: seoData.seo.metaDescription || defaultDescription,
        alternates: {
          canonical: seoData.seo.canonicalUrl || defaultCanonical,
        },
        openGraph: {
          title: seoData.seo.ogTitle || seoData.seo.metaTitle || defaultTitle,
          description: seoData.seo.ogDescription || seoData.seo.metaDescription || defaultDescription,
          url: defaultCanonical,
          siteName: 'Neologicx',
          images: [
            {
              url: '/neo_logo.png', // Ideally should be a high-res OG image from Strapi, falling back to logo
              width: 1200,
              height: 630,
              alt: 'Neologicx',
            }
          ],
        },
        robots: seoData.seo.robots || 'index, follow',
        twitter: {
          card: 'summary_large_image',
          title: seoData.seo.twitterTitle || seoData.seo.metaTitle || defaultTitle,
          description: seoData.seo.twitterDescription || seoData.seo.metaDescription || defaultDescription,
          images: ['/neo_logo.png'],
        },
      };
    }
  } catch (error) {
    console.error(`Error fetching SEO data for ${path}:`, error);
  }

  // Fallback metadata in case the API fails or no SEO data found
  return {
    title: defaultTitle,
    description: defaultDescription,
    alternates: {
      canonical: defaultCanonical,
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: defaultCanonical,
      siteName: 'Neologicx',
      images: [
        {
          url: '/neo_logo.png',
          width: 1200,
          height: 630,
          alt: 'Neologicx',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: ['/neo_logo.png'],
    },
  };
}
