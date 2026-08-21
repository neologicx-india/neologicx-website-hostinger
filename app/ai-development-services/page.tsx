import { getDynamicMetadata } from '@/lib/metadata';
import AiDevelopmentClient from '@/components/ai-development-client';

export async function generateMetadata() {
  return await getDynamicMetadata('/ai-development-services');
}

export default function AiDevelopmentServicesPage() {
  return <AiDevelopmentClient />;
}
