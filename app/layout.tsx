import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'KalyaniFinance - Smart Loans & Insurance Solutions',
  description: 'Get the best loans and insurance solutions for your needs. Home loans, car loans, personal loans, health insurance, and more. Apply now for instant approval.',
  keywords: 'loans, insurance, home loan, car loan, personal loan, health insurance, life insurance, India, finance',
  authors: [{ name: 'KalyaniFinance' }],
  creator: 'KalyaniFinance',
  publisher: 'KalyaniFinance',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kalyanifinance.com',
    siteName: 'KalyaniFinance',
    title: 'KalyaniFinance - Smart Loans & Insurance Solutions',
    description: 'Get the best loans and insurance solutions for your needs. Home loans, car loans, personal loans, health insurance, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KalyaniFinance - Smart Loans & Insurance Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KalyaniFinance - Smart Loans & Insurance Solutions',
    description: 'Get the best loans and insurance solutions for your needs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
