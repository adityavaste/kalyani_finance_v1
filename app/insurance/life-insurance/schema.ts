const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/insurance/life-insurance#service",

  serviceType: "Life Insurance",

  name: "Life Insurance",

  description:
    "Life Insurance services including Term Insurance, Whole Life Plans, ULIPs, Child Plans, and Retirement Plans to protect your family's financial future.",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url:
    "https://kalyanifinance.com/insurance/life-insurance",
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
      name: "Insurance",
      item: "https://kalyanifinance.com/insurance",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Life Insurance",
      item:
        "https://kalyanifinance.com/insurance/life-insurance",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I buy Life Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Life Insurance provides financial security to your family in case of your unfortunate demise and helps them meet future financial obligations.",
      },
    },

    {
      "@type": "Question",
      name: "What is Term Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Term Insurance offers high life coverage at affordable premiums for a specified policy term.",
      },
    },

    {
      "@type": "Question",
      name: "Can I claim tax benefits on Life Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Premiums paid for eligible Life Insurance policies qualify for tax benefits under Sections 80C and 10(10D) of the Income Tax Act, subject to applicable rules.",
      },
    },

    {
      "@type": "Question",
      name: "How much Life Insurance coverage do I need?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The ideal coverage depends on your income, liabilities, family expenses, and long-term financial goals.",
      },
    },

    {
      "@type": "Question",
      name: "What documents are required for Life Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Generally, identity proof, address proof, age proof, income proof, PAN card, Aadhaar card, and medical reports (if required) are needed.",
      },
    }
  ],
};

export default [
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];