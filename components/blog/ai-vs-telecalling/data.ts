// Content for "AI Voice Agent vs. a Telecalling Team". An honest cost &
// performance comparison. Shared between article (rendering) and page (JSON-LD).

export const POST = {
  title: "AI Voice Agent vs. a Telecalling Team: A Real Estate Breakdown",
  description:
    "An honest cost and performance comparison of an AI voice agent versus a telecalling team for real estate — where each wins, and why the smart answer is both.",
  slug: "ai-voice-agent-vs-telecalling-team-real-estate",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "8 min read",
  dateDisplay: "July 2026",
  category: "Comparison",
};

export type Row = { dimension: string; human: string; ai: string };

export const COMPARE: Row[] = [
  {
    dimension: "First response",
    human: "Minutes to hours — depends on shift and workload",
    ai: "Under 60 seconds, every single time",
  },
  {
    dimension: "Availability",
    human: "Roughly 9–6, weekdays; sick days and holidays",
    ai: "24/7 — nights, weekends and festivals",
  },
  {
    dimension: "Languages",
    human: "One or two per caller",
    ai: "8+ Indian languages, switching mid-call",
  },
  {
    dimension: "Consistency",
    human: "Varies by person, mood and how well they know the script",
    ai: "The same quality on call 1 and call 1,000",
  },
  {
    dimension: "Follow-up",
    human: "Often stops after one or two attempts",
    ai: "Persistent until the visit is booked or the lead opts out",
  },
  {
    dimension: "Scale",
    human: "Hire, train and manage more people",
    ai: "Instant, elastic capacity — no hiring",
  },
  {
    dimension: "Attrition",
    human: "30–50% a year — constant re-hiring and retraining",
    ai: "None",
  },
  {
    dimension: "Cost",
    human: "₹12k–25k+ per caller/month, plus training, management and attrition",
    ai: "Predictable, usage-based — no idle salaries",
  },
];

export const HUMAN_WINS: string[] = [
  "Building genuine rapport and trust with a serious buyer",
  "Reading the room in a complex, high-value negotiation",
  "The final close — the human push that gets a deal over the line",
  "Unusual, emotional or bespoke situations a script can't cover",
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Is an AI voice agent cheaper than a telecalling team?",
    a: "Usually, yes — especially at volume. A telecaller costs ₹12,000–25,000+ a month plus training, management and 30–50% annual attrition, and only works one shift. An AI voice agent has a predictable, usage-based cost, works 24/7, and doesn't need re-hiring. The bigger saving is the leads a human team misses after hours and on follow-up.",
  },
  {
    q: "Can AI replace telecallers in real estate?",
    a: "It replaces the repetitive part — first response, qualification and relentless follow-up, around the clock — which is also the part that burns telecallers out. It doesn't replace your closers. The strongest setup is AI for volume and speed, humans for closing warm, qualified buyers.",
  },
  {
    q: "What can an AI voice agent do that telecallers can't?",
    a: "Respond in under 60 seconds to every lead, at any hour, in any Indian language, with identical quality on every call, and follow up without ever tiring or forgetting. No human team can do all of that consistently at scale.",
  },
  {
    q: "Do I still need human salespeople if I use AI calling?",
    a: "Yes. AI handles the top of the funnel — reaching, qualifying and following up with every lead — then warm-transfers the ready buyers to your salespeople with full context. Your people spend their time closing, not dialing dead numbers.",
  },
];
