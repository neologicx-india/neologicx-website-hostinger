import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/saas-development-services');
}

export default function SaasDevelopmentServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-primary">/saas-development-services</h1>
      <p className="mt-4 text-muted-foreground">This is a placeholder page. The SEO metadata has been dynamically injected via the mock API.</p>
    </div>
  );
}
