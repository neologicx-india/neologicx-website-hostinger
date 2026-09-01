import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/complaint-management-software');
}

import ComplaintClient from '@/components/complaint-client';
import RelatedSolutions from '@/components/related-solutions';

export default function ComplaintManagementSoftwarePage() {
  return (
  <>
    <DynamicStructuredData slug="complaint-management-software" />
    <ComplaintClient />
    <RelatedSolutions currentPath="/complaint-management-software" />
  </>
);
}