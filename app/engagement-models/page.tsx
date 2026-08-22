import { getDynamicMetadata } from '@/lib/metadata';
import EngagementModelsClient from '@/components/engagement-models-client';

export async function generateMetadata() {
  return await getDynamicMetadata('/engagement-models');
}

export default function EngagementModelsPage() {
  return <EngagementModelsClient />;
}
