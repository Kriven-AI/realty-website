"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, LEAKS, MATH, FAQS } from "./data";
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
          The most expensive leads a builder has aren&apos;t the ones that say
          no. They&apos;re the ones nobody ever reached — the call that rang out,
          the 10pm enquiry seen at 10am, the lead followed up once and forgotten.
          You paid for every one of them. Here&apos;s roughly what that leak costs.
        </p>

        {/* The three leaks */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Three leaks, all invisible on a dashboard
          </h2>
          <div className="mt-8 space-y-6">
            {LEAKS.map((leak) => (
              <div
                key={leak.title}
                className="rounded-2xl border border-border-subtle bg-card p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {leak.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {leak.body}
                </p>
                <p className="mt-3 border-l-2 border-brand/30 pl-4 text-sm leading-relaxed text-foreground/80">
                  {leak.stat}
                </p>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          Kriven exists to plug exactly these leaks — it answers and calls back
          every lead in under 60 seconds, at any hour, and keeps following up on
          WhatsApp until the buyer books or opts out. No missed call, no
          after-hours gap, no forgotten lead.
        </KrivenFit>

        {/* The math */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Do the math (a conservative example)
          </h2>
          <div className="mt-6 rounded-2xl border border-border-subtle bg-card p-6">
            <ol className="space-y-4">
              {MATH.map((line, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-sm font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-foreground/90">
                    {line}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-4 text-sm text-subtle">
            Illustrative numbers — plug in your own lead volume, cost and ticket
            size and the shape holds.
          </p>
        </section>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              You don&apos;t need more leads. You need to stop losing these.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every leak here has the same root cause: no one can cover every
              call, every hour, forever. Kriven AI&apos;s{" "}
              <Link
                href="/solutions/ai-voice-calling"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                voice agent
              </Link>{" "}
              and{" "}
              <Link
                href="/solutions/whatsapp-automation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                WhatsApp follow-up
              </Link>{" "}
              do — so the leads you already pay for actually get worked.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/blog/the-first-60-minutes-of-a-real-estate-lead">
                  The first 60 minutes
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
