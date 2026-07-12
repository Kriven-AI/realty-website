// Content for "Your Reel Got 200 Comments Asking 'Price?'". Shared between the
// article (rendering) and the page (JSON-LD).

export const POST = {
  title: "Your Reel Got 200 Comments Asking “Price?” — How Many Became Leads?",
  description:
    "Builders capture paid-ad leads but let organic Instagram and YouTube comments die. Those “price?” comments are warm leads — here's how to actually catch them.",
  slug: "turn-instagram-reel-comments-into-real-estate-leads",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "Organic social",
};

export type Stat = { figure: string; body: string; note: string };

export const STATS: Stat[] = [
  {
    figure: "100–400",
    body: "warm leads a single viral reel can produce overnight — when ~20% of its 500–2,000 comments ask price, location or availability.",
    note: "Instagram-marketing industry data",
  },
  {
    figure: "391%",
    body: "higher conversion when you reply to a DM within one minute versus after 30. Speed matters as much in DMs as on the phone.",
    note: "Instagram-marketing industry data",
  },
  {
    figure: "490M+",
    body: "Instagram users in India in 2026. Your buyers are scrolling your reels — and commenting on them.",
    note: "Instagram statistics aggregators",
  },
  {
    figure: "<5% → ~18%",
    body: "DM-to-sale conversion: generic broadcast versus targeted, well-timed replies. How you reply decides everything.",
    note: "Instagram-marketing industry data",
  },
];

export type Step = { n: string; title: string; body: string };

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Reply to the comment — publicly",
    body: "A warm, quick public reply does two jobs: it acknowledges that buyer, and it shows everyone else scrolling that you actually respond. But don't stop here — a comment reply is not a lead.",
  },
  {
    n: "02",
    title: "Slide into the DM within minutes",
    body: "This is where the real conversation happens. Move price, floor plans and availability into a private DM while the buyer is still in the app — the sooner, the better.",
  },
  {
    n: "03",
    title: "Move the thread to WhatsApp",
    body: "WhatsApp is where Indian buyers actually convert. Continue the conversation there, send the brochure and location, and keep the thread alive across days.",
  },
  {
    n: "04",
    title: "Qualify and book the site visit",
    body: "Budget, location, timeline — a quick qualifying chat, then book the visit. A public 'Price?' has become a buyer standing on your site.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How do you turn Instagram comments into real estate leads?",
    a: "Reply to the comment publicly, then DM the commenter within minutes, move the conversation to WhatsApp, qualify them and book a site visit. The key is speed and consistency — a 'price?' comment is a warm lead only if you actually reach the person before they scroll on.",
  },
  {
    q: "Should you reply to “price” comments publicly or in a DM?",
    a: "Both. A short public reply signals responsiveness to everyone watching, but the real conversation — pricing, floor plans, booking — belongs in a DM and then WhatsApp, where you can qualify the buyer privately.",
  },
  {
    q: "What is Instagram comment-to-DM automation?",
    a: "It's a system that automatically sends a direct message to people who comment on your posts or reels — so every 'price?' or 'location?' comment triggers an instant private reply, instead of being missed. Done well, it moves buyers from a public comment into a real conversation at scale.",
  },
  {
    q: "How do real estate builders generate leads from reels?",
    a: "By posting reels that trigger comments (project walkthroughs, price reveals, location highlights), then capturing every commenter — replying, DMing and moving them to WhatsApp fast. The reel creates demand; the follow-up turns it into site visits.",
  },
];
