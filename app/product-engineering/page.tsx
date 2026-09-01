import DynamicStructuredData from '@/components/DynamicStructuredData';
import ProductEngineeringClient from '@/components/product-engineering-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Engineering Services | Neologicx',
  description: 'Product discovery, MVP development, SaaS engineering, modernization and ongoing product delivery from Neologicx.',
};

export default function ProductEngineeringPage() {
  return (
  <>
    <DynamicStructuredData slug="product-engineering" />
    <ProductEngineeringClient />
  </>
);
}