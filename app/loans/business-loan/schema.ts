const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/loans/business-loan#service",

  serviceType: "Business Loan",

  name: "Business Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://kalyanifinance.com/loans/business-loan",

  description:
    "Business Loan services for startups, MSMEs, and established businesses with quick approvals and competitive interest rates.",
};

const financialProductSchema = {
  "@context": "https://schema.org",

  "@type": "FinancialProduct",

  name: "Business Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  category: "Business Loan",

  interestRate: "11.00%",

  loanTerm: "10 Years",

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

      name: "Business Loan",

      item: "https://kalyanifinance.com/loans/business-loan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "Who can apply for a Business Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Business owners, MSMEs, startups, self-employed professionals, and partnership firms meeting the lender's eligibility criteria can apply.",
      },
    },

    {
      "@type": "Question",

      name: "What is the maximum Business Loan amount?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Business Loans are available up to ₹5 Crore depending on business turnover, financials, and lender policies.",
      },
    },

    {
      "@type": "Question",

      name: "What documents are required for a Business Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Generally, identity proof, address proof, PAN card, Aadhaar card, bank statements, GST returns, ITRs, and business registration documents are required.",
      },
    },

    {
      "@type": "Question",

      name: "How quickly is a Business Loan approved?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Most Business Loan applications are processed within 2 to 7 working days after successful document verification.",
      },
    },
  ],
};

const schemas = [
  serviceSchema,
  financialProductSchema,
  breadcrumbSchema,
  faqSchema,
];

export default schemas;