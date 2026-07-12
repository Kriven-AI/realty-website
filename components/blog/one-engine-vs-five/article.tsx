"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, VENDORS, HIDDEN, FAQS } from "./data";

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
    <article className="relative pt-32 pb-8 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
          Most builders don&apos;t run one sales system. They run five vendors
          stitched together — an agency, a telecalling team, a WhatsApp tool, a
          CRM and a pile of spreadsheets. Each looks reasonable on its own
          invoice. The real cost is what happens in the gaps between them.
        </p>

        {/* The stack */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The five-vendor stack
          </h2>
          <div className="mt-8 space-y-4">
            {VENDORS.map((v, i) => (
              <div
                key={v.name}
                className="rounded-2xl border border-border-subtle bg-card p-6"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-sm font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {v.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    — {v.role}
                  </span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {v.problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden costs */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The costs no invoice shows
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {HIDDEN.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border-subtle bg-card p-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {h.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          Kriven collapses the five into one: it generates the leads, calls and
          WhatsApps them, qualifies, books the site visit and reports on all of
          it — one platform, one bill, one source of truth, and one thing to hold
          accountable for the result.
        </KrivenFit>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              One engine, from ad-click to site visit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              When capture, calling, WhatsApp, tracking and analytics live in one
              system, there are no seams for leads to fall through — and one clear
              owner of the number that matters: booked site visits. That&apos;s
              what the{" "}
              <Link
                href="/product"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                Kriven AI platform
              </Link>{" "}
              is.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/how-it-works">See the full funnel</Link>
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
