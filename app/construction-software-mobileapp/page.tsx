import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/construction-software-mobileapp');
}

import ConstructionClient from '@/components/construction-client';
import RelatedSolutions from '@/components/related-solutions';

export default function ConstructionSoftwareMobileappPage() {
  return (
  <>
    <DynamicStructuredData slug="construction-software-mobileapp" />
    <ConstructionClient />
    <RelatedSolutions currentPath="/construction-software-mobileapp" />
  </>
);
}