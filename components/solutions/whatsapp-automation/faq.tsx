"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is WhatsApp automation for real estate?",
    a: "It's software that follows up with your property leads on WhatsApp automatically — replying the moment a lead comes in, sending brochures and pricing, answering questions, recovering no-shows and nurturing warm buyers, all in a real two-way conversation, until a site visit is booked.",
  },
  {
    q: "Is this just bulk WhatsApp broadcasting?",
    a: "No. Broadcast tools fire one template at thousands of numbers. Kriven AI holds an individual, two-way conversation with each buyer — reading their replies and responding in context — which is what keeps you deliverable and gets buyers to a site visit instead of blocking you.",
  },
  {
    q: "Can it handle two-way replies from buyers?",
    a: "Yes. Buyers can ask about price, possession, loans or location and get an instant, relevant answer — including brochures and floor plans on request. When a buyer wants to talk to a person, it hands them to your sales team with the full conversation.",
  },
  {
    q: "Is WhatsApp marketing legal and compliant in India?",
    a: "Kriven AI runs on the official Meta / WhatsApp Business APIs using registered message templates and honoured opt-outs — a responsible way to message at scale that helps you stay aligned with the rules. On your demo we walk you through what that looks like for your projects; for anything specific to your business, check with your legal team.",
  },
  {
    q: "How is it different from a website chatbot?",
    a: "A website chatbot only works while the visitor is on your site. WhatsApp follow-up reaches the buyer after they've left — on the app they check all day — and keeps the thread going across days and weeks until they book.",
  },
  {
    q: "Can it recover site-visit no-shows?",
    a: "Yes. When a booked visit is missed, the agent re-engages the lead on WhatsApp, understands why, and reschedules — so a no-show becomes a rebooked visit instead of a lost lead.",
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
            <span className="text-foreground">WhatsApp follow-up,</span>{" "}
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

        <p className="mt-10 text-sm text-muted-foreground">
          Further reading:{" "}
          <Link
            href="/blog/whatsapp-follow-up-templates-for-real-estate"
            className="font-medium text-brand transition-colors hover:text-brand-soft"
          >
            12 WhatsApp follow-up templates for real estate →
          </Link>
        </p>
      </div>
    </section>
  );
}
