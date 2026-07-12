// Content for the "WhatsApp follow-up templates for real estate" blog post.
// Shared between the article component (rendering) and the page (JSON-LD) so
// the two never drift apart.

export const POST = {
  title: "WhatsApp Follow-Up Templates for Real Estate (2026)",
  description:
    "12 copy-paste WhatsApp follow-up templates for real estate — for new leads, missed calls, site-visit reminders, no-shows and cold leads. Free to use.",
  slug: "whatsapp-follow-up-templates-for-real-estate",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "8 min read",
  dateDisplay: "July 2026",
};

export type Template = {
  id: string;
  title: string;
  when: string;
  message: string;
};

export const TEMPLATES: Template[] = [
  {
    id: "new-lead",
    title: "1. New enquiry — instant reply",
    when: "Send within 60 seconds of the lead coming in (portal, ad or website).",
    message:
      "Hi [Name], thanks for your interest in [Project] at [Location]! 😊 This is [Your Name] from [Builder]. Are you looking for a 2 or 3 BHK? I can share the floor plans, pricing and a short walkthrough video right here on WhatsApp.",
  },
  {
    id: "new-lead-hinglish",
    title: "2. New enquiry — Hinglish version",
    when: "Same as above, when the buyer is more comfortable in Hindi.",
    message:
      "Hi [Name] ji, [Project] mein interest ke liye dhanyavaad! 😊 Main [Your Name], [Builder] se. Aap 2 BHK dekh rahe hain ya 3 BHK? Main abhi price aur floor plan yahin WhatsApp pe bhej deta hoon.",
  },
  {
    id: "missed-call",
    title: "3. You called, they didn't pick up",
    when: "Right after an unanswered call — don't let the lead go quiet.",
    message:
      "Hi [Name], I just tried calling about your enquiry for [Project]. No worries if you're busy! Happy to share everything on WhatsApp instead. What's a good time to call — or shall I send the brochure and price list here?",
  },
  {
    id: "brochure",
    title: "4. Sharing the brochure & price",
    when: "When a lead asks for details — always end with the site visit.",
    message:
      "Here you go, [Name] 📄 — [Project] brochure + latest price list attached. Quick summary: [2/3 BHK] from ₹[XX] onwards, possession [date], [key highlight]. Would you like to visit the site this weekend? I can block a slot for you.",
  },
  {
    id: "nudge",
    title: "5. Gentle nudge (no response)",
    when: "Day 2–3 after your last message, if there's been no reply.",
    message:
      "Hi [Name], just following up on [Project]. We've had strong interest and a few units in your budget are still available. Would Saturday or Sunday suit you better for a site visit? It takes 30 minutes and you'll get a clear picture.",
  },
  {
    id: "confirm",
    title: "6. Site-visit confirmation",
    when: "The moment a visit is booked — remove any doubt.",
    message:
      "All set, [Name]! ✅ Your site visit for [Project] is booked for [Day, Date] at [Time]. 📍 Location: [Map link]. I'll be there to walk you through it. Just reply CHANGE if you need a different slot.",
  },
  {
    id: "reminder",
    title: "7. Reminder (day before the visit)",
    when: "~24 hours before — cuts no-shows sharply.",
    message:
      "Hi [Name], looking forward to seeing you tomorrow at [Time] for the [Project] site visit! 📍 [Map link]. Is there a specific unit or floor you'd like me to keep ready to show you?",
  },
  {
    id: "no-show",
    title: "8. No-show — reschedule",
    when: "Same day the visit was missed — warm, never accusatory.",
    message:
      "Hi [Name], we missed you at the [Project] site visit today — hope everything's okay! Would you like to reschedule for this weekend? The units you liked are still available, and I'd love to show you around.",
  },
  {
    id: "post-visit",
    title: "9. After the site visit",
    when: "A few hours after the visit, while it's fresh.",
    message:
      "Thanks for visiting [Project] today, [Name]! 🙏 Hope you liked [specific unit/view]. Any questions on pricing, home loan or possession? Happy to help — and if you're keen, I can check the best available unit for you before it's taken.",
  },
  {
    id: "cold",
    title: "10. Cold / old lead re-engagement",
    when: "Day 30+ — give an honest reason to re-open the conversation.",
    message:
      "Hi [Name], it's [Your Name] from [Builder]. A while back you'd enquired about [Project]. We've just [launched a new tower / revised prices / added ready-to-move units] — thought of you. Want me to send the latest? No pressure at all. 🙂",
  },
  {
    id: "loan",
    title: "11. Home-loan / EMI help",
    when: "When budget or affordability is the sticking point.",
    message:
      "Hi [Name], one thing that helps a lot of our buyers — we have tie-ups with [banks] and can arrange a quick home-loan eligibility check, no obligation. Want me to share the approx EMI for the [unit] at current rates?",
  },
  {
    id: "offer",
    title: "12. Limited offer / on the fence",
    when: "For warm leads who've gone quiet near decision time.",
    message:
      "Hi [Name], quick update on [Project] — there's a limited [festive offer / price] on [unit type] this month. Since you'd shown interest, I wanted you to get first look before it goes public. Shall I share the details?",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is the best WhatsApp follow-up message for a real estate lead?",
    a: "The best first message is fast, personal and points to one next step. Within 60 seconds of the enquiry, use the lead's name and the project, confirm what they're looking for (2 or 3 BHK, budget), and offer to send the brochure or book a site visit — for example: “Hi [Name], thanks for your interest in [Project]! Are you looking at 2 or 3 BHK? I can share pricing and floor plans right here.”",
  },
  {
    q: "How many times should you follow up with a real estate lead on WhatsApp?",
    a: "Plan for five to six well-spaced touches before moving a lead to slow nurture — industry research finds about 80% of sales need five or more follow-ups, yet 44% of salespeople give up after the first. Space them out (instant reply, day 2–3, pre-visit, post-visit, day 30+) and always give a reason to reply.",
  },
  {
    q: "How fast should you reply to a new property lead?",
    a: "Ideally within 60 seconds. Studies show contacting a lead within 5 minutes versus 30 makes you far more likely to connect and qualify, and most buyers go with the first business to respond. WhatsApp makes this easy because ~98% of messages get opened, usually within minutes.",
  },
  {
    q: "Is WhatsApp follow-up marketing legal in India?",
    a: "Yes, when done correctly. Message leads who enquired with you (opt-in), use the official WhatsApp Business API with registered message templates for automated sends, and always honour opt-outs. Avoid buying number lists or blasting unregistered templates.",
  },
];
