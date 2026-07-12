"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is voice AI for real estate?",
    a: "Voice AI is software that makes and answers phone calls in a natural, human-sounding voice. For real estate, Kriven AI's voice agent picks up inbound enquiries and runs outbound calling campaigns — qualifying buyers and booking site visits, 24/7, in any Indian language.",
  },
  {
    q: "Can it make outbound cold calls to my lead list?",
    a: "Yes. Upload a CSV or connect your CRM, and the agent dials each lead at the time they're most likely to answer, pitches the project, handles questions and books site visits. If a lead doesn't pick up, it retries on a smart schedule and falls back to WhatsApp.",
  },
  {
    q: "Which Indian languages does the voice agent speak?",
    a: "Hindi, Telugu, Tamil, Kannada, Marathi and English — plus the natural code-mix buyers use, switching languages mid-call without losing context.",
  },
  {
    q: "Will it replace my telecallers?",
    a: "It removes the repetitive, after-hours, first-response work that burns telecallers out — and Indian call-centre attrition runs 30–50% a year. Your people move to what humans do best: closing warm, qualified buyers on site visits, while the agent handles volume around the clock.",
  },
  {
    q: "Is AI calling legal for real estate in India?",
    a: "Kriven AI is built to run on registered, opt-out-friendly calling and messaging infrastructure — registered sender IDs, DLT-registered templates and honoured opt-outs — which helps you stay aligned with India's rules. On your demo we walk you through what responsible outreach looks like for your projects; for anything specific, check with your legal team.",
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
            <span className="text-foreground">Voice AI for real estate,</span>{" "}
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
