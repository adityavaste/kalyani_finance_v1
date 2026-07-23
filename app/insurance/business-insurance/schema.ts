const schemas = [
  // Financial Service
  {
    "@context": "https://schema.org",
    "@type": "FinancialService",

    "@id":
      "https://kalyanifinance.com/insurance/business-insurance#financialservice",

    name: "Business Insurance",

    provider: {
      "@type": "Organization",
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    serviceType: "Business Insurance",

    url: "https://kalyanifinance.com/insurance/business-insurance",
  },

  // Service Schema
  {
    "@context": "https://schema.org",
    "@type": "Service",

    name: "Business Insurance",

    serviceType: "Commercial Insurance",

    provider: {
      "@type": "Organization",
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },

    description:
      "Comprehensive business insurance covering property damage, fire, theft, employee safety, liability, equipment and business interruption.",

    areaServed: "India",

    url: "https://kalyanifinance.com/insurance/business-insurance",
  },

  // FAQ Schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Business Insurance important?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Business insurance protects companies from financial losses due to accidents, fire, theft, legal liability and unforeseen events.",
        },
      },

      {
        "@type": "Question",
        name: "What does Business Insurance cover?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Coverage may include commercial property, fire, machinery, stock, employee compensation, public liability, cyber risks and business interruption depending on the policy.",
        },
      },

      {
        "@type": "Question",
        name: "Can small businesses buy Business Insurance?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Business Insurance is available for startups, MSMEs, shops, offices, manufacturers, retailers and large enterprises.",
        },
      },
    ],
  },

  // Breadcrumb Schema
  {
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
        name: "Business Insurance",
        item: "https://kalyanifinance.com/insurance/business-insurance",
      },
    ],
  },
];

export default schemas;