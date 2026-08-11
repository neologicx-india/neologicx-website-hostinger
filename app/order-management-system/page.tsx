import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/order-management-system');
}

import OrderClient from '@/components/order-client';

export default function OrderManagementSystemPage() {
  return <OrderClient />;
}
