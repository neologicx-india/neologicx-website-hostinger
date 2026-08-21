import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/custom-software-development');
}

import CustomSoftwareClient from '@/components/custom-software-client';

export default function CustomSoftwareDevelopmentPage() {
  return <CustomSoftwareClient />;
}
