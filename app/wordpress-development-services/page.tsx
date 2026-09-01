import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/wordpress-development-services');
}

import WordpressClient from '@/components/wordpress-client';

export default function WordpressDevelopmentServicesPage() {
  return (
  <>
    <DynamicStructuredData slug="wordpress-development-services" />
    <WordpressClient />
  </>
);
}