import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';
import EngagementModelsClient from '@/components/engagement-models-client';
import RelatedSolutions from '@/components/related-solutions';

export async function generateMetadata() {
  return await getDynamicMetadata('/engagement-models');
}

export default function EngagementModelsPage() {
  return (
  <>
    <DynamicStructuredData slug="engagement-models" />
    <EngagementModelsClient />
    <RelatedSolutions currentPath="/engagement-models" />
  </>
);
}