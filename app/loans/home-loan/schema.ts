const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/loans/home-loan#service",

  serviceType: "Home Loan",

  name: "Home Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://kalyanifinance.com/loans/home-loan",

  description:
    "Affordable Home Loan services with low interest rates and fast approvals.",
};

const financialProductSchema = {
  "@context": "https://schema.org",

  "@type": "FinancialProduct",

  name: "Home Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  category: "Mortgage Loan",

  interestRate: "8.50%",

  loanTerm: "30 Years",

  amount: {
    "@type": "MonetaryAmount",

    currency: "INR",

    maxValue: "50000000",
  },
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

      name: "Home Loan",

      item: "https://kalyanifinance.com/loans/home-loan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "What is the minimum CIBIL score required for a Home Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "A CIBIL score of 750 or above is generally preferred for better interest rates.",
      },
    },

    {
      "@type": "Question",

      name: "Can I prepay my Home Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Floating-rate Home Loans generally have no prepayment penalty for individual borrowers.",
      },
    },

    {
      "@type": "Question",

      name: "What is the maximum Home Loan amount available?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "You can get Home Loans up to ₹5 Crore depending on eligibility and lender policies.",
      },
    },
  ],
};

export default [
  serviceSchema,
  financialProductSchema,
  breadcrumbSchema,
  faqSchema,
];