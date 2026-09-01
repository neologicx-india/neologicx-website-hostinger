import DynamicStructuredData from '@/components/DynamicStructuredData';
import ProductsClient from '@/components/products-client';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('solutions');

    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Configurable Business Software Solutions | Neologicx',
        description: seoData.seo.metaDescription || 'Explore configurable software foundations for construction operations, complaint management, order workflows and education administration.',
        alternates: {
          canonical: 'https://neologicx.com/products',
        },
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for solutions:", error);
  }

  return {
    title: 'Configurable Business Software Solutions | Neologicx',
    description: 'Explore configurable software foundations for construction operations, complaint management, order workflows and education administration.',
    alternates: {
      canonical: 'https://neologicx.com/products',
    },
  };
}
export default function ProductsPage() {
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
        name: 'Solutions',
        item: 'https://neologicx.com/products',
      },
    ],
  };



  return (
    <main className="w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DynamicStructuredData slug="solutions" />
      <ProductsClient />
    </main>
  );
}