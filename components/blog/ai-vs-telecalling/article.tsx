"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, COMPARE, HUMAN_WINS, FAQS } from "./data";
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
          Should a builder run a telecalling team, an AI voice agent, or both?
          Here&apos;s the honest breakdown. The short answer: AI wins decisively
          on speed, availability, cost and follow-up; humans still win on closing.
          The best sales floors use each for what it&apos;s good at.
        </p>

        {/* The real cost */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The real cost of a telecalling team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A telecaller&apos;s salary is the small part. In India that&apos;s
            ₹12,000–25,000 a month for real estate — but on top of it sit
            training, management, floor space and software, plus 30–50% annual
            attrition that means you&apos;re always re-hiring and retraining. And
            all of that buys you one shift: a team that goes home at six, while
            most enquiries arrive after. The biggest cost isn&apos;t payroll —
            it&apos;s the leads that go unanswered.
          </p>
        </section>

        <KrivenFit>
          Kriven is the AI half of this equation: it handles first response,
          qualification and 24/7 follow-up — the work that burns telecallers out
          — then warm-transfers ready buyers to your salespeople to close.
        </KrivenFit>

        {/* Comparison */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Head to head
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
                      Telecalling team
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                      {row.human}
                    </p>
                  </div>
                  <div className="rounded-xl bg-brand-tint/60 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                      AI voice agent
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                      {row.ai}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where humans win */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Where humans still win
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            This isn&apos;t a case for firing your sales team — the opposite. AI
            is weak exactly where good salespeople are strong:
          </p>
          <div className="mt-6 rounded-2xl border border-border-subtle bg-card p-6">
            <ul className="space-y-3">
              {HUMAN_WINS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The verdict */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              The verdict: it&apos;s not either/or
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The strongest setup uses AI for what burns telecallers out —
              first response, qualification and endless follow-up, 24/7 — and
              keeps humans for what they&apos;re best at: closing. That&apos;s
              exactly how Kriven AI works. Its{" "}
              <Link
                href="/solutions/ai-voice-calling"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                voice agent
              </Link>{" "}
              reaches, qualifies and follows up with every lead in any language,
              round the clock — then warm-transfers the ready buyers to your
              salespeople with full context. Your people stop dialing dead
              numbers and spend their time closing.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/solutions/ai-voice-calling">
                  See the voice agent
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
