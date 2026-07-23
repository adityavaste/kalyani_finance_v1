const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/insurance/health-insurance#service",

  serviceType: "Health Insurance",

  name: "Health Insurance",

  description:
    "Health Insurance plans offering cashless hospitalization, medical expense coverage, critical illness protection, and family health plans.",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url:
    "https://kalyanifinance.com/insurance/health-insurance",
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
      name: "Health Insurance",
      item:
        "https://kalyanifinance.com/insurance/health-insurance",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I buy Health Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Health Insurance helps cover hospitalization expenses, surgeries, daycare treatments, and medical emergencies, reducing financial burden.",
      },
    },

    {
      "@type": "Question",
      name: "Does Health Insurance provide cashless treatment?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Most insurers offer cashless hospitalization at their network hospitals across India.",
      },
    },

    {
      "@type": "Question",
      name: "Can I include my family in one policy?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Family Floater Health Insurance allows you to cover your spouse, children, and parents under a single policy.",
      },
    },

    {
      "@type": "Question",
      name: "Is there any tax benefit on Health Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Premiums paid for Health Insurance may qualify for tax deductions under Section 80D of the Income Tax Act.",
      },
    },

    {
      "@type": "Question",
      name: "What is covered under a Health Insurance policy?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Coverage generally includes hospitalization expenses, surgeries, ICU charges, daycare procedures, ambulance charges, and pre/post hospitalization expenses, depending on the policy.",
      },
    }
  ],
};

export default [
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];