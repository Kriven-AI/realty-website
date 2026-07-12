"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is a real estate lead generation platform?",
    a: "It's software that brings property buyers in from multiple channels — search, maps, ads, social and your website — and captures them as leads in one place. Kriven AI goes a step further: it also works those leads with calls and WhatsApp until they book a site visit, so lead generation and conversion happen on one platform.",
  },
  {
    q: "How is this different from a lead generation agency or company?",
    a: "An agency sells you leads and is measured on volume — then it's on your team to follow up (and most leads never get worked). Kriven both generates the leads and converts them: it calls and messages every lead automatically, so you're paying for booked site visits, not a lead count.",
  },
  {
    q: "Which channels does it generate leads from?",
    a: "Google search and Google Maps, AI answers (ChatGPT, Gemini, Google AI Overviews), Meta and Google ad campaigns, organic Instagram and YouTube, comments captured straight into Instagram DMs, and a website chatbot — all feeding one engine.",
  },
  {
    q: "Does it convert the leads, or just deliver them?",
    a: "It converts them. This is the whole point — every lead it generates is called and messaged within 60 seconds, qualified in a real conversation, and followed up until the site visit is booked. Most lead-gen stops at delivery; Kriven doesn't.",
  },
  {
    q: "Can it generate leads from Instagram and YouTube?",
    a: "Yes. It produces organic reels from your own site footage, and captures the buyers who comment or DM asking for price and details — auto-replying and qualifying them right in the Instagram DM, so social engagement becomes booked site visits.",
  },
  {
    q: "What's the best way to generate real estate leads in India?",
    a: "Use several channels together — search, maps, ads and organic social — but the real win is speed and follow-up: leads worked within minutes convert far better. Since about 80% of leads never convert, mostly due to weak follow-up, the biggest gains come from working leads well, not just buying more.",
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
            <span className="text-foreground">Lead generation,</span>{" "}
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
