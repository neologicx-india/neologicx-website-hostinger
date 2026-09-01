import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';
import AboutClient from '@/components/about-client';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('about-us'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'About Neologicx | Software Engineering Company',
        description: seoData.seo.metaDescription || 'Learn about Neologicx and our mission to build scalable software solutions.',
        alternates: {
          canonical: 'https://neologicx.com/about-us',
        },
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for about-us:", error);
  }

  return {
    title: 'About Neologicx | Software Engineering Company',
    description: 'Learn about Neologicx and our mission to build scalable software solutions.',
    alternates: {
      canonical: 'https://neologicx.com/about-us',
    },
  };
}

export default async function AboutPage() {
  let dynamicJsonLd = null;
  try {
    const seoData = await strapiService.getPageSeo('about-us'); 
    if (seoData?.seo?.structuredData) {
      dynamicJsonLd = seoData.seo.structuredData;
    }
  } catch (error) {
    console.error("Error fetching dynamic structured data:", error);
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://neologicx.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://neologicx.com/about-us',
      },
    ],
  };

  return (
    <main className="w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {dynamicJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: typeof dynamicJsonLd === 'string' ? dynamicJsonLd : JSON.stringify(dynamicJsonLd) 
          }}
        />
      )}
      <AboutClient />
    </main>
  );
}
