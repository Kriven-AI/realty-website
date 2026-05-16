"use client";

import { motion } from "framer-motion";
import { Building2, Layers, Brain, Languages } from "lucide-react";

const PILLARS = [
  {
    icon: Building2,
    title: "Built only for real estate",
    body: "Not generic SaaS retrofitted for builders. Every workflow, prompt, and metric is shaped around how real estate actually sells — site visits, project inventory, possession dates, builder objections.",
  },
  {
    icon: Layers,
    title: "One platform. One source of truth.",
    body: "Inbound, outbound, WhatsApp, and analytics share the same lead, the same transcript, the same intent score. No copy-pasting between vendors.",
  },
  {
    icon: Brain,
    title: "Not a pitch bot — a sales mind",
    body: "Trained on real builder playbooks. Reads emotion, handles objections, escalates to humans when the lead asks. Skill-injectable so the agent learns your closing style.",
  },
  {
    icon: Languages,
    title: "Made for India",
    body: "Telugu, Hindi, English — and the codemix builders actually hear on calls. WhatsApp-first because that's where leads reply. Built for the speed of the Indian real estate market.",
  },
];

export function WhyKriven() {
  return (
    <section
      id="why"
      className="relative overflow-hidden border-t border-border-subtle py-24 lg:py-32"
    >
      <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            Why Kriven
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              The market has many AI dialers.
            </span>{" "}
            <span className="text-muted-foreground">
              This isn&apos;t one of them.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-card p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(232,122,95,0.15),rgba(217,88,62,0.08))] text-brand-soft ring-1 ring-inset ring-brand/15">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
