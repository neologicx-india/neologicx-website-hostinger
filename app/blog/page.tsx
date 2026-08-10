import InsightsClient from '@/components/insights-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Engineering Insights | Neologicx',
  description: 'Practical perspectives from Neologicx on product engineering, custom software, mobile, integrations, e-commerce and software modernization.',
};

export default function BlogPage() {
  return <InsightsClient />;
}
