"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is real estate sales analytics and lead intelligence?",
    a: "It's turning your sales conversations and lead data into insight you can act on — who your buyers are, what they want, why they don't convert, and which channels and pitches work. Kriven AI builds this automatically from every call and WhatsApp chat, so you make decisions on real data instead of gut feel.",
  },
  {
    q: "How does Kriven AI analyse calls and WhatsApp conversations?",
    a: "Because Kriven's own agent runs the calls and the WhatsApp follow-up, it captures and understands every interaction as it happens — summarising each conversation, scoring intent, and ranking objections by project. There's nothing for your team to record or tag.",
  },
  {
    q: "What decisions can I make with these insights?",
    a: "Concrete ones: adjust pricing or payment plans where loan objections cluster, shift ad budget to the channels that actually book site visits, sharpen your pitch against the competitors buyers keep raising, drop the messaging that stalls, build the unit mixes buyers are asking for, and coach salespeople who let transferred leads go cold.",
  },
  {
    q: "Do I need to tag or log anything manually?",
    a: "No. Manual tagging is exactly what breaks in a busy sales team. Kriven logs, summarises and analyses every call and chat itself, so the insight is always there and always current — without anyone updating a spreadsheet.",
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
            <span className="text-foreground">Analytics &amp; insights,</span>{" "}
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
