import IndustriesClient from '@/components/industries-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Across Industries | Neologicx',
  description: 'Neologicx software experience across education, manufacturing, FMCG, retail, construction, hospitality, events and professional workflows.',
  openGraph: {
    title: 'Software Development Across Industries | Neologicx',
    description: 'Neologicx software experience across education, manufacturing, FMCG, retail, construction, hospitality, events and professional workflows.',
    images: [{ url: '/images/og-default.jpg' }],
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
