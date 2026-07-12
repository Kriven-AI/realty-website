"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    figure: "100× / 21×",
    body: "more likely to reach and to qualify a lead when you call within 5 minutes instead of 30.",
    note: "MIT / InsideSales Lead Response Management Study",
  },
  {
    figure: "78%",
    body: "of buyers go with the first business to respond — not the cheapest, not the best-reviewed. The first.",
    note: "Widely-cited industry research",
  },
  {
    figure: "62%",
    body: "of property enquiries land outside 9-to-6 — evenings and weekends, when your team has gone home.",
    note: "Industry data, cited to NAR & Zillow research",
  },
  {
    figure: "1–3% → 5–9%",
    body: "typical builder lead-to-booking rate, versus teams that respond in minutes with structured follow-up.",
    note: "Indian real-estate industry estimates",
  },
];

export function TheCost() {
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
            The cost of a slow callback
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              Your hottest lead goes cold in five minutes.
            </span>{" "}
            <span className="text-muted-foreground">
              Your telecaller sees it Monday morning.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A buyer fills your form on 99acres at 10:47pm. Your telecaller clocks
            in at 10am — sixteen hours later. By then she has spoken to two other
            builders and booked a site visit with whoever called first. You paid
            for that lead. Someone else closed it.
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
          The leads aren&apos;t the problem. The gap between{" "}
          <span className="text-brand">&ldquo;enquiry&rdquo;</span> and{" "}
          <span className="text-brand">&ldquo;first call&rdquo;</span> is — and
          no human team can close a gap that opens at midnight.
        </motion.p>
      </div>
    </section>
  );
}
