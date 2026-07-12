"use client";

import { motion } from "framer-motion";
import {
  Zap,
  FileText,
  MessagesSquare,
  CalendarClock,
  Sprout,
  Repeat2,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Replies the second a lead lands",
    body: "Instant two-way WhatsApp on capture — under 60 seconds — while the buyer is still on your project page. Not a delayed broadcast.",
  },
  {
    icon: FileText,
    title: "Sends what buyers actually ask for",
    body: "Brochures, floor plans, price sheets and a location pin — delivered on request, mid-conversation, without a human lifting a finger.",
  },
  {
    icon: MessagesSquare,
    title: "One thread with the call",
    body: "Continues the same conversation your voice agent started — same lead, same context. The buyer never has to repeat themselves.",
  },
  {
    icon: CalendarClock,
    title: "Recovers no-shows",
    body: "When a booked site visit is missed, it re-engages on WhatsApp and reschedules — instead of the lead disappearing for good.",
  },
  {
    icon: Sprout,
    title: "Nurtures warm leads",
    body: "Timed, relevant nudges tuned to the project and price band the buyer cares about — helpful follow-up, not spam that gets you blocked.",
  },
  {
    icon: Repeat2,
    title: "Persistent until they book",
    body: "Keeps following up on a smart schedule until the site visit is booked — or the lead opts out. It never forgets, and it never gives up early.",
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
            What the WhatsApp agent does
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Every lead, followed up.</span>{" "}
            <span className="text-muted-foreground">
              Personally, patiently, until they book.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            The same agent that answers your calls picks up the WhatsApp thread —
            so follow-up doesn&apos;t depend on a busy salesperson remembering to
            chase a lead at 9pm.
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
