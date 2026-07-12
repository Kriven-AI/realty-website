export const POST = {
  title: "How Much Indian Builders Lose to Missed Calls, Nights & Weekends",
  description:
    "Missed calls, after-hours enquiries and weak follow-up quietly cost builders lakhs a year. Here's the real math on leads you pay for but never reach.",
  slug: "how-much-builders-lose-to-missed-calls",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "Cost of inaction",
};

export type Leak = { title: string; body: string; stat: string };

export const LEAKS: Leak[] = [
  {
    title: "Missed calls",
    body: "Every call that rings out is a buyer who found another builder. Most callers who hit voicemail simply don't try again.",
    stat: "Only ~38% of inbound business calls are answered live — and 85% of callers who reach voicemail never call back.",
  },
  {
    title: "Nights & weekends",
    body: "Your best enquiries arrive when your team has gone home. Without cover, they sit untouched until morning — by which point they're cold.",
    stat: "Around 62% of property enquiries land outside 9-to-6, peaking on weekday evenings and weekends.",
  },
  {
    title: "Follow-up that stops early",
    body: "The buyer who wasn't ready on call one books with whoever kept showing up. Most teams quit long before that.",
    stat: "About 80% of sales need 5+ follow-ups, yet 44% of salespeople give up after the first.",
  },
];

export const MATH: string[] = [
  "Say you generate 300 leads a month at ₹1,000 each — that's ₹3,00,000 in lead spend.",
  "Around 62% arrive after hours. If even half of those go cold before someone calls back, that's ~90 leads quietly lost.",
  "At a 3% lead-to-booking rate, those 90 leads were worth roughly 3 site visits — and in real estate, a single lost booking can dwarf a month's entire ad budget.",
  "Add missed calls and dropped follow-ups on top, and the leak runs into lakhs a year — money you already spent, on leads you simply never worked.",
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How much do builders lose to missed calls and slow response?",
    a: "It varies, but the loss is almost always larger than the ad budget. With ~62% of enquiries arriving after hours and most missed calls never returned, a builder spending a few lakhs a month on leads typically loses a meaningful share of bookings simply to being unreachable — money already spent on leads that were never worked.",
  },
  {
    q: "Why do so many real estate leads go to waste?",
    a: "Not lead quality — reachability and follow-up. Leads arrive after hours, calls go unanswered, and follow-up stops after one or two attempts. The leads are real; the process to work them isn't there when it matters.",
  },
  {
    q: "How do you stop losing leads after hours?",
    a: "Cover every hour. The only reliable way to answer and follow up with every lead at night and on weekends is automation — an AI voice agent that calls back instantly and a WhatsApp agent that keeps the conversation going, 24/7.",
  },
];
