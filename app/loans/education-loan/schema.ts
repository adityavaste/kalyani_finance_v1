const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://kalyanifinance.com/loans/education-loan#service",

  serviceType: "Education Loan",

  name: "Education Loan",

  description:
    "Education Loan services for higher education in India and abroad with competitive interest rates and flexible repayment options.",

  provider: {
    "@id": "https://kalyanifinance.com/#organization",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://kalyanifinance.com/loans/education-loan",
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
      name: "Education Loan",
      item:
        "https://kalyanifinance.com/loans/education-loan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Who can apply for an Education Loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students pursuing higher education in India or abroad can apply, subject to lender eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get an Education Loan without collateral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many banks provide collateral-free education loans up to eligible limits.",
      },
    },
    {
      "@type": "Question",
      name: "Does the loan cover study abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Education Loans are available for approved universities in India and overseas.",
      },
    },
    {
      "@type": "Question",
      name: "What expenses are covered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuition fees, hostel fees, books, equipment, travel expenses, and other approved educational costs.",
      },
    },
  ],
};

export default [
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];