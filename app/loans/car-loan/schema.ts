const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/loans/car-loan#service",

  serviceType: "Car Loan",

  name: "Car Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://kalyanifinance.com/loans/car-loan",

  description:
    "Affordable Car Loan services with low interest rates and quick approvals.",
};

const financialProductSchema = {
  "@context": "https://schema.org",

  "@type": "FinancialProduct",

  name: "Car Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  category: "Vehicle Loan",

  interestRate: "8.75%",

  loanTerm: "7 Years",

  amount: {
    "@type": "MonetaryAmount",

    currency: "INR",

    maxValue: "10000000",
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

      name: "Car Loan",

      item: "https://kalyanifinance.com/loans/car-loan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "Who can apply for a Car Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Salaried employees, self-employed professionals, and business owners meeting the lender's eligibility criteria can apply.",
      },
    },

    {
      "@type": "Question",

      name: "Can I get a loan for a used car?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Kalyani Finance assists with financing both new and used cars, subject to lender policies.",
      },
    },

    {
      "@type": "Question",

      name: "What is the maximum repayment tenure for a Car Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Car Loans are generally available with repayment tenures of up to 7 years depending on the lender.",
      },
    },

    {
      "@type": "Question",

      name: "How much Car Loan can I get?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Loan eligibility depends on your income, credit score, repayment capacity, and the value of the vehicle.",
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