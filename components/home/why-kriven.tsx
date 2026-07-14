"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Layers,
  Brain,
  Languages,
  BadgeCheck,
  MessagesSquare,
  Zap,
  Repeat,
  Users,
} from "lucide-react";

const PILLARS = [
  {
    icon: Building2,
    title: "Built only for real estate",
    body: "Not generic SaaS retrofitted for builders. Every workflow, prompt, and metric is shaped around how real estate actually sells — site visits, project inventory, possession dates, builder objections.",
  },
  {
    icon: MessagesSquare,
    title: "No lead leaks — even the organic ones",
    body: "Most builders never work the buyers who comment ‘Price?’ on a reel or YouTube video — no one can DM 200 commenters. Kriven AI replies in seconds and qualifies them right there: in the Instagram DM, or on WhatsApp from YouTube. Your warmest, cheapest leads stop leaking.",
  },
  {
    icon: Zap,
    title: "Answers calls 24/7",
    body: "A buyer who waits an hour is already talking to another builder. Kriven AI picks up every call and message in under a minute, 24/7 — so you reach leads while intent is still hot, even at 2 AM.",
  },
  {
    icon: Repeat,
    title: "Follow-up that never gives up",
    body: "Most deals die from no follow-up, not no interest. Kriven AI keeps nudging every lead on WhatsApp — politely, on schedule — until they book a visit or clearly opt out. Nothing is forgotten after the second try.",
  },
  {
    icon: Users,
    title: "Every lead worked — not just the loudest",
    body: "Telecallers cherry-pick and burn out. Kriven AI works thousands of leads in parallel with the same energy on the first and the ten-thousandth — so the quiet lead gets the same shot as the obvious one.",
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
    title: "Made for India covering 20+ languages",
    body: "Telugu, Tamil, Kannada, Marathi, Malayalam, Hindi, English and many more. WhatsApp-first because that's where leads reply. Built for the speed of the Indian real estate market.",
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
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <BadgeCheck className="h-3.5 w-3.5" />
            Why Kriven AI
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-foreground">
              The market has many AI dialers.
            </span>
            <span className="block text-muted-foreground">
              Kriven AI isn&apos;t one of those.
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
