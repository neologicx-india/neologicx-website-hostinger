import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/order-management-system');
}

import OrderClient from '@/components/order-client';
import RelatedSolutions from '@/components/related-solutions';

export default function OrderManagementSystemPage() {
  return (
  <>
    <DynamicStructuredData slug="order-management-system" />
    <OrderClient />
    <RelatedSolutions currentPath="/order-management-system" />
  </>
);
}