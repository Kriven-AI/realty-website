"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Sparkles,
  Megaphone,
  Video,
  MessageSquare,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

const CHANNELS = [
  {
    icon: Search,
    title: "Rank on Google",
    body: "SEO and content that put you in front of buyers searching for projects like yours.",
  },
  {
    icon: MapPin,
    title: "Own Google Maps",
    body: "Show up for “projects near me” and location searches, where high-intent buyers look.",
  },
  {
    icon: Sparkles,
    title: "Get cited in AI answers",
    body: "Appear when buyers ask ChatGPT, Gemini and Google AI Overviews for the best builders.",
  },
  {
    icon: Megaphone,
    title: "Meta & Google ads",
    body: "Campaigns designed, launched and managed for you — optimised for site visits, not clicks.",
  },
  {
    icon: Video,
    title: "Organic Instagram & YouTube",
    body: "Scroll-stopping reels built from your own site footage — plus comments captured as leads.",
  },
  {
    icon: MessageSquare,
    title: "Website chatbot",
    body: "A widget that qualifies visitors on the spot and pushes them straight into the engine.",
  },
];

const CONVERT = [
  "Every lead it generates is called and messaged in under 60 seconds",
  "Qualified in a real conversation, in any Indian language",
  "Followed up on WhatsApp until the site visit is booked",
  "Nothing sits in a spreadsheet going cold",
];

export function Capabilities() {
  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            How the platform works
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Generate the leads.</span>{" "}
            <span className="text-muted-foreground">
              Then actually work them.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Kriven AI runs both halves of the funnel on one platform — the top,
            where buyers discover you, and the part everyone else drops, where
            leads turn into booked site visits.
          </p>
        </motion.div>

        {/* Part 1 — attract */}
        <div className="mt-12">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-brand">1 ·</span> Bring buyers in
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: (i % 3) * 0.08,
                  duration: 0.55,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="rounded-2xl border border-border-subtle bg-card p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2 — convert */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-8"
        >
          <p className="text-sm font-semibold text-foreground">
            <span className="text-brand">2 ·</span> Turn them into site visits
          </p>
          <div className="mt-5 rounded-2xl border border-brand/20 bg-brand-tint/40 p-7 lg:p-8">
            <p className="text-base font-medium text-foreground">
              This is the half most lead-gen companies skip — and it&apos;s where
              the money is.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {CONVERT.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <PhoneCall className="h-4 w-4 text-brand-soft" />
              The same engine that generated the lead is the one that closes it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
