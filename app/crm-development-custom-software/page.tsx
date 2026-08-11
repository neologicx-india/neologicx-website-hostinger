import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/crm-development-custom-software');
}

import CrmClient from '@/components/crm-client';

export default function CrmDevelopmentCustomSoftwarePage() {
  return <CrmClient />;
}
