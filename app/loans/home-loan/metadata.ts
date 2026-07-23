import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home Loan in India | Lowest Interest Rates | Kalyani Finance",

  description:
    "Apply for Home Loans with competitive interest rates, fast approval, doorstep documentation, flexible repayment up to 30 years, and expert guidance from Kalyani Finance.",

  keywords: [
    "Home Loan",
    "Best Home Loan",
    "Housing Loan",
    "Mortgage Loan",
    "Property Loan",
    "Affordable Home Loan",
    "Home Loan Interest Rate",
    "Home Loan EMI",
    "Home Loan Calculator",
    "Home Loan India",
    "Home Loan Maharashtra",
    "Home Loan Pune",
    "Home Loan Consultant",
    "Kalyani Finance",
  ],

  alternates: {
    canonical: "https://kalyanifinance.com/loans/home-loan",
  },

  openGraph: {
    title: "Home Loan | Kalyani Finance",

    description:
      "Get Home Loans up to ₹5 Crore with low interest rates and quick approvals.",

    url: "https://kalyanifinance.com/loans/home-loan",

    siteName: "Kalyani Finance",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Home Loan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Home Loan | Kalyani Finance",

    description:
      "Lowest interest rates with quick approvals and expert support.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
