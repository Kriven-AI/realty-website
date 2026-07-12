// Content for "Best AI Tools for Real Estate Lead Management in India (2026)".
// An honest roundup with a clear disclosure that Kriven is our own product.
// Shared between article (rendering) and page (JSON-LD).

export const POST = {
  title: "Best AI Tools for Real Estate Lead Management in India (2026)",
  description:
    "An honest roundup of the best real estate lead management and CRM tools for Indian builders in 2026 — what each is best for, strengths, watch-outs and pricing.",
  slug: "best-ai-tools-real-estate-lead-management-india",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "9 min read",
  dateDisplay: "July 2026",
  category: "Buyer's guide",
};

export const CRITERIA: { title: string; body: string }[] = [
  {
    title: "Multi-channel lead capture",
    body: "Does it pull leads from 99acres, MagicBricks, Meta and Google ads, your website and WhatsApp into one place — automatically and in real time?",
  },
  {
    title: "Speed and follow-up automation",
    body: "Can it respond in minutes and follow up for weeks on its own, or does it just store leads and wait for your team to act?",
  },
  {
    title: "Calling and WhatsApp",
    body: "Real estate runs on phone and WhatsApp. Native calling, WhatsApp automation and multi-language support matter more than email tools.",
  },
  {
    title: "India fit",
    body: "Indian languages, portal integrations, RERA-readiness and DLT-compliant messaging — a US-built tool rarely handles these well.",
  },
  {
    title: "Inventory and post-sales",
    body: "If you need unit-wise inventory, channel-partner management and post-booking workflows, you need a full real-estate CRM, not just a lead tool.",
  },
  {
    title: "Total cost",
    body: "Look past the sticker price to setup, training and whether it actually reduces your cost per site visit — not just your cost per lead.",
  },
];

export type Tool = {
  name: string;
  tag: string;
  best: string;
  body: string;
  ours?: boolean;
};

export const TOOLS: Tool[] = [
  {
    name: "Kriven AI",
    tag: "AI sales engine",
    best: "Builders whose problem is working and converting leads, not just storing them",
    body: "Kriven isn't a traditional CRM — it's an AI execution layer that both generates leads (search, ads, social) and works them: a voice agent that calls every new lead in under 60 seconds, WhatsApp follow-up that never forgets, qualification, and site-visit booking, 24/7 in any Indian language. Watch-out: it isn't a full inventory or post-sales suite — it pairs with, or replaces, a database-style CRM. Best if your leads are leaking after capture.",
    ours: true,
  },
  {
    name: "Sell.Do",
    tag: "Dedicated real-estate CRM",
    best: "Large developers wanting one all-in-one, RERA-ready system",
    body: "The most established India-only real-estate CRM, with 15+ years behind it. Deep, property-specific features — unit inventory, channel-partner and post-sales management, AI call analysis, portal capture. Watch-out: it's an enterprise platform to run (quote-based, often ₹20k–60k/month for a full team), and like any CRM it still relies on your team to actually work the leads.",
  },
  {
    name: "LeadSquared",
    tag: "Lead automation & analytics",
    best: "High-volume, multi-city operations running heavy paid campaigns",
    body: "A Bengaluru-built sales-execution platform used widely across real estate, edtech and healthcare. Its strengths are automation, lead scoring, routing and deep analytics at scale. Watch-out: it's not real-estate-specific (no native inventory), and it can be heavy and pricey for a smaller builder.",
  },
  {
    name: "PropFlo",
    tag: "Developer & channel-partner CRM",
    best: "Developers who sell heavily through channel partners",
    body: "A newer AI-based real-estate CRM built in India specifically for developers, with a strong channel-partner module. A serious, property-first contender. Watch-out: smaller and less proven than the incumbents — worth a close look if channel partners are central to your sales.",
  },
  {
    name: "Zoho CRM",
    tag: "Flexible general CRM",
    best: "Mid-sized and smaller teams that want it cheap and customisable",
    body: "Not real-estate-specific, but hugely flexible and affordable (around ₹800/user/month for Standard), with native WhatsApp, email and automation. Watch-out: you'll spend real time configuring it for property workflows — it's a build-it-yourself system, not a pre-built real-estate solution.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is the best real estate CRM in India in 2026?",
    a: "There's no single best — it depends on your problem. For a full property CRM with inventory and post-sales, Sell.Do leads; for high-volume automation, LeadSquared; for flexibility on a budget, Zoho. If your issue is leads leaking after capture, an AI execution layer like Kriven AI that actually calls and follows up matters more than any database.",
  },
  {
    q: "What's the best lead management software for builders?",
    a: "Look for real-time multi-channel capture, fast automated follow-up on call and WhatsApp, Indian-language support and analytics tied to site visits. The biggest gains come from tools that work leads automatically, not just store them — since most leads are lost to weak follow-up, not weak software.",
  },
  {
    q: "What's the difference between a real estate CRM and an AI sales engine?",
    a: "A CRM stores and organises leads and waits for your team to act. An AI sales engine (like Kriven AI) does the acting — it reaches, qualifies and follows up with every lead on its own, then hands ready buyers to your salespeople. Many builders use both: a CRM to hold data, an AI engine to work it.",
  },
  {
    q: "How much does a real estate CRM cost in India?",
    a: "Flexible general CRMs like Zoho start around ₹800/user/month. Dedicated enterprise real-estate CRMs (Sell.Do, LeadSquared) are usually quote-based, often ₹20,000–60,000/month for a full team deployment. AI execution tools are typically priced on usage.",
  },
];
