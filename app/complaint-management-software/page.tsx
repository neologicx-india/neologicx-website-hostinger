import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/complaint-management-software');
}

import ComplaintClient from '@/components/complaint-client';

export default function ComplaintManagementSoftwarePage() {
  return <ComplaintClient />;
}
