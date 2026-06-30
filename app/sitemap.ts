import type { MetadataRoute } from "next";

// Necessário com `output: export` para gerar /sitemap.xml estaticamente no build.
export const dynamic = "force-static";

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
