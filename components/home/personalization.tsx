"use client";

import { motion } from "framer-motion";
import { Clock, Target, MessageSquare, type LucideIcon } from "lucide-react";

type Persona = {
  name: string;
  role: string;
  accent: string;
  accentTint: string;
  when: string;
  what: string;
  how: string;
};

const PERSONAS: Persona[] = [
  {
    name: "Ramesh K.",
    role: "IT Professional · Whitefield · ₹70–80L",
    accent: "var(--info)",
    accentTint: "var(--info-tint)",
    when: "Lunch break & after-office hours",
    what: "Short commute, loan tie-ups, ready-to-move",
    how: "Direct & data-first — English–Hindi mix",
  },
  {
    name: "Suresh M.",
    role: "Business Owner · Indiranagar · ₹1.5–2 Cr",
    accent: "var(--brand)",
    accentTint: "var(--brand-tint)",
    when: "Mid-morning & weekends, between meetings",
    what: "Premium amenities, top schools, large layouts",
    how: "Warm & relationship-first — respectful Hindi",
  },
  {
    name: "Anita R.",
    role: "NRI Investor · London · ₹1–1.2 Cr",
    accent: "var(--success)",
    accentTint: "var(--success-tint)",
    when: "Weekend mornings IST — tuned to her timezone",
    what: "Rental yield, RERA papers, property management",
    how: "Formal & ROI-focused — clear English",
  },
];

const DIMENSIONS: { key: "when" | "what" | "how"; label: string; icon: LucideIcon }[] =
  [
    { key: "when", label: "When it calls", icon: Clock },
    { key: "what", label: "What it pitches", icon: Target },
    { key: "how", label: "How it speaks", icon: MessageSquare },
  ];

export function Personalization() {
  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30 mask-radial-fade" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            Personalization engine
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">No two leads.</span>{" "}
            <span className="text-muted-foreground">No same script.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Kriven reads who each lead is — and adapts three things every
            time: <span className="text-foreground">when</span> it calls,{" "}
            <span className="text-foreground">what</span> it pitches, and{" "}
            <span className="text-foreground">how</span> it speaks.
          </p>
        </div>

        {/* Three lead types — same three rows, so the pattern is obvious */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="relative overflow-hidden rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.05)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: persona.accent }}
              />

              {/* Who the lead is */}
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    background: persona.accentTint,
                    color: persona.accent,
                  }}
                >
                  {persona.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {persona.name}
                  </h3>
                  <p className="text-[12px] leading-snug text-muted-foreground">
                    {persona.role}
                  </p>
                </div>
              </div>

              {/* How Kriven adapts — same 3 rows on every card */}
              <div className="mt-5 space-y-4 border-t border-border-subtle pt-5">
                {DIMENSIONS.map((dim) => {
                  const Icon = dim.icon;
                  return (
                    <div key={dim.key} className="flex gap-3">
                      <span
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          background: persona.accentTint,
                          color: persona.accent,
                        }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="font-mono text-[9.5px] font-semibold uppercase tracking-wider text-subtle">
                          {dim.label}
                        </p>
                        <p className="mt-0.5 text-[13px] leading-snug text-foreground">
                          {persona[dim.key]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip — what powers the personalization */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border-subtle bg-card p-6 sm:p-8">
          <div className="max-w-4xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              How the agent learns
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Every call makes Kriven<span className="text-brand">&nbsp;AI</span>{" "}
              sharper.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Every objection raised. Every callback time. Every phrase that
              hit. The{" "}
              <span className="font-semibold text-foreground">Kriven</span>
              <span className="font-semibold text-brand">&nbsp;AI</span> sales
              agent logs them all — and feeds them back into the next
              conversation. After 10,000 calls, the agent has seen patterns
              your team would take years to spot.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border-subtle pt-6 sm:grid-cols-3">
            <SignalGroup
              label="Who they are"
              items={["Profession", "Location", "Family size", "Budget band"]}
            />
            <SignalGroup
              label="When they engage"
              items={["Response timing", "Best call window", "Reply latency"]}
            />
            <SignalGroup
              label="What they care about"
              items={[
                "Past objections",
                "Project preferences",
                "Competitors mentioned",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-subtle">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="inline-block h-1 w-1 rounded-full bg-brand"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
