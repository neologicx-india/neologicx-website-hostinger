import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/mobile-app-development-android-ios-flutter');
}

import MobileAppClient from '@/components/mobile-app-client';

export default function MobileAppDevelopmentPage() {
  return <MobileAppClient />;
}
