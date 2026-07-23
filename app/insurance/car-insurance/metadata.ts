import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Insurance in India | Comprehensive & Third Party Insurance",

  description:
    "Buy or renew Car Insurance online with Kalyani Finance. Compare comprehensive, third-party, zero depreciation, and own damage policies from leading insurers at affordable premiums.",

  keywords: [
    "Car Insurance",
    "Motor Insurance",
    "Vehicle Insurance",
    "Four Wheeler Insurance",
    "Third Party Car Insurance",
    "Comprehensive Car Insurance",
    "Zero Depreciation Insurance",
    "Own Damage Insurance",
    "Car Insurance Renewal",
    "Best Car Insurance",
    "Cashless Car Insurance",
    "Car Insurance India",
    "Motor Policy",
    "Kalyani Finance"
  ],

  alternates: {
    canonical:
      "https://kalyanifinance.com/insurance/car-insurance",
  },

  openGraph: {
    title: "Car Insurance | Kalyani Finance",

    description:
      "Compare the best Car Insurance plans with cashless claims and affordable premiums.",

    url:
      "https://kalyanifinance.com/insurance/car-insurance",

    siteName: "Kalyani Finance",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Car Insurance",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Car Insurance | Kalyani Finance",

    description:
      "Protect your vehicle with affordable Car Insurance plans.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};