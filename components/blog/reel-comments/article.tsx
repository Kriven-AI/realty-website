"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, STATS, STEPS, FAQS } from "./data";

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
          You run paid ads carefully — every lead lands in a sheet and gets a
          call. But your organic reel just pulled 200 comments asking
          &ldquo;Price?&rdquo;, &ldquo;Location?&rdquo;, &ldquo;2BHK?&rdquo; — and
          those got a heart react, if that. Those comments are some of the
          warmest, cheapest leads you&apos;ll ever get. Here&apos;s why they leak,
          and how to actually catch them.
        </p>

        {/* Stat block */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.figure}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (i % 2) * 0.08,
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

        {/* The leak */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The leak nobody talks about
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            There&apos;s a strange blind spot in most builders&apos; marketing.
            You&apos;ll pay ₹150–800 for a Meta lead and treat it like gold — but
            a buyer who found you organically, watched your whole reel, and
            commented &ldquo;Price?&rdquo; gets nothing. That buyer is arguably
            more valuable: they came to you, they&apos;re engaged, and they raised
            their hand in public. And there are dozens of them on every reel that
            does well.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The reason they leak is boring but real: no human can DM 200
            commenters on every reel, within minutes, reply to each, qualify them,
            and move them to WhatsApp. So a few get handled and the rest scroll
            on — to a builder who did.
          </p>
        </section>

        <KrivenFit>
          Capturing every commenter, replying in seconds and moving them to
          WhatsApp is exactly what Kriven automates — so a viral reel turns into
          booked site visits instead of a pile of ignored “Price?” comments.
        </KrivenFit>

        {/* The play */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The play: comment to site visit
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Turning a public comment into a private, qualified conversation is a
            four-step move. The whole thing has to happen fast — ideally while the
            buyer is still in the app.
          </p>
          <div className="mt-8 space-y-6">
            {STEPS.map((step) => (
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

        {/* The fix */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Do it at scale, automatically
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This is exactly the kind of work that only pays off when it&apos;s
              automatic and instant. Kriven AI&apos;s{" "}
              <Link
                href="/solutions/lead-generation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                lead generation
              </Link>{" "}
              captures the buyers who comment or DM on your reels, replies in
              seconds, and moves them into a{" "}
              <Link
                href="/solutions/whatsapp-automation"
                className="font-medium text-brand transition-colors hover:text-brand-soft"
              >
                WhatsApp conversation
              </Link>{" "}
              that qualifies them and books the site visit — so a viral reel turns
              into booked visits, not just a nice view count.
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
