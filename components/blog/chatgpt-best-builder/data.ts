export const POST = {
  title:
    "Buyers Are Asking ChatGPT “Best Builder in [City]” — Is Your Project in the Answer?",
  description:
    "Buyers increasingly ask ChatGPT, Gemini, Perplexity and Google AI for recommendations. If your project isn't cited, you're invisible. Here's how builders show up in AI answers.",
  slug: "buyers-ask-chatgpt-best-builder-geo",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "7 min read",
  dateDisplay: "July 2026",
  category: "AI search",
};

export type Stat = { figure: string; body: string; note: string };

export const STATS: Stat[] = [
  {
    figure: "58%",
    body: "of consumers now use generative AI instead of traditional search for recommendations.",
    note: "GEO industry aggregators",
  },
  {
    figure: "~25%",
    body: "projected decline in traditional search volume by 2026 as queries shift to AI chat.",
    note: "GEO industry aggregators",
  },
  {
    figure: "14.2%",
    body: "average conversion of AI-referred visitors — versus about 2.8% from Google organic.",
    note: "GEO industry aggregators",
  },
];

export const FACTORS: { title: string; body: string }[] = [
  {
    title: "Clear, answer-first content",
    body: "AI engines lift facts from content that directly answers a question in plain language — pricing bands, locations, possession timelines, project details.",
  },
  {
    title: "Mentions across the web",
    body: "Models weigh how often and how consistently you're referenced — portals, Google Business, reviews, news and articles all feed the answer.",
  },
  {
    title: "Structure a machine can read",
    body: "Schema, FAQs and clean, well-organised facts make it easy for an AI to extract and trust what you say.",
  },
  {
    title: "Consistency and freshness",
    body: "The same, current details everywhere — name, projects, locations — signal that you're real and reliable enough to recommend.",
  },
];

export type Step = { n: string; title: string; body: string };

export const PLAYBOOK: Step[] = [
  {
    n: "01",
    title: "Publish answer-first project content",
    body: "Pages that plainly answer what buyers ask AI — projects, price bands, locations, amenities, FAQs — so there's something clean for a model to quote.",
  },
  {
    n: "02",
    title: "Get mentioned and reviewed",
    body: "Presence and reviews across Google Business, property portals and the wider web — the citations AI engines draw on to decide who's credible.",
  },
  {
    n: "03",
    title: "Structure your site for machines",
    body: "Add schema and FAQ markup and keep facts organised, so AI can extract them accurately rather than guessing.",
  },
  {
    n: "04",
    title: "Keep everything consistent and current",
    body: "The same details, kept up to date across every platform — mismatched or stale info is a reason to be left out of the answer.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Do people really use ChatGPT to find builders and property?",
    a: "Increasingly, yes. Most consumers now use generative AI alongside or instead of traditional search for recommendations, and buyers ask AI for shortlists like “best builder in [city]” before ever visiting a portal. If your project isn't part of those answers, you're invisible to that buyer.",
  },
  {
    q: "What is GEO (generative engine optimization)?",
    a: "GEO is the practice of structuring your content and web presence so AI engines like ChatGPT, Gemini, Perplexity and Google AI cite and recommend you in their answers. It's the AI-era counterpart to SEO — optimising for being referenced in a conversation, not ranked in a list.",
  },
  {
    q: "How do I get my project mentioned in AI answers?",
    a: "Publish clear, answer-first content about your projects, earn mentions and reviews across the web, add structured data and FAQs so machines can read you, and keep your details consistent and current everywhere. AI engines cite sources that are clear, well-referenced and trustworthy.",
  },
  {
    q: "Is AI search replacing Google for real estate?",
    a: "Not entirely, but it's taking a growing share — traditional search is projected to shrink as buyers move to AI chat, and AI-referred visitors tend to convert several times better than organic search. The smart move is to be visible in both.",
  },
];
