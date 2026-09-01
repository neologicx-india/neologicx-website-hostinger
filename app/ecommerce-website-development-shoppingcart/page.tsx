import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/ecommerce-website-development-shoppingcart');
}

import EcommerceClient from '@/components/ecommerce-client';

export default function EcommerceWebsiteDevelopmentShoppingcartPage() {
  return (
  <>
    <DynamicStructuredData slug="ecommerce-website-development-shoppingcart" />
    <EcommerceClient />
  </>
);
}