import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('/whatsapp-chatbot-development');
}

import WhatsappClient from '@/components/whatsapp-client';

export default function WhatsappChatbotDevelopmentPage() {
  return <WhatsappClient />;
}
