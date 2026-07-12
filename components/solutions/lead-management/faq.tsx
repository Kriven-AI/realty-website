"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is real estate lead management?",
    a: "Real estate lead management is the process of capturing every property enquiry, tracking it in one place, and following up until the buyer books a site visit or drops off. Kriven AI does all of it automatically — capturing leads from every channel, scoring them, and working them with calls and WhatsApp.",
  },
  {
    q: "Is Kriven AI a CRM?",
    a: "It does what you want a CRM to do — one place for every lead, full history and tracking — but it goes further: it actually works the leads on its own, calling and following up 24/7. A CRM stores and waits; Kriven AI captures, tracks and acts.",
  },
  {
    q: "Do I have to replace my existing CRM like Sell.Do or LeadSquared?",
    a: "No. Kriven AI can pull leads from your existing CRM and work them, or capture leads directly if you're starting fresh. Either way, the leads get called, messaged and followed up — you don't have to rip anything out to get value.",
  },
  {
    q: "Which sources can it pull leads from?",
    a: "Portal leads (99acres, MagicBricks, Housing), Meta and Google ads, your website and chatbot, WhatsApp enquiries and inbound calls — all captured, de-duplicated and tracked in one view.",
  },
  {
    q: "Can it track and score every lead?",
    a: "Yes. Every lead carries a live status, an intent score, the full conversation history across calls and WhatsApp, and a recommended next action — so you always know who's hot and what to do next.",
  },
  {
    q: "How is this different from a normal CRM?",
    a: "A normal CRM is a database that waits for your team to act — and industry data shows about 90% of leads in a real-estate CRM get no follow-up after 30 days. Kriven AI is the layer that does the acting: it works every lead automatically, so they don't rot in a database.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            Questions builders ask
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Lead management,</span>{" "}
            <span className="text-muted-foreground">answered.</span>
          </h2>
        </motion.div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-black/[0.02]"
                >
                  <span className="text-base font-semibold tracking-tight text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-soft transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
