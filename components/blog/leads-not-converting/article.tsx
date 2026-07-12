"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, REASONS, SIGNS, FAQS } from "./data";

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
          Every builder has heard it: marketing delivers 1,000 leads, sales says
          they&apos;re all junk. The truth is usually neither. The leads are real
          — they just die in the gap between &ldquo;enquiry&rdquo; and
          &ldquo;first proper follow-up.&rdquo; Here&apos;s exactly why leads
          don&apos;t become site visits, and what actually closes the gap.
        </p>

        {/* Myth */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            &ldquo;My leads are junk&rdquo; is almost never the whole story
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Blaming lead quality feels right because it&apos;s the visible
            symptom. But the same lead that looks like junk to a team calling
            once, sixteen hours late, converts for a team that calls in sixty
            seconds and follows up six times. Before you change your lead source,
            look at what happens to a lead in its first hour and its first month.
            Nine times out of ten, that&apos;s where the visits are leaking.
          </p>
        </section>

        <KrivenFit>
          Every reason below is a gap Kriven is built to close: it calls every
          new lead in under 60 seconds, follows up on WhatsApp until the site
          visit is booked, and keeps every lead tracked in one place — the same
          leads, worked properly.
        </KrivenFit>

        {/* The real reasons */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The six real reasons leads don&apos;t convert
          </h2>
          <div className="mt-8 space-y-8">
            {REASONS.map((r) => (
              <div key={r.n} className="flex gap-5">
                <span className="font-mono text-sm font-semibold text-brand">
                  {r.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                  <p className="mt-3 border-l-2 border-brand/30 pl-4 text-sm leading-relaxed text-foreground/80">
                    {r.stat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Signs */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            How to tell it&apos;s a process gap, not a quality gap
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If most of these are true, your leads are almost certainly fine —
            your process is what&apos;s losing them:
          </p>
          <div className="mt-6 rounded-2xl border border-border-subtle bg-card p-6">
            <ul className="space-y-3">
              {SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {sign}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              The fix: close the gap, keep the leads
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You don&apos;t need better leads. You need to respond in minutes,
              follow up relentlessly across call and WhatsApp, cover nights and
              weekends, keep every lead in one place, and qualify before your
              salespeople spend time. That&apos;s the entire job of an AI sales
              engine — and it&apos;s exactly what Kriven AI does:
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground/90">
              <li>
                •{" "}
                <Link
                  href="/solutions/ai-voice-calling"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  Voice AI
                </Link>{" "}
                that calls every new lead in under 60 seconds, day or night
              </li>
              <li>
                •{" "}
                <Link
                  href="/solutions/whatsapp-automation"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  WhatsApp follow-up
                </Link>{" "}
                that keeps going until the site visit is booked
              </li>
              <li>
                •{" "}
                <Link
                  href="/solutions/lead-management"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  Lead management
                </Link>{" "}
                that keeps every lead in one place, tracked and qualified
              </li>
            </ul>
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
