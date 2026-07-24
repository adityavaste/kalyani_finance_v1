import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})



const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kalyanifinance.com/#organization",
  name: "Kalyani Finance",
  url: "https://kalyanifinance.com",
  logo: "https://kalyanifinance.com/logo.png",
  telephone: "+91-7620838449",
  email: "info@kalyanifinance.com",
  sameAs: [
    "https://facebook.com/...",
    "https://instagram.com/...",
    "https://linkedin.com/..."
  ]
};


const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://kalyanifinance.com/#financialservice",

  name: "Kalyani Finance",

  url: "https://kalyanifinance.com",

  provider: {
    "@id": "https://kalyanifinance.com/#organization"
  },

  areaServed: {
    "@type": "Country",
    name: "India"
  },

  serviceType: [
    "Home Loan",
    "Personal Loan",
    "Business Loan",
    "Car Loan",
    "Gold Loan",
    "Education Loan",
    "Health Insurance",
    "Life Insurance",
    "Travel Insurance",
    "Motor Insurance"
  ]
};


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kalyanifinance.com/#website",

  url: "https://kalyanifinance.com",

  name: "Kalyani Finance",

  publisher: {
    "@id": "https://kalyanifinance.com/#organization"
  }
};



export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [{ color: "#ffffff" }],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kalyanifinance.com"),

  title: {
    default: "Kalyani Finance | Loans & Insurance Solutions",
    template: "%s | Kalyani Finance",
  },

  description:
    "Kalyani Finance provides expert financial solutions including Home Loans, Personal Loans, Business Loans, Car Loans, Gold Loans, Education Loans, Health Insurance, Life Insurance, Motor Insurance, and Travel Insurance across India.",

  applicationName: "Kalyani Finance",

  authors: [
    {
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },
  ],

  creator: "Kalyani Finance",

  publisher: "Kalyani Finance",

  category: "Finance",

  classification:
    "Financial Services, Loans, Insurance, Loan Consultancy, Insurance Consultancy",

  keywords: [
    "home loan",
    "personal loan",
    "business loan",
    "education loan",
    "gold loan",
    "loan against property",
    "car loan",
    "bike loan",

    "health insurance",
    "life insurance",
    "car insurance",
    "bike insurance",
    "travel insurance",
    "family floater insurance",

    "EMI calculator",
    "financial consultant",
    "loan advisor",
    "insurance advisor",
    "best loan provider",
    "financial services India",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://kalyanifinance.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kalyanifinance.com",
    siteName: "Kalyani Finance",

    title: "Kalyani Finance | Loans & Insurance Solutions",

    description:
      "Apply for Home Loans, Personal Loans, Business Loans, Gold Loans, Car Loans, and Insurance plans with Kalyani Finance.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kalyani Finance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kalyani Finance | Loans & Insurance Solutions",

    description:
      "Trusted loan and insurance solutions for individuals and businesses across India.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-icon.png",

    shortcut: "/icon-light-32x32.png",
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },

 verification: {
  google: "googlee04705b5750b0bb6.html",
},
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(financialServiceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(websiteSchema),
    }}
  />

  {children}
  

  {process.env.NODE_ENV === "production" && <Analytics />}

</body>
    </html>
  )
}
