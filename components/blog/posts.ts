// Central registry of published blog posts. The /blog index maps over this;
// add one entry per new post. Pulls summary data from each post's own module
// so the listing never drifts from the article.

import { POST as WHATSAPP_TEMPLATES } from "./whatsapp-templates/data";
import { POST as LEADS_NOT_CONVERTING } from "./leads-not-converting/data";
import { POST as FIRST_60_MINUTES } from "./first-60-minutes/data";
import { POST as REEL_COMMENTS } from "./reel-comments/data";
import { POST as AI_VS_TELECALLING } from "./ai-vs-telecalling/data";
import { POST as BEST_AI_TOOLS } from "./best-ai-tools/data";
import { POST as MISSED_CALLS } from "./missed-calls-cost/data";
import { POST as ONE_ENGINE } from "./one-engine-vs-five/data";
import { POST as CRM_VS_ENGINE } from "./crm-vs-sales-engine/data";
import { POST as NO_SHOWS } from "./no-shows/data";
import { POST as CHATGPT_BUILDER } from "./chatgpt-best-builder/data";
import { POST as CODEMIX } from "./codemix/data";
import { POST as ANALYTICS } from "./analytics/data";

export type BlogListing = {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateDisplay: string;
  datePublished: string;
  readTime: string;
};

export const POSTS: BlogListing[] = [
  {
    slug: CODEMIX.slug,
    title: CODEMIX.title,
    description: CODEMIX.description,
    category: CODEMIX.category,
    dateDisplay: CODEMIX.dateDisplay,
    datePublished: CODEMIX.datePublished,
    readTime: CODEMIX.readTime,
  },
  {
    slug: ANALYTICS.slug,
    title: ANALYTICS.title,
    description: ANALYTICS.description,
    category: ANALYTICS.category,
    dateDisplay: ANALYTICS.dateDisplay,
    datePublished: ANALYTICS.datePublished,
    readTime: ANALYTICS.readTime,
  },
  {
    slug: CHATGPT_BUILDER.slug,
    title: CHATGPT_BUILDER.title,
    description: CHATGPT_BUILDER.description,
    category: CHATGPT_BUILDER.category,
    dateDisplay: CHATGPT_BUILDER.dateDisplay,
    datePublished: CHATGPT_BUILDER.datePublished,
    readTime: CHATGPT_BUILDER.readTime,
  },
  {
    slug: ONE_ENGINE.slug,
    title: ONE_ENGINE.title,
    description: ONE_ENGINE.description,
    category: ONE_ENGINE.category,
    dateDisplay: ONE_ENGINE.dateDisplay,
    datePublished: ONE_ENGINE.datePublished,
    readTime: ONE_ENGINE.readTime,
  },
  {
    slug: CRM_VS_ENGINE.slug,
    title: CRM_VS_ENGINE.title,
    description: CRM_VS_ENGINE.description,
    category: CRM_VS_ENGINE.category,
    dateDisplay: CRM_VS_ENGINE.dateDisplay,
    datePublished: CRM_VS_ENGINE.datePublished,
    readTime: CRM_VS_ENGINE.readTime,
  },
  {
    slug: NO_SHOWS.slug,
    title: NO_SHOWS.title,
    description: NO_SHOWS.description,
    category: NO_SHOWS.category,
    dateDisplay: NO_SHOWS.dateDisplay,
    datePublished: NO_SHOWS.datePublished,
    readTime: NO_SHOWS.readTime,
  },
  {
    slug: MISSED_CALLS.slug,
    title: MISSED_CALLS.title,
    description: MISSED_CALLS.description,
    category: MISSED_CALLS.category,
    dateDisplay: MISSED_CALLS.dateDisplay,
    datePublished: MISSED_CALLS.datePublished,
    readTime: MISSED_CALLS.readTime,
  },
  {
    slug: BEST_AI_TOOLS.slug,
    title: BEST_AI_TOOLS.title,
    description: BEST_AI_TOOLS.description,
    category: BEST_AI_TOOLS.category,
    dateDisplay: BEST_AI_TOOLS.dateDisplay,
    datePublished: BEST_AI_TOOLS.datePublished,
    readTime: BEST_AI_TOOLS.readTime,
  },
  {
    slug: AI_VS_TELECALLING.slug,
    title: AI_VS_TELECALLING.title,
    description: AI_VS_TELECALLING.description,
    category: AI_VS_TELECALLING.category,
    dateDisplay: AI_VS_TELECALLING.dateDisplay,
    datePublished: AI_VS_TELECALLING.datePublished,
    readTime: AI_VS_TELECALLING.readTime,
  },
  {
    slug: REEL_COMMENTS.slug,
    title: REEL_COMMENTS.title,
    description: REEL_COMMENTS.description,
    category: REEL_COMMENTS.category,
    dateDisplay: REEL_COMMENTS.dateDisplay,
    datePublished: REEL_COMMENTS.datePublished,
    readTime: REEL_COMMENTS.readTime,
  },
  {
    slug: FIRST_60_MINUTES.slug,
    title: FIRST_60_MINUTES.title,
    description: FIRST_60_MINUTES.description,
    category: FIRST_60_MINUTES.category,
    dateDisplay: FIRST_60_MINUTES.dateDisplay,
    datePublished: FIRST_60_MINUTES.datePublished,
    readTime: FIRST_60_MINUTES.readTime,
  },
  {
    slug: LEADS_NOT_CONVERTING.slug,
    title: LEADS_NOT_CONVERTING.title,
    description: LEADS_NOT_CONVERTING.description,
    category: LEADS_NOT_CONVERTING.category,
    dateDisplay: LEADS_NOT_CONVERTING.dateDisplay,
    datePublished: LEADS_NOT_CONVERTING.datePublished,
    readTime: LEADS_NOT_CONVERTING.readTime,
  },
  {
    slug: WHATSAPP_TEMPLATES.slug,
    title: WHATSAPP_TEMPLATES.title,
    description: WHATSAPP_TEMPLATES.description,
    category: "WhatsApp",
    dateDisplay: WHATSAPP_TEMPLATES.dateDisplay,
    datePublished: WHATSAPP_TEMPLATES.datePublished,
    readTime: WHATSAPP_TEMPLATES.readTime,
  },
];
