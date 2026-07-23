import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    {
      url: "https://kalyanifinance.com",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://kalyanifinance.com/about",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://kalyanifinance.com/contact",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://kalyanifinance.com/blog",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://kalyanifinance.com/emi-calculator",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://kalyanifinance.com/loans",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://kalyanifinance.com/insurance",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const loanPages = [
    "home-loan",
    "personal-loan",
    "business-loan",
    "car-loan",
    "education-loan",
    "gold-loan",
    "loan-against-property",
  ].map((slug) => ({
    url: `https://kalyanifinance.com/loans/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const insurancePages = [
    "health-insurance",
    "life-insurance",
    "car-insurance",
    "bike-insurance",
    "travel-insurance",
    "family-floater",
    "business-insurance",
  ].map((slug) => ({
    url: `https://kalyanifinance.com/insurance/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...loanPages,
    ...insurancePages,
  ];
}