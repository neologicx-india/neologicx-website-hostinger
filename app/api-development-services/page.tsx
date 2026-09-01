import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/api-development-services');
}

import ApiIntegrationClient from '@/components/api-integration-client';

export default function ApiDevelopmentServicesPage() {
  return (
  <>
    <DynamicStructuredData slug="api-development-services" />
    <ApiIntegrationClient />
  </>
);
}