import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Green Share Future | Sovereign Digital Infrastructure',
  description: 'Institutional-grade software ecosystems, certified fiscal platforms, and verified real estate infrastructure for a sustainable digital Africa.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/gsf-favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/gsf-favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F4F4F6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
