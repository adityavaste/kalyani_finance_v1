import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan in India | Instant Approval | Kalyani Finance",

  description:
    "Apply for Personal Loans with competitive interest rates, instant approvals, minimal documentation, and flexible repayment options up to 7 years. Get quick financial assistance with Kalyani Finance.",

  keywords: [
    "Personal Loan",
    "Instant Personal Loan",
    "Quick Personal Loan",
    "Online Personal Loan",
    "Salary Personal Loan",
    "Emergency Loan",
    "Medical Loan",
    "Wedding Loan",
    "Travel Loan",
    "Personal Loan EMI",
    "Personal Loan Calculator",
    "Low Interest Personal Loan",
    "Personal Loan India",
    "Personal Loan Maharashtra",
    "Personal Loan Pune",
    "Kalyani Finance",
  ],

  alternates: {
    canonical: "https://kalyanifinance.com/loans/personal-loan",
  },

  openGraph: {
    title: "Personal Loan | Kalyani Finance",

    description:
      "Get instant Personal Loans with fast approvals, flexible EMIs, and minimal documentation.",

    url: "https://kalyanifinance.com/loans/personal-loan",

    siteName: "Kalyani Finance",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Personal Loan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Personal Loan | Kalyani Finance",

    description:
      "Instant Personal Loans with attractive interest rates and easy approvals.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};