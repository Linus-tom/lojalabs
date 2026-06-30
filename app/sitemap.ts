import type { MetadataRoute } from "next";

/** /sitemap.xml — hub de página única por enquanto. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lojalabs.com.br/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
