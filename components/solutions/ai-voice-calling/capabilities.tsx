"use client";

import { motion } from "framer-motion";
import { PhoneIncoming, PhoneOutgoing, CheckCircle2 } from "lucide-react";

const ENGINES = [
  {
    icon: PhoneIncoming,
    label: "Inbound",
    title: "Answers every inbound call, live.",
    blurb:
      "The moment a buyer calls — or the second a form comes in — the agent is on the line, calling back in under 60 seconds. No hold music, no voicemail, no waiting for Monday.",
    points: [
      "Picks up 24/7 — weekends, midnight, peak-hour rushes",
      "A real conversation, not a press-1 IVR menu",
      "Qualifies budget, location, timeline and intent",
      "Books the site visit straight into your calendar",
      "Warm-transfers to your salesperson the moment the buyer asks",
    ],
  },
  {
    icon: PhoneOutgoing,
    label: "Outbound",
    title: "Works your lead list like a tireless telecaller.",
    blurb:
      "Upload a CSV or connect your CRM. The agent runs the calling campaign — dialing, pitching, handling questions and booking visits — without a single day off.",
    points: [
      "Runs outbound calling campaigns on any lead list",
      "Calls each lead at the time they're actually free",
      "Smart retries on misses, then falls back to WhatsApp",
      "Revives cold and old leads nobody has touched in months",
      "Same qualification and site-visit booking as inbound",
    ],
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
            What the voice agent does
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Two engines. One agent.</span>{" "}
            <span className="text-muted-foreground">
              It picks up, and it reaches out.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Most tools do one or the other. Kriven AI runs both inbound and
            outbound on the same brain — so a lead who missed your call at night
            gets a call back in the morning, in the same voice, with the same
            context.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {ENGINES.map((engine, i) => (
            <motion.div
              key={engine.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="flex flex-col rounded-2xl border border-border-subtle bg-card p-7 lg:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                  <engine.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
                  {engine.label}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                {engine.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {engine.blurb}
              </p>

              <ul className="mt-6 space-y-3">
                {engine.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                    <span className="text-sm leading-relaxed text-foreground/90">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
