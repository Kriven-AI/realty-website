"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    figure: "Volume ≠ intent",
    body: "Most builders count leads instead of understanding them — which is why “we got 1,000 leads and they're all junk” is the most common complaint in real estate.",
    note: "Real-estate marketing sources",
  },
  {
    figure: "Cost per site visit",
    body: "The number that actually predicts revenue is decided after the lead comes in — and most builders never track it.",
    note: "Indian real-estate industry analysis",
  },
  {
    figure: "The 'why' is in the call",
    body: "Every reason a buyer said no — price, possession, loan, a competing project — sits in conversations most builders never analyse.",
    note: "Kriven AI",
  },
  {
    figure: "1–3% → 5–9%",
    body: "The gap between an average builder and a top one is decisions made on data — not luck or lead volume.",
    note: "Indian real-estate industry estimates",
  },
];

export function TheBlindSpot() {
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
            Flying blind
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              You know how many leads you got.
            </span>{" "}
            <span className="text-muted-foreground">
              Do you know who they were?
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A typical dashboard shows leads in, calls made, visits booked. That&apos;s
            the scoreboard, not the game. It never tells you who&apos;s actually
            calling, what they really want, why they didn&apos;t convert, or which
            channel and pitch brought the buyers who did. Without that, every
            decision — pricing, budget, hiring — is a guess.
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
              <p className="text-xl font-semibold tracking-tight text-brand">
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
      </div>
    </section>
  );
}
