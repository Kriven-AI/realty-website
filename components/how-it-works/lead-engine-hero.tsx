"use client";

import { motion } from "framer-motion";
import { Megaphone, Headset } from "lucide-react";
import { Glow } from "@/components/ui/glow";

export function LeadEngineHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-50" />
      <Glow variant="above" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-mono text-xs uppercase tracking-[0.18em] text-brand"
        >
          How it works · The Lead Engine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-gradient">Every lead becomes a </span>
          <span className="text-brand">site visit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          From the first tap on an ad to a booked site visit, Kriven AI runs the
          whole journey — bringing leads in, then handling every one across
          chatbot, WhatsApp and voice AI. One engine, every Indian language,
          24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[0_1px_2px_0_rgba(26,24,23,0.04)]">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Megaphone className="h-3.5 w-3.5" />
            </span>
            We bring leads in
          </span>
          <span className="hidden text-subtle sm:inline">+</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[0_1px_2px_0_rgba(26,24,23,0.04)]">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/15 text-success">
              <Headset className="h-3.5 w-3.5" />
            </span>
            We handle every lead
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-xs text-subtle"
        >
          Kriven AI replaces your marketing agency, telecaller floor,
          WhatsApp tool &amp; CRM.
        </motion.p>
      </div>
    </section>
  );
}
