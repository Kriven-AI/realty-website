export const POST = {
  title: "Your CRM Isn't Booking Site Visits — CRM vs. Sales Engine",
  description:
    "A CRM stores your leads and waits — it doesn't call, follow up or book visits. Here's the difference between a CRM and a sales engine.",
  slug: "crm-vs-sales-engine-real-estate",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "CRM vs sales engine",
};

export const GREAT: string[] = [
  "A single record of every lead, contact and deal",
  "Pipeline stages, tasks and reminders",
  "History, notes and reporting your team can trust",
  "Integrations with your portals, ads and tools",
];

export const MISSING: string[] = [
  "It doesn't call the lead — it waits for someone to",
  "It doesn't follow up on its own, five or six times, for weeks",
  "It doesn't work nights, weekends or festivals",
  "It assumes a human will act — and most of the time, no one does",
];

export type Row = { dimension: string; crm: string; engine: string };

export const COMPARE: Row[] = [
  {
    dimension: "What it is",
    crm: "A system of record",
    engine: "A system of action",
  },
  {
    dimension: "Core job",
    crm: "Store and organise your leads",
    engine: "Reach, qualify and follow up with your leads",
  },
  {
    dimension: "Who does the work",
    crm: "Your team — when they remember",
    engine: "The engine, automatically, 24/7",
  },
  {
    dimension: "After hours",
    crm: "Nothing happens until morning",
    engine: "Calls and messages still go out",
  },
  {
    dimension: "What you get",
    crm: "Clean, organised data",
    engine: "Booked site visits",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What's the difference between a CRM and a sales engine?",
    a: "A CRM is a system of record — it stores and organises leads and waits for your team to act. A sales engine is a system of action — it reaches, qualifies and follows up with every lead on its own, then hands ready buyers to your salespeople. One holds the data; the other does the work.",
  },
  {
    q: "Does an AI sales engine replace my CRM?",
    a: "Not necessarily — the two do different jobs. Many builders keep their CRM as the record and add a sales engine like Kriven AI to actually work the leads. Kriven can pull from your existing CRM or capture leads directly.",
  },
  {
    q: "Why isn't my CRM converting leads?",
    a: "Because converting leads was never a CRM's job — it stores them and waits. Industry data shows about 90% of leads in a real-estate CRM get no follow-up after 30 days. Conversion needs something that acts on the data: fast response and relentless follow-up, which is what a sales engine adds.",
  },
];
