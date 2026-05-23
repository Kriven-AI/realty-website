"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-28 lg:py-36">
      <Glow variant="center" />
      <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-gradient">
            Run your next sale on Kriven <span className="text-brand">AI</span>.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Experience a real call in multiple languages. Set up your sales
          team, launch campaigns, track every lead — and watch your
          conversions climb.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
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
        <p className="mt-7 text-xs text-subtle">
          30-minute walkthrough · no slide deck · live agent on a real call
        </p>
      </div>
    </section>
  );
}
