"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    figure: "80%",
    body: "of sales need five or more follow-ups — but 44% of salespeople give up after the very first.",
    note: "Widely-cited sales follow-up research",
  },
  {
    figure: "~98%",
    body: "WhatsApp open rate, versus ~22% for email. Buyers read WhatsApp; they ignore everything else.",
    note: "Industry data (aggregated)",
  },
  {
    figure: "535M+",
    body: "WhatsApp users in India — the largest market on earth. It's where your buyers already live.",
    note: "DataReportal, Digital 2025",
  },
  {
    figure: "95%",
    body: "of leads that eventually buy are only reached by the sixth attempt. The deal is in the follow-up.",
    note: "Widely-cited sales follow-up research",
  },
];

export function TheGap() {
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
            Where deals quietly die
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              80% of sales need five follow-ups.
            </span>{" "}
            <span className="text-muted-foreground">
              Most builders stop at one.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Leads land from 99acres, Meta ads and your website — into different
            phones, WhatsApp inboxes and spreadsheets. A salesperson calls once,
            hits voicemail, and moves on. The buyer who wasn&apos;t ready in week
            one books with the builder who kept showing up. Quietly, that&apos;s
            most of your pipeline.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.figure}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="flex flex-col rounded-2xl border border-border-subtle bg-card p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-brand">
                {stat.figure}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {stat.body}
              </p>
              <p className="mt-auto pt-4 text-[11px] leading-snug text-subtle">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 max-w-3xl text-base font-medium text-foreground"
        >
          Your buyers didn&apos;t go cold. Your{" "}
          <span className="text-brand">follow-up</span> just stopped before
          theirs did.
        </motion.p>
      </div>
    </section>
  );
}
