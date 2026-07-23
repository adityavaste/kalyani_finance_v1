import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loan in India | Lowest Interest Rates | Kalyani Finance",

  description:
    "Apply for Car Loans with competitive interest rates, quick approvals, flexible repayment options up to 7 years, and expert guidance from Kalyani Finance.",

  keywords: [
    "Car Loan",
    "New Car Loan",
    "Used Car Loan",
    "Vehicle Loan",
    "Auto Loan",
    "Car Finance",
    "Best Car Loan",
    "Car Loan Interest Rate",
    "Car Loan EMI",
    "Car Loan Calculator",
    "Car Loan India",
    "Car Loan Maharashtra",
    "Car Loan Pune",
    "Kalyani Finance",
  ],

  alternates: {
    canonical: "https://kalyanifinance.com/loans/car-loan",
  },

  openGraph: {
    title: "Car Loan | Kalyani Finance",

    description:
      "Finance your dream car with low interest rates, quick approvals and flexible EMI options.",

    url: "https://kalyanifinance.com/loans/car-loan",

    siteName: "Kalyani Finance",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Car Loan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Car Loan | Kalyani Finance",

    description:
      "Affordable Car Loans with attractive interest rates and easy documentation.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};