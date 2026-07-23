import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Insurance in India | Term Insurance & Life Cover Plans",

  description:
    "Secure your family's future with affordable Life Insurance plans. Compare Term Insurance, Whole Life, Endowment, ULIP, and Child Plans from leading insurers through Kalyani Finance.",

  keywords: [
    "Life Insurance",
    "Term Insurance",
    "Life Cover",
    "Best Life Insurance",
    "Whole Life Insurance",
    "Endowment Plan",
    "ULIP",
    "Child Insurance Plan",
    "Retirement Plan",
    "Life Insurance India",
    "Insurance Advisor",
    "Life Insurance Policy",
    "Family Protection Plan",
    "Kalyani Finance"
  ],

  alternates: {
    canonical:
      "https://kalyanifinance.com/insurance/life-insurance",
  },

  openGraph: {
    title: "Life Insurance | Kalyani Finance",

    description:
      "Protect your loved ones with comprehensive Life Insurance and Term Insurance plans.",

    url:
      "https://kalyanifinance.com/insurance/life-insurance",

    siteName: "Kalyani Finance",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Life Insurance",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Life Insurance | Kalyani Finance",

    description:
      "Affordable Life Insurance plans to protect your family's future.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};