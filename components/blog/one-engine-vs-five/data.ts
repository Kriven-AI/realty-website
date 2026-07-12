export const POST = {
  title: "One AI Sales Engine vs. Five Separate Vendors: The Real Cost",
  description:
    "Most builders run marketing, calling, WhatsApp, CRM and analytics as five vendors. The real cost isn't the invoices — it's the leads lost between them.",
  slug: "one-ai-sales-engine-vs-five-vendors",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "Comparison",
};

export type Vendor = { name: string; role: string; problem: string };

export const VENDORS: Vendor[] = [
  {
    name: "Marketing / ad agency",
    role: "Runs your Google and Meta campaigns",
    problem: "Paid on lead volume, not bookings — so it optimises for cheap leads, then hands them over and walks away.",
  },
  {
    name: "Telecalling team",
    role: "Calls the leads",
    problem: "Works one 9-to-6 shift, misses after-hours enquiries, and churns at 30–50% a year.",
  },
  {
    name: "WhatsApp / broadcast tool",
    role: "Sends follow-up messages",
    problem: "Lives apart from the calls, so context is lost — and blasts templates instead of holding a conversation.",
  },
  {
    name: "CRM",
    role: "Stores the leads",
    problem: "A database that waits for someone to act. Most leads in it get no follow-up after 30 days.",
  },
  {
    name: "Analytics / spreadsheets",
    role: "Reports on what happened",
    problem: "Pulls from five sources that never quite agree, so no one trusts the numbers.",
  },
];

export const HIDDEN: { title: string; body: string }[] = [
  {
    title: "Fragmentation",
    body: "A lead lives in a portal inbox, a dialer, a WhatsApp tool, a CRM and a sheet. No one can see the whole journey, so leads slip through the cracks.",
  },
  {
    title: "No single owner",
    body: "When a lead is lost, marketing blames sales, sales blames the tool, the tool blames the data. Nobody owns the outcome.",
  },
  {
    title: "Leads die in the handoffs",
    body: "Every gap between two vendors — ad to CRM, CRM to caller, caller to WhatsApp — is a place a lead goes cold.",
  },
  {
    title: "Your time",
    body: "You become the systems integrator, stitching five vendors together and chasing each one. That cost never shows up on an invoice.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Is it cheaper to use one platform or separate tools?",
    a: "One platform is usually cheaper once you count the full picture — not just five subscriptions and a telecalling payroll, but the leads lost in the gaps between tools and the time spent managing vendors. The biggest saving is the bookings you stop losing in the handoffs.",
  },
  {
    q: "What's wrong with using separate vendors for marketing, calling and CRM?",
    a: "Nothing individually — the problem is the seams. Leads fall through the gaps between systems, no single vendor owns the outcome, and context is lost every time a lead moves from one tool to the next. The result is paid leads that quietly go cold.",
  },
  {
    q: "What is an AI sales engine?",
    a: "It's a single platform that runs the whole funnel — generating leads, calling and messaging them, qualifying, following up and booking site visits — instead of five separate tools bolted together. One system, one source of truth, one owner of the result.",
  },
];
