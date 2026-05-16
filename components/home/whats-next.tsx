"use client";

import { motion } from "framer-motion";
import { Megaphone, Database, Workflow } from "lucide-react";

const ROADMAP = [
  {
    icon: Megaphone,
    eyebrow: "In development",
    title: "Marketing Orchestrator",
    body: "AI agents that generate ad creative from your project materials, post across Meta / Google / Reddit, capture leads, and hand off to the voice AI for instant pickup.",
  },
  {
    icon: Database,
    eyebrow: "Q3 2026",
    title: "CRM Integrations",
    body: "Two-way sync with the CRMs builders already use — leads in, status out, no spreadsheet exports.",
  },
  {
    icon: Workflow,
    eyebrow: "Coming",
    title: "Site-visit Conversion Module",
    body: "AI follow-up between booking and visit, plus post-visit nurture — so warm leads don't go cold between Saturday and Tuesday.",
  },
];

export function WhatsNext() {
  return (
    <section
      id="whats-next"
      className="relative border-t border-border-subtle py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
              What&apos;s next
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-foreground">Already extending.</span>{" "}
              <span className="text-muted-foreground">
                New modules every quarter.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Kriven is modular by design. You won&apos;t wait years for the next
            piece of your sales motion to land on the same platform.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {ROADMAP.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-border-subtle bg-card p-7"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warning/40 to-transparent" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10 text-warning ring-1 ring-inset ring-warning/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-warning/25 bg-warning/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warning">
                    {item.eyebrow}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
