"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, STATS, FACTORS, PLAYBOOK, FAQS } from "./data";

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
          A buyer opens ChatGPT and types &ldquo;best builder in Hyderabad for a
          3 BHK under ₹1.5 crore.&rdquo; In seconds they get a shortlist — a few
          names, with reasons. If your project isn&apos;t on it, you were never in
          the running, and you&apos;ll never even see the enquiry you lost. This
          is the new front page of search — and it&apos;s not just ChatGPT: buyers ask
          Gemini, Perplexity and Google&apos;s own AI Overviews the very same way.
          Most builders aren&apos;t in any of their answers.
        </p>

        {/* The shift */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The shift is already happening
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.figure}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="flex flex-col rounded-2xl border border-border-subtle bg-card p-6"
              >
                <p className="text-3xl font-semibold tracking-tight text-brand">
                  {stat.figure}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {stat.body}
                </p>
                <p className="mt-auto pt-4 text-[11px] leading-snug text-subtle">
                  {stat.note}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Opportunity */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Real estate is late — which is your opening
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Almost no Indian builder is optimising to be cited in AI answers yet.
            That&apos;s exactly why it&apos;s worth doing now: the same
            first-mover advantage that ranking on Google gave a decade ago is on
            offer again, and the field is nearly empty. The builders who get
            structured and referenced now will own the AI shortlist for years.
          </p>
        </section>

        {/* Factors */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            How AI decides who to cite
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {FACTORS.map((f) => (
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

        {/* Playbook */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The GEO playbook for builders
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
          Getting cited in AI answers is part of what Kriven&apos;s lead
          generation does — structuring your presence so ChatGPT, Gemini, Perplexity and
          Google AI recommend your projects — and then every enquiry it earns is
          worked instantly by voice and WhatsApp, so AI visibility turns into
          booked site visits.
        </KrivenFit>

        {/* Fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Be in the answer, then win the lead
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Kriven AI&apos;s{" "}
              <Link
                href="/solutions/lead-generation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                lead generation
              </Link>{" "}
              works to get you cited in AI search and ranked on Google and Maps —
              and captures and converts every buyer who finds you there.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/demo">
                  Book a demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/solutions/lead-generation">
                  See lead generation
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
