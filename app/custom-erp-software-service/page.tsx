import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/custom-erp-software-service');
}

import ErpClient from '@/components/erp-client';

export default function CustomErpSoftwareServicePage() {
  return (
  <>
    <DynamicStructuredData slug="custom-erp-software-service" />
    <ErpClient />
  </>
);
}