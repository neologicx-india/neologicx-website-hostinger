import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/school-management-software');
}

import SchoolClient from '@/components/school-client';

export default function SchoolManagementSoftwarePage() {
  return <SchoolClient />;
}
