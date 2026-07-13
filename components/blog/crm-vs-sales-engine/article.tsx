"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, GREAT, MISSING, COMPARE, FAQS } from "./data";
import { KeyTakeaways } from "@/components/blog/key-takeaways";

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
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
          {POST.category}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {POST.title}
        </h1>
        <p className="mt-4 text-sm text-subtle">
          {POST.dateDisplay} · {POST.readTime}
        </p>
        <KeyTakeaways items={POST.takeaways} />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          &ldquo;We already have a CRM.&rdquo; Every builder says it — and
          they&apos;re right to. But if leads are still going cold, it&apos;s
          worth being clear about what a CRM does and doesn&apos;t do. Because a
          CRM was never built to book a site visit.
        </p>

        {/* Great / missing */}
        <section className="mt-14 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-card p-6">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              What a CRM is great at
            </h2>
            <ul className="mt-4 space-y-2.5">
              {GREAT.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {g}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-card p-6">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              What it quietly doesn&apos;t do
            </h2>
            <ul className="mt-4 space-y-2.5">
              {MISSING.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Compare */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            System of record vs. system of action
          </h2>
          <div className="mt-6 space-y-3">
            {COMPARE.map((row) => (
              <div
                key={row.dimension}
                className="rounded-2xl border border-border-subtle bg-card p-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {row.dimension}
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-muted/50 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-subtle">
                      CRM
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                      {row.crm}
                    </p>
                  </div>
                  <div className="rounded-xl bg-brand-tint/60 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                      Sales engine
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                      {row.engine}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          Kriven AI is the system of action. Keep your CRM as the record —
          Kriven pulls from it (or captures leads directly), then calls,
          qualifies and follows up with every lead until the site visit is
          booked. You don&apos;t rip anything out; you make it convert.
        </KrivenFit>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Keep the record. Add the action.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You don&apos;t need to replace your CRM — you need something that
              works the leads sitting inside it. That&apos;s exactly what
              Kriven&apos;s{" "}
              <Link
                href="/solutions/lead-management"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                lead management
              </Link>{" "}
              does.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/solutions/lead-management">
                  See lead management
                </Link>
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
