"use client";

import { motion } from "framer-motion";
import { MessagesSquare, ShieldCheck, Brain, CalendarCheck } from "lucide-react";

const POINTS = [
  {
    icon: MessagesSquare,
    title: "Two-way, not one-way",
    body: "It reads each buyer's reply and responds like a person — asking, answering, adjusting. Blast tools fire the same template at everyone and hope; that gets you blocked, not booked.",
  },
  {
    icon: ShieldCheck,
    title: "Built for compliance",
    body: "Runs on the official Meta / WhatsApp Business APIs with registered message templates and honoured opt-outs — which helps keep your outreach deliverable and aligned with the rules.",
  },
  {
    icon: Brain,
    title: "One brain across voice and chat",
    body: "The agent that called the buyer picks up the WhatsApp thread with full context. No silo, no hand-off gap, no making the buyer start over.",
  },
  {
    icon: CalendarCheck,
    title: "Aimed at the site visit",
    body: "Every message works toward a booked visit and a warm hand-off to your sales team — with the brochure and the location — never a promise your team can't keep.",
  },
];

export function BuiltForRealEstate() {
  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-32">
      <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            Why it&apos;s not a broadcast tool
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              A conversation, not a bulk blast.
            </span>{" "}
            <span className="text-muted-foreground">
              Built for how property actually sells.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Most &ldquo;WhatsApp marketing&rdquo; tools push the same template to
            10,000 numbers and hope. Kriven AI holds a real conversation with each
            buyer — and it&apos;s wired into your calls and your site-visit
            calendar, not sitting in a silo.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="rounded-2xl border border-border-subtle bg-card p-6 lg:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
