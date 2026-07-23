const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://kalyanifinance.com/insurance/car-insurance#service",

  serviceType: "Car Insurance",

  name: "Car Insurance",

  description:
    "Car Insurance services including Comprehensive, Third Party, Zero Depreciation, Own Damage, and Cashless Claim policies from leading insurance companies.",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url:
    "https://kalyanifinance.com/insurance/car-insurance",
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
      name: "Car Insurance",
      item:
        "https://kalyanifinance.com/insurance/car-insurance",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Is Car Insurance mandatory in India?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Third-party Car Insurance is mandatory under the Motor Vehicles Act for all vehicles driven on Indian roads.",
      },
    },

    {
      "@type": "Question",
      name: "What is the difference between Third Party and Comprehensive Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Third-party insurance covers damages caused to others, while Comprehensive Insurance also covers damage to your own vehicle due to accidents, theft, fire, floods, and natural disasters.",
      },
    },

    {
      "@type": "Question",
      name: "Can I renew my expired Car Insurance?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Expired Car Insurance policies can usually be renewed after vehicle inspection, depending on the insurer's policy.",
      },
    },

    {
      "@type": "Question",
      name: "What is Zero Depreciation Cover?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Zero Depreciation Cover ensures that depreciation on replaced vehicle parts is not deducted during claim settlement.",
      },
    },

    {
      "@type": "Question",
      name: "How can I file a Car Insurance claim?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can notify the insurer immediately after an accident, submit the required documents, and complete the inspection process for claim settlement.",
      },
    }
  ],
};

export default [
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];