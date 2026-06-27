import type { MetadataRoute } from "next";

/**
 * Tells every crawler (Googlebot, Bingbot, GPTBot, etc.) it may crawl the
 * whole site except the API routes, and points them to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://kriven.ai/sitemap.xml",
  };
}
