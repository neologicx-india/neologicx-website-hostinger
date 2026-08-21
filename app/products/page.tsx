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
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data for solutions:", error);
  }

  return {
    title: 'Configurable Business Software Solutions | Neologicx',
    description: 'Explore configurable software foundations for construction operations, complaint management, order workflows and education administration.',
  };
}
export default function ProductsPage() {
  return <ProductsClient />;
}
