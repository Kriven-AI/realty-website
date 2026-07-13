"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, TIMELINE, REFERENCE, FAQS } from "./data";
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
        <KeyTakeaways items={POST.takeaways} />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A real estate lead is a decaying asset. The moment a buyer fills your
          form, a clock starts — and its value drops by the minute. The short
          answer to &ldquo;how fast should you respond?&rdquo; is: within five
          minutes, ideally under sixty seconds. Here&apos;s what the data says
          happens across that first hour.
        </p>

        {/* Answer-first callout */}
        <div className="mt-8 rounded-2xl border border-brand/20 bg-brand-tint/50 p-6">
          <p className="text-base leading-relaxed text-foreground">
            <span className="font-semibold">The short version:</span> contacting
            a lead within 5 minutes versus 30 makes you roughly{" "}
            <span className="font-semibold text-brand">
              100× more likely to connect
            </span>{" "}
            and{" "}
            <span className="font-semibold text-brand">21× more likely to qualify</span>{" "}
            — and about{" "}
            <span className="font-semibold text-brand">
              78% of buyers go with the first business to respond
            </span>
            . Speed isn&apos;t an edge. It&apos;s the game.
          </p>
        </div>

        {/* Timeline */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Minute by minute: how a lead goes cold
          </h2>
          <div className="mt-8 space-y-6">
            {TIMELINE.map((stage) => (
              <div
                key={stage.window}
                className="rounded-2xl border border-border-subtle bg-card p-6"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-sm font-semibold text-brand">
                    {stage.window}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {stage.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
                <p className="mt-3 border-l-2 border-brand/30 pl-4 text-sm leading-relaxed text-foreground/80">
                  {stage.source}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick reference table */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Response time, at a glance
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle">
            {REFERENCE.map(([time, outcome], i) => (
              <div
                key={time}
                className={cn(
                  "grid grid-cols-[130px_1fr] gap-4 px-5 py-4 text-sm sm:grid-cols-[180px_1fr]",
                  i % 2 === 0 ? "bg-card" : "bg-muted/40",
                )}
              >
                <span className="font-semibold text-brand">{time}</span>
                <span className="text-foreground/90">{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          This is the whole reason the Kriven voice agent calls every new lead in
          under 60 seconds and the WhatsApp agent keeps following up — built to
          win the golden window that no human team can cover at 11pm on a Sunday.
        </KrivenFit>

        {/* The reality gap */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The reality gap — and the opportunity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Here&apos;s the strange part: almost no one does this. Only about 27%
            of leads are ever contacted at all. The average real-estate response
            time runs to roughly 15 hours, and around 62% of enquiries arrive
            outside business hours — evenings and weekends — when no one&apos;s
            there to answer. That gap is exactly why speed is such an unfair
            advantage: your competitors have all read the same studies, and still
            don&apos;t act on them. Being the builder who calls in sixty seconds
            makes you the exception.
          </p>
        </section>

        {/* The fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              How to actually respond in 60 seconds
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No human team can call every lead in under a minute, at 11pm, on a
              Sunday, in the buyer&apos;s language. That&apos;s the one job that
              has to be automated. Kriven AI&apos;s{" "}
              <Link
                href="/solutions/ai-voice-calling"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                voice agent
              </Link>{" "}
              calls every new lead within 60 seconds and its{" "}
              <Link
                href="/solutions/whatsapp-automation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                WhatsApp agent
              </Link>{" "}
              keeps following up — so you win the golden window on every lead,
              round the clock, instead of just the ones that happen to arrive
              during office hours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Hear a 60-second callback
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/blog/why-real-estate-leads-dont-convert-into-site-visits">
                  Why leads don&apos;t convert
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
