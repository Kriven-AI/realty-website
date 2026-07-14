"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, Check, ArrowLeftRight, ArrowRight } from "lucide-react";

const ROWS: { without: string; with: string }[] = [
  {
    without: "Ad clicked — no callback for hours",
    with: "Google & Meta ad leads captured - called in 60 seconds",
  },
  {
    without: "Insta & YouTube comments ignored — warm leads leak",
    with: "Every Insta & YouTube comment captured and qualified",
  },
  {
    without: "Calls missed on nights & weekends",
    with: "Calls answered 24/7, in their language",
  },
  {
    without: "Telecaller campaigns — slow, costly to scale",
    with: "AI runs every outbound campaign at scale, 24/7",
  },
  {
    without: "WhatsApp goes silent, the lead dies",
    with: "Every lead followed up on WhatsApp too, besides calls",
  },
  {
    without: "Sales rep starts every call from scratch",
    with: "Warm handoff with the lead’s full history",
  },
  {
    without: "No idea why a lead said no",
    with: "Track lead interests, objections & competitors",
  },
  {
    without: "Less chance to improve sales team performance",
    with: "Track and improve sales team performance",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FragmentedReality() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-24 lg:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30 mask-radial-fade" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <ArrowLeftRight className="h-3.5 w-3.5" />
            The Kriven AI difference
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-foreground">
              Without us, sales are missed.
            </span>
            <span className="block text-brand">
              With Kriven AI, they’re won.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Same leads. Same projects. Same market. The only thing that
            changes is whether your enquiries turn into sales.
          </p>
        </div>

        {/* Before → After comparison */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* WITHOUT — the loss */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-2xl border border-border-subtle bg-muted/50 p-6"
          >
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-warning/15 text-warning">
                <X className="h-4 w-4" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-warning">
                Without Kriven AI
              </span>
            </div>

            <div className="mt-4">
              {ROWS.map((row, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.45,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="flex min-h-[56px] items-center gap-3 border-t border-border-subtle/70 first:border-t-0"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-warning/15 text-warning">
                    <X className="h-3 w-3" />
                  </span>
                  <span className="text-[13.5px] leading-snug text-muted-foreground">
                    {row.without}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 border-t border-border-subtle/70 pt-4">
              <p className="text-[13px] font-medium text-muted-foreground">
                Multiple vendors · many bills · scattered data
              </p>
            </div>
          </motion.div>

          {/* WITH — the worth */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.12, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative overflow-hidden rounded-2xl border border-brand/25 bg-card p-6 shadow-[0_16px_44px_-16px_rgba(217,88,62,0.3)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e87a5f,#d9583e)]"
            />
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Check className="h-4 w-4" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                With Kriven AI
              </span>
            </div>

            <div className="mt-4">
              {ROWS.map((row, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: 0.25 + i * 0.07,
                    duration: 0.45,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="flex min-h-[56px] items-center gap-3 border-t border-brand/10 first:border-t-0"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-[13.5px] font-medium leading-snug text-foreground">
                    {row.with}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 border-t border-brand/10 pt-4">
              <p className="text-[13px] font-semibold text-brand">
                1 platform · 1 bill · one source of truth
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing nudge */}
        <div className="mt-10 text-center">
          <Link
            href="/product"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            See how Kriven AI succeeds at every step
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
