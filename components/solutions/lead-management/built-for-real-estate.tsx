"use client";

import { motion } from "framer-motion";
import { PlayCircle, Home, Plug, Database } from "lucide-react";

const POINTS = [
  {
    icon: PlayCircle,
    title: "A CRM waits. Kriven acts.",
    body: "A CRM is a filing cabinet — it holds your leads until someone acts. Kriven is a salesperson that never clocks out: it calls, messages and follows up on its own, so nothing waits for a free human.",
  },
  {
    icon: Home,
    title: "Built around the site visit",
    body: "Not generic 'deals' and 'opportunities' retrofitted for property. Every status, score and nudge is shaped around how real estate actually converts — the booked site visit.",
  },
  {
    icon: Plug,
    title: "Works with your CRM — or replaces it",
    body: "Already on Sell.Do or LeadSquared? Kriven pulls those leads in and works them. Starting fresh? It captures directly. Either way, the leads get worked — not just stored.",
  },
  {
    icon: Database,
    title: "One source of truth",
    body: "Capture, call, message and track in one system — instead of an ad platform, a dialer, a WhatsApp tool, a CRM and a spreadsheet that never quite agree.",
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
            CRM vs. sales engine
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              You don&apos;t need a better place to store leads.
            </span>{" "}
            <span className="text-muted-foreground">
              You need something that works them.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Most builders already own a CRM. The leads still leak. Because the
            problem was never storage — it&apos;s that a database can&apos;t pick
            up the phone. Kriven AI is the layer that does.
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
