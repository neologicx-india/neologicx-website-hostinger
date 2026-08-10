import { getDynamicMetadata } from '@/lib/metadata';
import ContactClient from '@/components/contact-client';

export async function generateMetadata() {
  return await getDynamicMetadata('/contact');
}

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ContactClient />
    </main>
  );
}

