const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kalyanifinance.com/loans/gold-loan#service",

  serviceType: "Gold Loan",

  name: "Gold Loan",

  description:
    "Get instant Gold Loans against your gold jewellery with low interest rates, minimal documentation, and flexible repayment options.",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://kalyanifinance.com/loans/gold-loan",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kalyanifinance.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Loans",
      item: "https://kalyanifinance.com/loans",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gold Loan",
      item: "https://kalyanifinance.com/loans/gold-loan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Gold Loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Gold Loan is a secured loan where you pledge your gold jewellery as collateral to receive instant funds.",
      },
    },
    {
      "@type": "Question",
      name: "How much Gold Loan can I get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The loan amount depends on the purity and market value of your pledged gold, subject to RBI guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, only Aadhaar Card, PAN Card, and passport-size photographs are required along with the gold jewellery.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly is the Gold Loan approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gold Loans are usually approved within a few hours after gold valuation and document verification.",
      },
    },
    {
      "@type": "Question",
      name: "Can I repay the Gold Loan early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most Gold Loans can be prepaid without major penalties, depending on the lender's policy.",
      },
    }
  ],
};

export default [
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];