import type { MetadataRoute } from "next";

/**
 * /robots.txt — libera buscadores tradicionais e, explicitamente, os motores
 * de IA / LLM (para que a marca AG LABS possa ser lida e citada por eles).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Google-Extended",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot-Extended",
          "CCBot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://lojalabs.com.br/sitemap.xml",
    host: "https://lojalabs.com.br",
  };
}
