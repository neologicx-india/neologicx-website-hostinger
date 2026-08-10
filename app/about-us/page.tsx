import { getDynamicMetadata } from '@/lib/metadata';
import AboutClient from '@/components/about-client';

export async function generateMetadata() {
  return await getDynamicMetadata('/about-us');
}

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <AboutClient />
    </main>
  );
}
