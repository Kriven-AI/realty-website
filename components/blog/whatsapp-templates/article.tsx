"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  ChevronDown,
  ArrowRight,
  Zap,
  UserRound,
  Target,
  Scissors,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KrivenFit } from "@/components/blog/kriven-fit";
import { POST, TEMPLATES, FAQS, type Template } from "./data";
import { KeyTakeaways } from "@/components/blog/key-takeaways";

const RULES = [
  {
    icon: Zap,
    title: "Reply fast",
    body: "Within 60 seconds if you can. The first builder to respond usually wins the buyer.",
  },
  {
    icon: UserRound,
    title: "Make it personal",
    body: "Always use the lead's name and the project. Never a generic blast — that gets you ignored or blocked.",
  },
  {
    icon: Target,
    title: "One clear next step",
    body: "Every message should point to a single action: usually booking the site visit.",
  },
  {
    icon: Scissors,
    title: "Keep it short",
    body: "WhatsApp isn't email. Two or three lines, one question, done.",
  },
  {
    icon: ShieldCheck,
    title: "Stay compliant",
    body: "Message people who enquired with you, use registered templates for automated sends, and honour every opt-out.",
  },
];

const CADENCE = [
  ["0–60 seconds", "Instant reply to the new enquiry"],
  ["Same day", "“Tried calling”, if they didn't pick up"],
  ["On request", "Brochure + price list"],
  ["Day 2–3", "Gentle nudge if no reply"],
  ["At booking", "Site-visit confirmation"],
  ["Day before", "Reminder (cuts no-shows)"],
  ["If no-show", "Same-day reschedule"],
  ["After visit", "Follow-up while it's fresh"],
  ["Day 30+", "Re-engage cold leads"],
];

function TemplateCard({ t }: { t: Template }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(t.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the text is still selectable */
    }
  };

  return (
    <div className="rounded-2xl border border-border-subtle bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {t.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.when}</p>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border-subtle px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/30 hover:text-brand"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <p className="mt-4 whitespace-pre-line rounded-xl bg-muted/70 p-4 text-sm leading-relaxed text-foreground/90">
        {t.message}
      </p>
    </div>
  );
}

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
          WhatsApp · Templates
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {POST.title}
        </h1>
        <p className="mt-4 text-sm text-subtle">
          {POST.dateDisplay} · {POST.readTime}
        </p>
        <KeyTakeaways items={POST.takeaways} />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Good WhatsApp follow-up is what turns a portal enquiry into a booked
          site visit. Below are 12 copy-paste templates for every stage — new
          leads, missed calls, reminders, no-shows and cold leads — plus the
          timing and the rules that make them actually work. Steal them freely.
        </p>

        {/* Why it matters */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why WhatsApp, and why follow-up
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            In India, WhatsApp is where property buyers actually are — over 535
            million users, and around 98% of messages get opened, usually within
            minutes (versus roughly 22% for email). But the channel is only half
            the story. The other half is persistence: industry research finds
            about 80% of sales need five or more follow-ups, yet 44% of
            salespeople give up after the very first. The templates below are
            built to close that gap — polite, specific, and always pointing to
            the site visit.
          </p>
        </section>

        <KrivenFit>
          Every template here is a message the Kriven WhatsApp agent sends on its
          own — in the right language, at the right moment, to every lead — so the
          follow-up actually happens instead of depending on someone remembering.
        </KrivenFit>

        {/* Ground rules */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Five rules before you send anything
          </h2>
          <div className="mt-6 space-y-3">
            {RULES.map((rule) => (
              <div
                key={rule.title}
                className="flex items-start gap-4 rounded-2xl border border-border-subtle bg-card p-5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                  <rule.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {rule.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {rule.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The 12 WhatsApp follow-up templates
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Replace the [brackets] with your details. Tap{" "}
            <span className="font-medium text-foreground">Copy</span> and paste
            straight into WhatsApp.
          </p>
          <div className="mt-6 space-y-4">
            {TEMPLATES.map((t) => (
              <TemplateCard key={t.id} t={t} />
            ))}
          </div>
        </section>

        {/* Cadence */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            When to send each one
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle">
            {CADENCE.map(([when, what], i) => (
              <div
                key={when}
                className={cn(
                  "grid grid-cols-[120px_1fr] gap-4 px-5 py-3.5 text-sm sm:grid-cols-[160px_1fr]",
                  i % 2 === 0 ? "bg-card" : "bg-muted/40",
                )}
              >
                <span className="font-medium text-brand">{when}</span>
                <span className="text-foreground/90">{what}</span>
              </div>
            ))}
          </div>
        </section>

        {/* The catch → soft CTA */}
        <section className="mt-16">
          <div className="rounded-2xl border border-brand/20 bg-brand-tint/50 p-7 lg:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              The catch: doing this by hand doesn&apos;t scale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              These templates work — if someone sends every one, to every lead,
              at exactly the right moment, for weeks. In reality your team is
              busy, and industry data shows around 90% of leads in a real-estate
              CRM get no follow-up after 30 days. That&apos;s the whole reason
              paid leads go cold.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Kriven AI runs this entire sequence automatically — replying in
              under 60 seconds, sending brochures, confirming visits, recovering
              no-shows and re-engaging cold leads — in a real two-way
              conversation, in any Indian language, until the site visit is
              booked.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href="/solutions/whatsapp-automation">
                  See WhatsApp automation
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/demo">Book a demo</Link>
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
