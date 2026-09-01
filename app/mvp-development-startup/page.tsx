import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/mvp-development-startup');
}

import MvpClient from '@/components/mvp-client';

export default function MvpDevelopmentStartupPage() {
  return (
  <>
    <DynamicStructuredData slug="mvp-development-startup" />
    <MvpClient />
  </>
);
}