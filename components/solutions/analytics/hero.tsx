"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

const PROOF = [
  { icon: Users, label: "Who's really calling" },
  { icon: Search, label: "What buyers actually want" },
  { icon: TrendingUp, label: "Where growth is hiding" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-50" />
      <Glow variant="above" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft"
        >
          Analytics &amp; Insights
        </motion.p>

        {/* LCP element — no opacity fade so it paints immediately */}
        <motion.h1
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-gradient">
            Real estate sales analytics that turn every call into a decision.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Kriven AI reads every call and WhatsApp conversation and turns it into
          clear insight — who&apos;s calling, what they actually want, what&apos;s
          stopping them, and which channels and pitches bring buyers who book. So
          you grow your business on data, not gut.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild variant="brand" size="lg">
            <Link href="/demo">
              Book a demo
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/product">Explore the platform</Link>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {PROOF.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-brand-soft" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
