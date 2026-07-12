"use client";

import { motion } from "framer-motion";
import { Repeat, Target, Layers, Building2 } from "lucide-react";

const POINTS = [
  {
    icon: Repeat,
    title: "Generates and converts",
    body: "A lead-gen agency hands you raw leads and walks away. Kriven works every lead it generates — calling, messaging and following up — so they become site visits, not spreadsheet rows.",
  },
  {
    icon: Target,
    title: "Measured on site visits, not leads delivered",
    body: "Agencies bill for lead volume. Kriven is built around the number that matters: booked site visits, and your cost per booking — not a vanity lead count.",
  },
  {
    icon: Layers,
    title: "One platform, not five vendors",
    body: "It replaces your SEO consultant, ad agency, social team, telecallers and CRM — one system, one bill, one source of truth from first click to site visit.",
  },
  {
    icon: Building2,
    title: "Built for how property sells in India",
    body: "Every channel, language and objection is tuned to real estate — possession, pricing, home loans, competing projects — not a generic funnel bolted onto property.",
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
            Why it beats a lead-gen agency
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              Anyone can sell you leads.
            </span>{" "}
            <span className="text-muted-foreground">
              Almost no one turns them into site visits.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            The market is full of agencies that generate leads and vanish, and
            tools that dump them into a CRM. Kriven AI is the rare platform that
            owns the whole line — from the first ad-click to a buyer standing on
            your site.
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
