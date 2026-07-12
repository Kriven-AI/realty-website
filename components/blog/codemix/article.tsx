"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, EXAMPLES, FAILURES, FAQS } from "./data";

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
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Indian buyers don&apos;t speak in one language. They ask about price in
          Hindi, possession in English and switch to Telugu for the loan — often
          in the same sentence. It&apos;s completely natural to them, and it
          quietly breaks almost every &ldquo;AI caller&rdquo; on the market.
        </p>

        {/* Examples */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            This is a normal enquiry
          </h2>
          <div className="mt-6 space-y-3">
            {EXAMPLES.map((ex) => (
              <p
                key={ex}
                className="rounded-2xl border border-border-subtle bg-card px-6 py-4 text-base italic leading-relaxed text-foreground/90"
              >
                {ex}
              </p>
            ))}
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A human telecaller handles this without thinking. A generic bot,
            trained on tidy single-language speech, falls apart.
          </p>
        </section>

        {/* Failures */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why generic voice bots break
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {FAILURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border-subtle bg-card p-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {f.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <KrivenFit>
          Kriven&apos;s voice agent is built for exactly this — trained on Indian
          code-mixed speech across Hindi, Telugu, Tamil, Kannada, Marathi and
          English, so it follows a buyer who switches languages mid-call without
          missing a beat. That&apos;s a moat generic tools can&apos;t copy quickly.
        </KrivenFit>

        {/* Why it matters */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why it decides the sale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Language isn&apos;t a nicety in real estate — it&apos;s trust. A buyer
            who feels understood in their own words opens up about budget,
            timeline and what&apos;s really holding them back. One who has to
            fight a bot to be understood simply hangs up and calls the next
            builder. On a ₹80-lakh decision, sounding human in the buyer&apos;s
            language is the whole game.
          </p>
        </section>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Sound like a local, at scale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Handling real Indian speech is exactly what Kriven&apos;s{" "}
              <Link
                href="/solutions/ai-voice-calling"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                voice agent
              </Link>{" "}
              is built to do — on every call, in every language your buyers
              actually use.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Hear a real call
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
