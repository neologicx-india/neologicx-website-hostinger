import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/portfolio/swami-keshwanand-rajasthan-agricultural-university-skrau');
}

export default function PortfolioSwamiKeshwanandRajasthanAgriculturalUniversitySkrauPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-primary">/portfolio/swami-keshwanand-rajasthan-agricultural-university-skrau</h1>
      <p className="mt-4 text-muted-foreground">This is a placeholder page. The SEO metadata has been dynamically injected via the mock API.</p>
    </div>
  );
}
