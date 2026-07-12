"use client";

import { motion } from "framer-motion";
import { MessagesSquare, WandSparkles, Building2, Target } from "lucide-react";

const POINTS = [
  {
    icon: MessagesSquare,
    title: "It reads real conversations",
    body: "Insight comes from what buyers actually said on calls and WhatsApp — not just the fields someone typed into a form. That's where the truth about your demand lives.",
  },
  {
    icon: WandSparkles,
    title: "Zero manual tagging",
    body: "The same agent that runs the call and the chat logs, summarises and scores every interaction itself. Nobody updates a dashboard — it's just there.",
  },
  {
    icon: Building2,
    title: "A real-estate lens, not generic charts",
    body: "Objections about possession and loans, unit-type demand, project-by-project intent, channel-to-site-visit — metrics shaped around how property sells, not a generic funnel.",
  },
  {
    icon: Target,
    title: "Every insight points to an action",
    body: "Adjust pricing where loan objections cluster, move budget to channels that book, retire pitches that stall, coach the reps who drop leads. Insight you can act on this week.",
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
            Why it&apos;s not a generic dashboard
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              Most dashboards report the past.
            </span>{" "}
            <span className="text-muted-foreground">
              This one tells you what to do next.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A normal analytics tool shows you charts of what already happened.
            Kriven understands the conversations behind the numbers — and turns
            them into decisions that grow your sales.
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
