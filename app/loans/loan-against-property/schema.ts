const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/loans/loan-against-property#service",

  serviceType: "Loan Against Property",

  name: "Loan Against Property",

  description:
    "Loan Against Property (LAP) for residential and commercial property owners with competitive interest rates, high loan amounts, and flexible repayment options.",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url:
    "https://kalyanifinance.com/loans/loan-against-property",
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
      name: "Loan Against Property",
      item:
        "https://kalyanifinance.com/loans/loan-against-property",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Loan Against Property?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "A Loan Against Property is a secured loan where you mortgage your residential, commercial, or industrial property to obtain funds.",
      },
    },

    {
      "@type": "Question",
      name: "How much loan can I get against my property?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Depending on the lender and property valuation, you can generally receive up to 60% to 75% of your property's market value.",
      },
    },

    {
      "@type": "Question",
      name: "What documents are required?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "You typically need identity proof, address proof, income proof, bank statements, and valid property ownership documents.",
      },
    },

    {
      "@type": "Question",
      name: "Can self-employed individuals apply?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Both salaried and self-employed individuals can apply if they meet the lender's eligibility requirements.",
      },
    },

    {
      "@type": "Question",
      name: "What can a Loan Against Property be used for?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The loan can be used for business expansion, higher education, medical emergencies, home renovation, weddings, debt consolidation, or other personal financial needs.",
      },
    }
  ],
};

export default [
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];