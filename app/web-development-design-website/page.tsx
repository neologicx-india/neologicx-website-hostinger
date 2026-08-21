import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/web-development-design-website');
}

import WebDevelopmentClient from '@/components/web-development-client';

export default function WebDevelopmentDesignWebsitePage() {
  return <WebDevelopmentClient />;
}
