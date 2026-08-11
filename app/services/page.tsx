import ServicesClient from '@/components/services-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Engineering Services | Neologicx',
  description: 'Product engineering, custom software, web and mobile development, e-commerce, APIs, integrations and automation from Neologicx.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
