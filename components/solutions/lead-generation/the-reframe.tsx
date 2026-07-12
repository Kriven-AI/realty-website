"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    figure: "₹500–6,000",
    body: "what a single property lead costs in India — from Meta ads to luxury Google search.",
    note: "Indian digital-marketing agencies",
  },
  {
    figure: "0.4–2.5%",
    body: "how many of those online leads actually convert. You pay for 100 to close one or two.",
    note: "Real-estate conversion aggregators",
  },
  {
    figure: "80%",
    body: "of new leads never convert — usually not because they're junk, but because nobody works them.",
    note: "Real-estate industry data",
  },
  {
    figure: "1–3% → 5–9%",
    body: "builder lead-to-booking rate when leads are actually worked, versus left to sit.",
    note: "Indian real-estate industry estimates",
  },
];

export function TheReframe() {
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
            More leads isn&apos;t the answer
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              You don&apos;t have a lead problem.
            </span>{" "}
            <span className="text-muted-foreground">
              You have a conversion problem.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Most builders can buy all the leads they want. The money leaks
            afterwards — leads land from ads and portals, a telecaller calls once
            or twice, and the rest go cold. Buying more leads just pours more
            water into a leaking bucket.
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
          The number that decides your revenue isn&apos;t{" "}
          <span className="text-brand">cost per lead</span>. It&apos;s{" "}
          <span className="text-brand">cost per site visit</span> — and that&apos;s
          won or lost after the lead comes in.
        </motion.p>
      </div>
    </section>
  );
}
