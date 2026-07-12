"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, REASONS, PLAYBOOK, FAQS } from "./data";

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
          A site visit is the moment a lead becomes a real buyer — it&apos;s the
          single biggest jump in your funnel. So the fact that a large share of
          booked visits simply never happen is one of the most expensive quiet
          losses in real estate. The good news: no-shows are very fixable.
        </p>

        {/* Why */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why buyers don&apos;t turn up
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            It&apos;s rarely a lack of interest — they booked, after all.
            It&apos;s almost always one of these:
          </p>
          <div className="mt-6 rounded-2xl border border-border-subtle bg-card p-6">
            <ul className="space-y-3">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Playbook */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The no-show playbook
          </h2>
          <div className="mt-8 space-y-6">
            {PLAYBOOK.map((step) => (
              <div key={step.n} className="flex gap-5">
                <span className="font-mono text-sm font-semibold text-brand">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          Kriven runs this whole playbook on WhatsApp automatically — instant
          confirmation, timed reminders, one-tap rescheduling, and same-day
          recovery when someone misses — so more of the visits you booked
          actually happen, without your team chasing each one.
        </KrivenFit>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Turn booked visits into completed ones
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Confirmation, reminders and no-show recovery are exactly what
              Kriven&apos;s{" "}
              <Link
                href="/solutions/whatsapp-automation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                WhatsApp automation
              </Link>{" "}
              handles — quietly, on time, for every booking.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/solutions/whatsapp-automation">
                  See WhatsApp automation
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
