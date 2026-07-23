import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Insurance in India | Cashless Mediclaim & Family Health Plans",

  description:
    "Protect yourself and your family with affordable Health Insurance plans. Compare top insurance companies, enjoy cashless hospitalization, tax benefits, and comprehensive medical coverage with Kalyani Finance.",

  keywords: [
    "Health Insurance",
    "Mediclaim Policy",
    "Medical Insurance",
    "Family Health Insurance",
    "Health Insurance India",
    "Cashless Hospitalization",
    "Health Insurance Plans",
    "Hospital Insurance",
    "Health Cover",
    "Health Policy",
    "Critical Illness Insurance",
    "Health Insurance Premium",
    "Best Health Insurance",
    "Kalyani Finance"
  ],

  alternates: {
    canonical:
      "https://kalyanifinance.com/insurance/health-insurance",
  },

  openGraph: {
    title: "Health Insurance | Kalyani Finance",

    description:
      "Affordable Health Insurance plans with cashless hospitalization and comprehensive medical coverage.",

    url:
      "https://kalyanifinance.com/insurance/health-insurance",

    siteName: "Kalyani Finance",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Health Insurance",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Health Insurance | Kalyani Finance",

    description:
      "Comprehensive Health Insurance plans for individuals and families.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};