// Content for the "Why your real estate leads aren't converting into site
// visits" blog post. Shared between the article (rendering) and the page
// (JSON-LD) so they never drift.

export const POST = {
  title: "Why Your Real Estate Leads Aren't Converting Into Site Visits",
  description:
    "Marketing says 1,000 leads, sales says junk. Usually it's neither — it's a speed and follow-up gap. Here's why leads don't become site visits.",
  slug: "why-real-estate-leads-dont-convert-into-site-visits",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "9 min read",
  dateDisplay: "July 2026",
  category: "Lead conversion",
};

export type Reason = {
  n: string;
  title: string;
  body: string;
  stat: string;
};

export const REASONS: Reason[] = [
  {
    n: "01",
    title: "You called too late",
    body: "A property lead is hottest in the first few minutes. Most builders respond in hours — by which time the buyer has already spoken to someone else. Speed isn't a nicety; it's the single biggest lever you have.",
    stat: "Contacting a lead within 5 minutes vs 30 makes you ~100× more likely to connect and 21× more likely to qualify (MIT/InsideSales). And ~78% of buyers go with the first business to respond.",
  },
  {
    n: "02",
    title: "You followed up once — maybe twice",
    body: "The buyer who wasn't ready on day one books with whoever kept showing up. Most teams stop after a call or two, long before the buyer was ready to act.",
    stat: "About 80% of sales need 5+ follow-ups, yet 44% of salespeople give up after the first — and roughly 90% of leads in a real-estate CRM get no follow-up at all after 30 days.",
  },
  {
    n: "03",
    title: "The lead came in at 10pm and no one was home",
    body: "Your best enquiries arrive when your team has clocked out. Without after-hours coverage, the majority of leads sit untouched until morning — when the moment has passed.",
    stat: "Around 62% of property enquiries land outside 9-to-6, peaking on weekday evenings and weekends.",
  },
  {
    n: "04",
    title: "Your leads are scattered across five places",
    body: "99acres in one inbox, Meta in another, website forms in email, WhatsApp on someone's phone, calls in a notebook. Leads slip through the cracks simply because no one can see them all in one place.",
    stat: "Fragmented capture is one of the most-cited reasons Indian builders lose leads — there's no single system working every enquiry.",
  },
  {
    n: "05",
    title: "Nobody separated the buyers from the browsers",
    body: "\"Junk\" is usually unqualified, not unreal. Without qualification, your salespeople waste time on tyre-kickers and miss the serious buyer sitting in the same list. Sales blames marketing; marketing blames sales; the ready buyer goes cold.",
    stat: "Measuring lead volume instead of intent is why “we get 1,000 leads and they're all junk” is the most common complaint in real estate.",
  },
  {
    n: "06",
    title: "You optimised for leads, not site visits",
    body: "Cost per lead is a vanity number. Two builders with the same CPL can have wildly different businesses — one converting 1.5% of leads to visits, the other 8%. The difference isn't the leads. It's what happens after they arrive.",
    stat: "The metric that predicts revenue is cost per site visit and cost per booking — won or lost after the lead comes in.",
  },
];

export const SIGNS: string[] = [
  "Your average first response is measured in hours, not minutes",
  "Most leads get one or two follow-ups, then silence",
  "Nights and weekends have no real coverage",
  "Leads live across a portal inbox, WhatsApp and a spreadsheet",
  "Sales calls leads \"junk\" but can't say which ones were actually followed up five times",
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Why aren't my real estate leads converting into site visits?",
    a: "In most cases it isn't lead quality — it's a speed and follow-up gap. Leads are contacted too late (hours instead of minutes), followed up once or twice instead of five-plus times, and lost after hours or across scattered inboxes. Fix the process and the same leads convert far better.",
  },
  {
    q: "Are my real estate leads junk, or is it a follow-up problem?",
    a: "Usually follow-up. \"Junk\" typically means unqualified, not unreal — and about 80% of leads never convert mostly because no one works them properly. Before blaming lead quality, check how fast you respond and how many times you actually follow up.",
  },
  {
    q: "How do I convert more leads into site visits?",
    a: "Respond within minutes (ideally under 60 seconds), follow up five or more times across call and WhatsApp, cover nights and weekends, keep every lead in one system, and qualify before handing to sales. Speed and persistence move the numbers more than any new lead source.",
  },
  {
    q: "What is a good lead-to-site-visit conversion rate for builders?",
    a: "Indian builders typically convert 1–3% of leads to bookings, while teams with fast response and structured follow-up reach 5–9%. If you're at the low end, the gap is almost always process, not lead quality.",
  },
];
