import ProductsClient from '@/components/products-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configurable Business Software Solutions | Neologicx',
  description: 'Explore configurable software foundations for construction operations, complaint management, order workflows and education administration.',
  openGraph: {
    title: 'Configurable Business Software Solutions | Neologicx',
    description: 'Explore configurable software foundations for construction operations, complaint management, order workflows and education administration.',
    images: [{ url: '/images/og-default.jpg' }],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
