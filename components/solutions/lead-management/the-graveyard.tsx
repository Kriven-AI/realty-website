"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    figure: "90%",
    body: "of leads sitting in a real-estate CRM get zero follow-up after 30 days. The database becomes a graveyard.",
    note: "Real-estate industry data",
  },
  {
    figure: "74%",
    body: "of buyers who eventually transact do so 6+ months after enquiring — long after most teams stopped following up.",
    note: "Real-estate industry data",
  },
  {
    figure: "48%",
    body: "of agents never follow up after the first attempt. Only 10% make more than three.",
    note: "Real-estate industry data",
  },
  {
    figure: "1–3% → 5–9%",
    body: "typical builder lead-to-booking rate, versus teams that track and work every lead relentlessly.",
    note: "Indian real-estate industry estimates",
  },
];

export function TheGraveyard() {
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
            Where leads go to die
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              Your CRM isn&apos;t losing leads.
            </span>{" "}
            <span className="text-muted-foreground">
              It&apos;s just where they go to die.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A CRM does exactly what it&apos;s built to do: store your leads and
            wait. It waits for a salesperson to open it, remember who to call,
            and follow up — again and again, for months. They don&apos;t. So the
            leads you paid good money for sit there, going cold, row after row.
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
          Storing a lead isn&apos;t managing it. Managing it means{" "}
          <span className="text-brand">working it</span> — every day, until the
          buyer books or says stop.
        </motion.p>
      </div>
    </section>
  );
}
