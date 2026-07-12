export const POST = {
  title:
    "The Codemix Problem: Why Generic Voice Bots Fail on Indian Real Estate Calls",
  description:
    "Indian buyers switch Hindi, Telugu and English mid-sentence. Generic voice bots break on it — why codemix is real estate's hidden AI-calling moat.",
  slug: "codemix-problem-voice-bots-indian-real-estate",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  readTime: "6 min read",
  dateDisplay: "July 2026",
  category: "India-native AI",
};

export const EXAMPLES: string[] = [
  "“Bhai, 2 BHK ka price kya hai, and possession kab tak milega?”",
  "“Location is good, but loan ke liye eligibility check ho jayega?”",
  "“Naaku Telugu lo cheppandi — but send the brochure in English.”",
];

export const FAILURES: { title: string; body: string }[] = [
  {
    title: "Trained on clean, single-language speech",
    body: "Most voice models learn from tidy English or tidy Hindi. A sentence that flips between three languages mid-breath is exactly what they were never trained on — so they mishear or freeze.",
  },
  {
    title: "They force the caller to pick a language",
    body: "“For Hindi, press 1.” Real buyers don't think in one language, and being made to choose feels robotic. Many just hang up.",
  },
  {
    title: "They lose the thread on a switch",
    body: "When the buyer switches language, a generic bot often drops context and re-asks what was already answered — the fastest way to sound fake.",
  },
  {
    title: "They miss regional terms and pronunciations",
    body: "Local words for carpet area, possession, EMI, or a neighbourhood's name trip up models built for other markets — and a buyer notices instantly.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is code-mixing (codemix) in Indian conversations?",
    a: "Code-mixing is switching between languages within a single conversation or even a single sentence — like blending Hindi, Telugu and English. It's how most Indian buyers naturally speak, especially about money, property and paperwork.",
  },
  {
    q: "Can voice AI handle Hindi-English or Telugu-English mixed calls?",
    a: "Only if it's built for it. A voice agent trained specifically on Indian code-mixed speech can follow a buyer who switches languages mid-sentence and respond naturally. Generic bots trained on single-language data usually can't — they mishear or force a language choice.",
  },
  {
    q: "Why do generic voice bots fail on Indian real estate calls?",
    a: "Because Indian property conversations are code-mixed, fast and full of local terms — and generic bots are trained on clean, single-language speech. They lose context on language switches, mispronounce local words, and sound robotic, so buyers hang up. An India-native agent is built for exactly this.",
  },
];
