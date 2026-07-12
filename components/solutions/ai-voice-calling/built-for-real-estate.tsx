"use client";

import { motion } from "framer-motion";
import { Languages, Building2, MessagesSquare, UserRoundCheck } from "lucide-react";

const POINTS = [
  {
    icon: Languages,
    title: "Speaks the way buyers actually speak",
    body: "Hindi, Telugu, Tamil, Kannada, Marathi, English — and the code-mix real buyers use, switching languages mid-sentence without dropping the thread.",
  },
  {
    icon: Building2,
    title: "Knows how property actually sells",
    body: "It handles objections on price, possession dates, home loans and competing projects with your project's context — not a generic call-centre script.",
  },
  {
    icon: MessagesSquare,
    title: "Qualifies, doesn't interrogate",
    body: "A real back-and-forth that reads intent and asks what a good salesperson would ask — instead of marching a buyer through a rigid form.",
  },
  {
    icon: UserRoundCheck,
    title: "Hands off warm, the right way",
    body: "When a buyer is ready, it passes your salesperson the full conversation, the brochure and the project location — never a promise your team can't keep.",
  },
];

export function BuiltForRealEstate() {
  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-32">
      <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            Why it&apos;s not a generic dialer
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              A voice agent that sounds like your best telecaller.
            </span>{" "}
            <span className="text-muted-foreground">
              Because it&apos;s built only for real estate.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Most &ldquo;AI callers&rdquo; are a generic script bolted onto a
            dialer. They fall apart the moment a buyer switches to Telugu
            mid-call or asks when possession is. Kriven AI is trained on how
            Indian property is actually sold.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="rounded-2xl border border-border-subtle bg-card p-6 lg:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
