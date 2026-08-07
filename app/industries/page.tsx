import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/industries');
}

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-primary">/industries</h1>
      <p className="mt-4 text-muted-foreground">This is a placeholder page. The SEO metadata has been dynamically injected via the mock API.</p>
    </div>
  );
}
