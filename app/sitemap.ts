import type { MetadataRoute } from "next";

const BASE_URL = "https://kriven.ai";

// A stable "last updated" date (not request-time) so Google trusts the
// lastmod signal. Bump this when you meaningfully change site content.
const LAST_UPDATED = new Date("2026-06-27");

/**
 * The XML "table of contents" Google reads to discover & re-crawl every
 * page. Add new public routes here as the site grows (e.g. blog posts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/how-it-works", priority: 0.9 },
    { path: "/product", priority: 0.9 },
    { path: "/demo", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly",
    priority,
  }));
}
