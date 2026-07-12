import type { MetadataRoute } from "next";
import { POSTS } from "@/components/blog/posts";

const BASE_URL = "https://kriven.ai";

// Stable "last updated" for the evergreen pages (not request-time) so Google
// trusts the lastmod signal. Bump when you meaningfully change these pages.
const SITE_UPDATED = new Date("2026-07-11");

/**
 * The XML "table of contents" Google reads to discover & re-crawl every page.
 * Static routes are listed here; blog posts are pulled automatically from the
 * posts registry, so a new post appears in the sitemap the moment it's added
 * to components/blog/posts.ts (with its own publish date as lastmod).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/how-it-works", priority: 0.9 },
    { path: "/product", priority: 0.9 },
    { path: "/solutions/lead-generation", priority: 0.8 },
    { path: "/solutions/ai-voice-calling", priority: 0.8 },
    { path: "/solutions/whatsapp-automation", priority: 0.8 },
    { path: "/solutions/lead-management", priority: 0.8 },
    { path: "/solutions/analytics", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
    { path: "/demo", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
