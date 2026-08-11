import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/api-development-services');
}

import ApiIntegrationClient from '@/components/api-integration-client';

export default function ApiDevelopmentServicesPage() {
  return <ApiIntegrationClient />;
}
