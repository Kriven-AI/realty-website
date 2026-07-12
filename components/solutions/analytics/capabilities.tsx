"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  MessageSquare,
  ShieldQuestion,
  Swords,
  Radar,
  Megaphone,
  Gauge,
} from "lucide-react";

const FEATURES = [
  {
    icon: UserRound,
    title: "Who's actually calling",
    body: "Buyer profiles from real conversations — profession, budget band, location, and how serious they are — so you know the shape of your demand, not just its size.",
  },
  {
    icon: MessageSquare,
    title: "What buyers really want",
    body: "The questions they ask, ranked — 2 vs 3 BHK, possession timelines, amenities, loan help — surfaced project by project so you build and pitch to real demand.",
  },
  {
    icon: ShieldQuestion,
    title: "Why they don't convert",
    body: "The top objections behind every 'no' — price, possession, home loan, a competing project — ranked so you can fix the ones that actually cost you visits.",
  },
  {
    icon: Swords,
    title: "Which competitors keep coming up",
    body: "Buyers tell you who else they're considering. See which competing projects and builders come up most — and where you keep losing — so you can sharpen your pitch against them.",
  },
  {
    icon: Radar,
    title: "Which channels bring buyers",
    body: "Not which channel is cheapest — which one delivers people who actually book. Move budget to what fills your site visits.",
  },
  {
    icon: Megaphone,
    title: "Which pitches move people",
    body: "The lines, offers and projects that turn a conversation into a booked visit — and the ones quietly killing momentum.",
  },
  {
    icon: Gauge,
    title: "How your team performs",
    body: "What happens to a lead after it's transferred to a salesperson — who follows up, who drops it — so coaching is based on facts, not vibes.",
  },
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
            What you finally get to see
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Every conversation,</span>{" "}
            <span className="text-muted-foreground">turned into a decision.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Because Kriven runs the calls and the WhatsApp itself, every
            interaction becomes data automatically — no forms to fill, no tagging,
            no &ldquo;how did the calls go?&rdquo; on Monday.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (i % 3) * 0.08,
                duration: 0.55,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="rounded-2xl border border-border-subtle bg-card p-6 lg:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
