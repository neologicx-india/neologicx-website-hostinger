import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/saas-development-services');
}

import SaasDevelopmentClient from '@/components/saas-development-client';

export default function SaasDevelopmentServicesPage() {
  return (
  <>
    <DynamicStructuredData slug="saas-development-services" />
    <SaasDevelopmentClient />
  </>
);
}