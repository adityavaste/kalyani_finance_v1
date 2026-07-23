const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/loans/personal-loan#service",

  serviceType: "Personal Loan",

  name: "Personal Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://kalyanifinance.com/loans/personal-loan",

  description:
    "Personal Loan services with instant approval, low interest rates, and flexible repayment options.",
};

const financialProductSchema = {
  "@context": "https://schema.org",

  "@type": "FinancialProduct",

  name: "Personal Loan",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  category: "Personal Loan",

  interestRate: "10.50%",

  loanTerm: "7 Years",

  amount: {
    "@type": "MonetaryAmount",

    currency: "INR",

    maxValue: "4000000",
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

      name: "Personal Loan",

      item: "https://kalyanifinance.com/loans/personal-loan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "Who is eligible for a Personal Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Salaried employees, self-employed professionals, and business owners meeting the lender's eligibility criteria can apply for a Personal Loan.",
      },
    },

    {
      "@type": "Question",

      name: "How much Personal Loan can I get?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Loan eligibility depends on your income, credit score, repayment capacity, and lender policies. Personal Loans are available up to ₹40 Lakhs.",
      },
    },

    {
      "@type": "Question",

      name: "How quickly is a Personal Loan approved?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Many Personal Loan applications are processed within 24 to 48 hours after successful document verification.",
      },
    },

    {
      "@type": "Question",

      name: "Can I prepay my Personal Loan?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Most lenders allow Personal Loan prepayment or foreclosure subject to their applicable terms and charges.",
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