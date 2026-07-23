const schemas = [
  // Financial Service
  {
    "@context": "https://schema.org",
    "@type": "FinancialService",

    "@id":
      "https://kalyanifinance.com/insurance/travel-insurance#financialservice",

    name: "Travel Insurance",

    provider: {
      "@type": "Organization",
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    serviceType: "Travel Insurance",

    url: "https://kalyanifinance.com/insurance/travel-insurance",
  },

  // Service Schema
  {
    "@context": "https://schema.org",
    "@type": "Service",

    name: "Travel Insurance",

    serviceType: "Travel Insurance",

    provider: {
      "@type": "Organization",
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },

    description:
      "Comprehensive Travel Insurance covering overseas medical emergencies, trip cancellation, baggage loss, passport loss, flight delays and personal liability.",

    areaServed: "India",

    url: "https://kalyanifinance.com/insurance/travel-insurance",
  },

  // FAQ Schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "Why do I need Travel Insurance?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Travel Insurance protects you against unexpected expenses such as medical emergencies, trip cancellations, lost baggage, passport loss and travel delays during your journey.",
        },
      },

      {
        "@type": "Question",

        name: "Does Travel Insurance cover overseas medical treatment?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most travel insurance plans cover emergency hospitalization, doctor consultations and medical treatment while travelling abroad.",
        },
      },

      {
        "@type": "Question",

        name: "Is Travel Insurance mandatory for visa applications?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Many countries, especially Schengen countries, require valid Travel Insurance as part of the visa application process.",
        },
      }
    ]
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

        name: "Travel Insurance",

        item: "https://kalyanifinance.com/insurance/travel-insurance",
      }
    ]
  }
];

export default schemas;