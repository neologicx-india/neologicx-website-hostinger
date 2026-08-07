
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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#b89968',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
