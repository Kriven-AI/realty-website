"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Gauge,
  PhoneCall,
  ClipboardCheck,
  UserRoundCheck,
  BarChart3,
} from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "Every lead, every channel, one place",
    body: "99acres, MagicBricks, Meta and Google ads, your website, WhatsApp and calls — captured and de-duplicated into a single view. No more leads scattered across phones and spreadsheets.",
  },
  {
    icon: Gauge,
    title: "Live tracking and intent scoring",
    body: "Every lead carries its status, a live intent score, the full conversation history and the next best action — so you always know who's hot and what to do next.",
  },
  {
    icon: PhoneCall,
    title: "Works the lead, doesn't wait",
    body: "This is the difference. Kriven calls, WhatsApps, qualifies and follows up on every lead automatically — instead of waiting for a human to remember to.",
  },
  {
    icon: ClipboardCheck,
    title: "Zero manual data entry",
    body: "The agent logs every call and chat itself — outcomes, objections, summaries. Your team never updates a CRM field again.",
  },
  {
    icon: UserRoundCheck,
    title: "Routes hot leads to your team",
    body: "The moment a lead is ready, it's handed to your salesperson — warm, with the full context and the buyer's history — never a cold restart.",
  },
  {
    icon: BarChart3,
    title: "Shows you the truth",
    body: "What leads actually ask, the top objections by project, which channels convert, and how your sales team performs on transferred leads.",
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
            What Kriven does that a CRM won&apos;t
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Capture. Track. Work.</span>{" "}
            <span className="text-muted-foreground">
              All in one place, all on its own.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A CRM gives you the first two and leaves the hard one — actually
            working the lead — to a team that&apos;s already stretched. Kriven AI
            does all three.
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
