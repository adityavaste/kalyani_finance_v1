const schemas = [
  // Financial Service
  {
    "@context": "https://schema.org",
    "@type": "FinancialService",

    "@id":
      "https://kalyanifinance.com/insurance/bike-insurance#financialservice",

    name: "Bike Insurance",

    provider: {
      "@type": "Organization",
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    serviceType: "Bike Insurance",

    url: "https://kalyanifinance.com/insurance/bike-insurance",
  },

  // Service Schema
  {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: "Bike Insurance",

    name: "Bike Insurance",

    provider: {
      "@type": "Organization",
      name: "Kalyani Finance",
      url: "https://kalyanifinance.com",
    },

    description:
      "Buy comprehensive or third-party bike insurance online. Get affordable premiums, cashless claims, instant policy issuance and hassle-free renewals.",

    areaServed: "India",

    url: "https://kalyanifinance.com/insurance/bike-insurance",
  },

  // FAQ Schema
  {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "Is third-party bike insurance mandatory?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Third-party bike insurance is mandatory in India under the Motor Vehicles Act.",
        },
      },

      {
        "@type": "Question",

        name: "Can I renew my expired bike insurance?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can renew your expired bike insurance online. Vehicle inspection may be required in some cases.",
        },
      },

      {
        "@type": "Question",

        name: "What is covered under comprehensive bike insurance?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprehensive bike insurance covers third-party liability along with damages caused by accidents, fire, theft, natural disasters and man-made calamities.",
        },
      },
    ],
  },

  // Breadcrumb
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

        name: "Bike Insurance",

        item: "https://kalyanifinance.com/insurance/bike-insurance",
      },
    ],
  },
];

export default schemas;