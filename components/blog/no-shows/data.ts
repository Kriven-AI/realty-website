export const POST = {
  title: "40–60% of Booked Site Visits Never Happen. Here's How to Cut No-Shows",
  description:
    "A booked site visit isn't a completed one — many are lost to no-shows. Here's why buyers don't turn up, and a WhatsApp playbook to cut it.",
  slug: "reduce-real-estate-site-visit-no-shows",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "Site visits",
  takeaways: [
    "Many builders lose 40–50% or more of booked site visits to no-shows.",
    "Buyers miss visits mostly due to no confirmation, no reminder, or no easy way to reschedule.",
    "Reminders 24 hours and 2 hours before can cut no-shows by up to 40%.",
    "Confirm instantly, remind, make rescheduling one tap, and recover no-shows the same day.",
  ],
};

export const REASONS: string[] = [
  "No confirmation, so the booking felt tentative from the start",
  "No reminder, so a busy buyer simply forgot",
  "Momentum faded in the days between booking and the visit",
  "Plans changed and there was no easy way to reschedule",
  "They booked with two or three builders and went with whoever felt most on top of it",
];

export type Step = { n: string; title: string; body: string };

export const PLAYBOOK: Step[] = [
  {
    n: "01",
    title: "Confirm instantly",
    body: "The moment the visit is booked, send a clear WhatsApp confirmation — date, time, a map pin and who they'll meet. A confirmed visit feels real; an unconfirmed one feels optional.",
  },
  {
    n: "02",
    title: "Remind before it slips",
    body: "A reminder 24 hours before and again a couple of hours before is the single highest-impact fix — reminders alone can cut no-shows by up to 40%.",
  },
  {
    n: "03",
    title: "Make rescheduling one tap",
    body: "If plans change, let them move the slot in a single reply instead of ghosting you. A reschedule is a saved visit; a no-show with no path back is a lost one.",
  },
  {
    n: "04",
    title: "Recover the same day",
    body: "When someone misses, reach out warmly that day — understand why, and offer a new slot. A missed visit isn't a dead lead unless you treat it like one.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What percentage of real estate site visits are no-shows?",
    a: "It varies by market and lead source, but no-shows are a major problem — some builders and property managers report 40–50% or more of booked visits never happening. Since a site visit sharply raises the odds of a booking, every no-show is an expensive miss.",
  },
  {
    q: "How do you reduce site visit no-shows?",
    a: "Confirm the visit instantly, remind the buyer 24 hours and a couple of hours before, make rescheduling effortless, and follow up the same day if they miss. Reminders alone can cut no-shows by up to 40%; doing all four consistently does far more.",
  },
  {
    q: "What's the best way to recover a no-show?",
    a: "Reach out the same day on WhatsApp, warmly and without blame — ask if everything's okay, and offer to rebook. The units they were interested in are usually still available, and a quick, human message turns a lot of no-shows into rescheduled visits.",
  },
];
