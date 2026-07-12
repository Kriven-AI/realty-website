"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { POST, CRITERIA, TOOLS, FAQS } from "./data";

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-black/[0.02]"
      >
        <span className="text-base font-semibold tracking-tight text-foreground">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-brand-soft transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Article() {
  return (
    <article className="relative pt-6 pb-8 lg:pt-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
          {POST.category}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {POST.title}
        </h1>
        <p className="mt-4 text-sm text-subtle">
          {POST.dateDisplay} · {POST.readTime}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          There&apos;s no single &ldquo;best&rdquo; tool — the right choice
          depends on whether your problem is storing leads, automating campaigns,
          or actually converting the leads you already have. Here&apos;s an honest
          look at the main options for Indian builders in 2026, what each is best
          for, and where each falls short.
        </p>

        {/* Disclosure */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border-subtle bg-muted/40 p-5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Full disclosure:</span>{" "}
            Kriven AI is our own product. We&apos;ve described the others as fairly
            as we can from their public positioning — judge for yourself, and try
            before you buy.
          </p>
        </div>

        {/* Criteria */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What to look for
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CRITERIA.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border-subtle bg-card p-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {c.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The tools, compared
          </h2>
          <div className="mt-8 space-y-5">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className={cn(
                  "rounded-2xl border bg-card p-6 lg:p-7",
                  tool.ours ? "border-brand/30" : "border-border-subtle",
                )}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {tool.name}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                      tool.ours
                        ? "border border-brand/25 bg-brand-tint text-brand"
                        : "border border-border-subtle bg-muted/50 text-subtle",
                    )}
                  >
                    {tool.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-foreground/90">
                  <span className="font-semibold text-foreground">
                    Best for:
                  </span>{" "}
                  {tool.best}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {tool.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to choose */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            How to choose, in one line each
          </h2>
          <div className="mt-6 space-y-2.5 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">
                Leads leak after capture, slow follow-up →
              </span>{" "}
              an AI execution layer like Kriven AI.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Need full inventory, channel partners, post-sales →
              </span>{" "}
              Sell.Do.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                High-volume, multi-city paid campaigns →
              </span>{" "}
              LeadSquared.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Channel-partner-led sales →
              </span>{" "}
              PropFlo.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Tight budget, happy to configure it yourself →
              </span>{" "}
              Zoho CRM.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              If your problem is converting leads, not storing them
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Most builders don&apos;t need a better database — they need
              something that actually works the leads they already have. That&apos;s
              what Kriven AI does: it{" "}
              <Link
                href="/solutions/lead-generation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                generates leads
              </Link>
              , then{" "}
              <Link
                href="/solutions/lead-management"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                calls, qualifies and follows up
              </Link>{" "}
              with every one until the site visit is booked.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/product">Explore the platform</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} i={i} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
