export const POST = {
  title: "You Know Your Leads Said No. Do You Know Why?",
  description:
    "Builders track how many leads convert — rarely why the rest don't. Your calls and WhatsApp chats already hold the answer: objections, intent and what works.",
  slug: "why-real-estate-leads-say-no-analytics",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "Analytics",
};

export type Insight = { title: string; body: string };

export const INSIGHTS: Insight[] = [
  {
    title: "The real objections, ranked",
    body: "Price, possession date, home loan, location, a competing project — every call reveals what's actually stopping buyers, and which objection comes up most for which project.",
  },
  {
    title: "Who you're losing to",
    body: "Buyers mention the competing projects and builders they're weighing you against — so you can see who keeps beating you, and on what: price, location or possession.",
  },
  {
    title: "Which channels bring buyers, not browsers",
    body: "Two sources can deliver the same lead count and completely different outcomes. Your conversations show which channels produce people who actually book.",
  },
  {
    title: "Which pitches move people to a visit",
    body: "The lines, offers and projects that turn a chat into a booked site visit — and the ones that quietly kill momentum.",
  },
  {
    title: "How your sales team handles transfers",
    body: "When a warm lead is passed to a salesperson, what happens next? Whether they follow up, and how, is usually invisible — until you can see it.",
  },
  {
    title: "Per-lead intent — who's hot and why",
    body: "Not just a score, but the reason behind it: what this specific buyer wants, worries about, and needs next.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Why do real estate leads say no?",
    a: "Usually for a handful of recurring reasons — price, possession timeline, home-loan eligibility, location, or a competing project — plus slow or dropped follow-up. The specific mix varies by project, and it's sitting in your call and WhatsApp conversations if you analyse them.",
  },
  {
    q: "How do you find out why leads aren't converting?",
    a: "Look at the conversations, not just the pipeline. Every call and chat contains the objection, the intent and the moment a lead cooled. Analysing them across all leads surfaces the top reasons for 'no' — which you can then actually fix.",
  },
  {
    q: "What should builders track beyond lead count?",
    a: "Cost per site visit and per booking, top objections by project, which channels convert (not just which are cheapest), which pitches work, and how your sales team handles transferred leads. Lead count tells you nothing about why deals are won or lost.",
  },
];
