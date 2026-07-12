"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Languages, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

const ease = [0.2, 0.8, 0.2, 1] as const;

const DIFFERENTIATORS = [
  {
    icon: Building2,
    title: "Built only for real estate",
    body: "Not generic SaaS retrofitted for property. Every workflow, prompt and metric is shaped around how homes actually sell — site visits, possession dates, loan objections, competing projects.",
  },
  {
    icon: Languages,
    title: "India-native by design",
    body: "Hindi, Telugu, Tamil, Kannada, Marathi, English and the natural code-mix buyers really speak — plus the portals, ad channels and compliance rules of the Indian market.",
  },
  {
    icon: Layers,
    title: "One engine, not five tools",
    body: "Lead generation, voice calling, WhatsApp follow-up, lead management and analytics on one platform — so nothing leaks in the gaps between vendors.",
  },
  {
    icon: Target,
    title: "Measured on site visits",
    body: "Not clicks or lead counts. The one number we optimise is booked site visits at a lower cost each — the metric that actually moves a builder's revenue.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-40" />
        <Glow variant="above" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease }}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">
              We&apos;re building the AI sales engine for Indian real estate.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Kriven AI helps Indian builders miss fewer leads and book more site
            visits — by capturing, calling, messaging and following up with every
            lead, in any Indian language, around the clock.
          </motion.p>
        </div>
      </section>

      {/* Why we exist */}
      <section className="relative border-t border-border-subtle py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why we exist
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Builders in India spend heavily to generate leads — and then lose
            most of them. Not to bad marketing, but to a broken middle: enquiries
            arrive at midnight and get called on Monday, telecallers follow up
            once and give up, and paid leads quietly go cold across a stack of
            disconnected tools. The result is the same everywhere: a full pipeline
            and an empty site-visit calendar.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We started Kriven AI to close that gap. A builder shouldn&apos;t need
            a bigger telecalling team or another dashboard — they need something
            that actually works every lead, instantly and tirelessly, and turns
            more of them into people standing on site. That&apos;s the whole
            product.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="relative border-t border-border-subtle py-20 lg:py-24">
        <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What makes us different
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.55, ease }}
                className="rounded-2xl border border-border-subtle bg-card p-6 lg:p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                  <d.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team + contact */}
      <section className="relative border-t border-border-subtle py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The team behind Kriven AI
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We&apos;re a team of engineers and real-estate operators building AI
            that sells the way great salespeople do — fast, persistent, and in
            the buyer&apos;s own language. We work closely with builders on the
            ground, so the product is shaped by real sales floors, not
            assumptions.
          </p>
          <div className="mt-8 rounded-2xl border border-border-subtle bg-card p-6">
            <p className="text-sm font-semibold text-foreground">Get in touch</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Questions, partnerships or press —{" "}
              <a
                href="mailto:hello@kriven.ai"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                hello@kriven.ai
              </a>
              . Or see it live on a quick call.
            </p>
            <div className="mt-5">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
