import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kalyanifinance.com/sitemap.xml",
    host: "https://kalyanifinance.com",
  };
}