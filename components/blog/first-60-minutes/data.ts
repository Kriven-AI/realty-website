// Content for "The First 60 Minutes of a Real Estate Lead". A data-dense,
// citable speed-to-lead piece. Shared between article (rendering) and page
// (JSON-LD).

export const POST = {
  title: "The First 60 Minutes of a Real Estate Lead",
  description:
    "How fast should you respond to a real estate lead? The data is brutal — speed decides who wins. Here's what happens minute by minute, and why under 60 seconds wins.",
  slug: "the-first-60-minutes-of-a-real-estate-lead",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "7 min read",
  dateDisplay: "July 2026",
  category: "Speed to lead",
};

export type Stage = {
  window: string;
  title: string;
  body: string;
  source: string;
};

export const TIMELINE: Stage[] = [
  {
    window: "0–60 seconds",
    title: "The golden window",
    body: "Respond here and you're almost certainly the first to reach the buyer, while their interest is at its peak. Conversion is dramatically higher than even a few minutes later.",
    source:
      "Leads contacted within ~60 seconds have converted at roughly 23%, versus about 5% after 30 minutes.",
  },
  {
    window: "5 minutes",
    title: "The cliff",
    body: "Five minutes is the edge of the cliff. Push past it and your odds of even connecting — let alone qualifying — fall off sharply. This is the single most cited number in lead research.",
    source:
      "Contacting a lead within 5 minutes vs 30 makes you ~100× more likely to connect and 21× more likely to qualify (MIT/InsideSales).",
  },
  {
    window: "30–60 minutes",
    title: "Fading fast",
    body: "Every minute of delay in the first hour quietly lowers your qualification odds. Responding within the hour still beats most competitors — but the real edge is already gone.",
    source:
      "Responding within an hour makes you ~7× more likely to qualify a lead than waiting longer (Harvard Business Review).",
  },
  {
    window: "A few hours",
    title: "Now you're second or third",
    body: "By hour two, another builder has likely already called back. And buyers rarely wait to compare — they engage whoever reached them first.",
    source:
      "About 78% of buyers go with the first business to respond — not the cheapest or best-reviewed.",
  },
  {
    window: "24+ hours",
    title: "Effectively cold",
    body: "A day later the lead has moved on, yet this is where most builders actually land. The gap between how fast leads go cold and how slowly teams respond is the whole opportunity.",
    source:
      "The average first response is 42 hours and 23% of companies never respond at all (HBR); in real estate the average is around 15 hours.",
  },
];

export const REFERENCE: [string, string][] = [
  ["Under 60 seconds", "Best case — you're first; highest connect and conversion"],
  [
    "Within 5 minutes",
    "~100× more likely to connect, 21× to qualify vs 30 min (MIT/InsideSales)",
  ],
  [
    "Within 1 hour",
    "Still beats most; ~7× more likely to qualify than waiting longer (HBR)",
  ],
  [
    "A few hours",
    "A competitor has likely already responded — 78% go with the first",
  ],
  ["24+ hours", "Effectively cold — yet the average response is ~15–42 hours"],
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How fast should you respond to a real estate lead?",
    a: "Within 5 minutes, and ideally under 60 seconds. Research shows contacting a lead within 5 minutes versus 30 makes you about 100× more likely to connect and 21× more likely to qualify, and most buyers go with the first business to respond.",
  },
  {
    q: "Does responding faster to leads really increase conversions?",
    a: "Yes, significantly. Beyond the 100×/21× connect-and-qualify effect, leads contacted within a minute convert several times better than those contacted after 30 minutes, and in Indian real estate, responding within 5 minutes can roughly quadruple site-visit conversion.",
  },
  {
    q: "What is speed to lead?",
    a: "Speed to lead is how quickly you respond to a new enquiry after it comes in. It's one of the strongest predictors of whether a lead converts — faster responses connect, qualify and close at far higher rates than slow ones.",
  },
  {
    q: "How can I respond to every lead in under a minute?",
    a: "Humans can't do it consistently — leads arrive at midnight, on weekends, and in bursts. The practical answer is automation: an AI voice agent that calls the moment a lead lands and a WhatsApp agent that follows up, so every lead gets a sub-minute response, 24/7.",
  },
];
