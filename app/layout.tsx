
import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import QueryProvider from '@/components/QueryProvider'
export const metadata: Metadata = {
  metadataBase: new URL('https://neologicx.com'),
  title: {
    template: '%s',
    default: 'Neologicx | Custom Software & Product Engineering Company',
  },
  description: 'Custom software and product engineering for web, mobile, SaaS, business systems, e-commerce and integrations.',
  authors: [{ name: 'Neologicx Resources Pvt Ltd' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#092147',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

import WhatsAppWidget from '@/components/whatsapp-widget'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Neologicx',
  url: 'https://neologicx.com',
  logo: 'https://neologicx.com/neo_logo.png',
  description: 'Custom software and product engineering for web, mobile, SaaS, business systems, e-commerce and integrations.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-94141-38694',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased" suppressHydrationWarning>
        <QueryProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppWidget />
        </QueryProvider>
      </body>
    </html>
  )
}
