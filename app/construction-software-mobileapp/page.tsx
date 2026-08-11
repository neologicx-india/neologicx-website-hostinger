import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/construction-software-mobileapp');
}

import ConstructionClient from '@/components/construction-client';

export default function ConstructionSoftwareMobileappPage() {
  return <ConstructionClient />;
}
