import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/whatsapp-chatbot-development');
}

import WhatsappClient from '@/components/whatsapp-client';

export default function WhatsappChatbotDevelopmentPage() {
  return (
  <>
    <DynamicStructuredData slug="whatsapp-chatbot-development" />
    <WhatsappClient />
  </>
);
}