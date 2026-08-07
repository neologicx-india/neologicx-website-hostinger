import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/mobile-app-development-android-ios-flutter');
}

export default function MobileAppDevelopmentAndroidIosFlutterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-primary">/mobile-app-development-android-ios-flutter</h1>
      <p className="mt-4 text-muted-foreground">This is a placeholder page. The SEO metadata has been dynamically injected via the mock API.</p>
    </div>
  );
}
