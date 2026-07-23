import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kalyani Finance",
    short_name: "Kalyani Finance",
    description:
      "Loans and Insurance Solutions across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait",
    lang: "en",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  };
}