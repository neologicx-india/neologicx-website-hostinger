import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/school-management-software');
}

import SchoolClient from '@/components/school-client';
import RelatedSolutions from '@/components/related-solutions';

export default function SchoolManagementSoftwarePage() {
  return (
  <>
    <DynamicStructuredData slug="school-management-software" />
    <SchoolClient />
    <RelatedSolutions currentPath="/school-management-software" />
  </>
);
}