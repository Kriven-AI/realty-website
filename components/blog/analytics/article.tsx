"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, INSIGHTS, FAQS } from "./data";
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
          Most builders can tell you how many leads converted last month. Very
          few can tell you why the other 95% didn&apos;t. That gap is expensive —
          because the reasons for &ldquo;no&rdquo; are also the instructions for
          how to win more &ldquo;yes.&rdquo; And they&apos;re already sitting in
          your conversations.
        </p>

        {/* Blind spot */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            You track outcomes, not reasons
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A typical dashboard shows leads in, calls made, visits booked, deals
            closed. Useful — but it&apos;s the scoreboard, not the game. It tells
            you what happened, never why. Why did those 40 leads go cold? What did
            they ask that no one answered well? Which project keeps losing to the
            builder down the road, and on what objection? Without that, you&apos;re
            optimising blind.
          </p>
        </section>

        {/* Insights */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Your conversations already know
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every call and WhatsApp thread is data. Read across all of them and
            the picture is unmistakable:
          </p>
          <div className="mt-6 space-y-4">
            {INSIGHTS.map((insight) => (
              <div
                key={insight.title}
                className="rounded-2xl border border-border-subtle bg-card p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {insight.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {insight.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          Because Kriven runs the calls and the WhatsApp itself, it turns every
          conversation into analytics automatically — ranked objections by
          project, intent per lead, channel performance and how your team handles
          transfers. The &ldquo;why&rdquo; behind every no, without anyone
          tagging a thing.
        </KrivenFit>

        {/* What you do with it */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What you do with the &ldquo;why&rdquo;
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Once you can see the reasons, you can act on them: adjust pricing or
            payment plans where loan objections cluster, arm your team with better
            answers to the top objection, pour budget into the channels that
            actually book, retire the pitches that stall, and coach the
            salespeople who drop transferred leads. That&apos;s how the same lead
            flow starts producing more site visits.
          </p>
        </section>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Stop guessing why deals slip
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Kriven&apos;s{" "}
              <Link
                href="/solutions/analytics"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                analytics and insights
              </Link>{" "}
              turn every call and chat into the answer — so you fix the real
              reasons leads say no, instead of guessing.
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
