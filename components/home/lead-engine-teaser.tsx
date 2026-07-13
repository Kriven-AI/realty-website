"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Megaphone,
  MonitorPlay,
  Camera,
  Building2,
  MessageCircle,
  PhoneCall,
  Target,
  CalendarCheck,
  CheckCircle2,
  User,
  Check,
  Zap,
  Languages,
  Clock,
  ArrowRight,
  ArrowDown,
  Workflow,
  Search,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

/* ---------------- Sources — what we run for the builder ---------------- */

type Help = string | { text: string; highlight: true };

type Source = {
  key: string;
  title: string;
  icon: LucideIcon;
  helps: Help[];
  honest?: boolean;
};

const SOURCES: Source[] = [
  {
    key: "website",
    title: "Get Discovered",
    icon: Search,
    helps: [
      "Custom SEO strategy & keyword research",
      "On-brand content creation & updates",
      "Technical SEO audits & fixes",
      { text: "LLM placement — ChatGPT & Google AI Overviews", highlight: true },
      "High-quality link building",
      { text: "Rank on Google Maps for ‘near me’ buyers", highlight: true },
    ],
  },
  {
    key: "ads",
    title: "Paid Meta & Google Ads",
    icon: Megaphone,
    helps: [
      "Strategy tailored to your business",
      "Full campaign launch & management",
      "Creative design & variation testing",
      { text: "Captured leads are called in less than 60 seconds", highlight: true },
      { text: "Budget optimization across channels", highlight: true },
      "Data-driven reporting & insights",
    ],
  },
  {
    key: "youtube",
    title: "YouTube channel",
    icon: MonitorPlay,
    helps: [
      "Stunning videos from your site footage",
      "Short-form videos for reach",
      { text: "Comments answered → routed to WhatsApp", highlight: true },
    ],
  },
  {
    key: "instagram",
    title: "Instagram channel",
    icon: Camera,
    helps: [
      "Reels & posts from your site footage",
      "Short-form content that gets discovered",
      { text: "Auto-replies to comments → DM → qualified in-thread", highlight: true },
    ],
  },
  {
    key: "portals",
    title: "Property Portals",
    icon: Building2,
    honest: true,
    helps: [
      "We list your project details + a callable number",
      "Leads call you directly — minimal AI needed here",
    ],
  },
];

/* ---------------- Channels that qualify + the pipeline ---------------- */

const QUALIFY_CHANNELS = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    when: "When they tap a Meta / Google ad, or our reply to a YouTube comment",
  },
  {
    key: "instagram",
    label: "Instagram DM",
    icon: Camera,
    when: "When they comment on a reel/post — qualified in the same thread",
  },
  {
    key: "voice",
    label: "Voice AI call",
    icon: PhoneCall,
    when: "When they call in — or prefer a call over chat",
  },
  {
    key: "chatbot",
    label: "Website chatbot",
    icon: Bot,
    when: "When they land on your website",
  },
];

/* ---------------- Sneha — the animated one-lead example ---------------- */

type FlowNode = { label: string; icon: LucideIcon };

const FLOW: FlowNode[] = [
  { label: "Meta ad", icon: Megaphone },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Qualified", icon: Target },
  { label: "Booked", icon: CalendarCheck },
  { label: "Handoff", icon: UserCheck },
];

const SNEHA = [
  "11:04 PM · Sneha taps your Meta ad — one tap straight into WhatsApp",
  "11:05 PM · Kriven AI greets her on WhatsApp — in her own language",
  "11:08 PM · 3BHK · ₹80L · ready to buy → 🔥 HOT lead",
  "11:10 PM · Site visit booked + brochure sent, all in the same thread ✅",
  "★ Your sales rep is notified with her full history. They just close.",
];

const LOVES: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: "Replies in 60 seconds" },
  { icon: Languages, label: "20+ Indian languages" },
  { icon: Clock, label: "Works 24/7" },
  { icon: CalendarCheck, label: "Books site visits" },
];

const STEP_MS = 3500;

export function LeadEngineTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <Workflow className="h-3.5 w-3.5" />
            The Lead Engine
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">From every channel</span>{" "}
            <span className="text-muted-foreground">to a site visit.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We run the whole journey — bring leads in across every channel,
            then handle every one to a booked site visit. Watch one lead travel
            the engine, then see everything we run to make it happen.
          </p>
        </div>

        {/* Animated one-lead glance */}
        <SnehaFlow />

        {/* Builders love this */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5"
        >
          {LOVES.map((l) => {
            const Icon = l.icon;
            return (
              <span
                key={l.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5 text-[12px] font-semibold text-brand"
              >
                <Icon className="h-3.5 w-3.5" />
                {l.label}
              </span>
            );
          })}
        </motion.div>

        {/* The detailed map */}
        <div className="mt-16 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* LEFT — sources we run */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
              <Megaphone className="h-3.5 w-3.5" /> 1 · We bring leads in
            </span>
            <div className="mt-4 space-y-3">
              {SOURCES.map((s, i) => (
                <SourceCard key={s.key} source={s} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT — qualify channels + pipeline (sticky) */}
          <div className="mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success-tint px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-success">
                <Target className="h-3.5 w-3.5" /> 2 · We handle every lead
              </span>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                className="mt-4 rounded-2xl border border-border-subtle bg-card p-6"
              >
                <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-subtle">
                  The moment a lead comes in
                </p>
                <p className="mt-1 text-center text-sm font-semibold text-foreground">
                  It lands where it gets qualified
                </p>

                <div className="mt-4 space-y-2.5">
                  {QUALIFY_CHANNELS.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.key}
                        className="flex items-start gap-3 rounded-xl border border-border-subtle bg-background/50 px-4 py-3"
                      >
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-[11.5px] leading-snug text-subtle">
                            {c.when}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* down the pipeline */}
                <div className="mt-4 flex flex-col items-center gap-2">
                  <ArrowDown className="h-4 w-4 text-subtle" />
                  <PipelinePill icon={Target} label="Qualify the lead" />
                  <ArrowDown className="h-4 w-4 text-subtle" />
                  <PipelinePill icon={CalendarCheck} label="Book the site visit" />
                  <ArrowDown className="h-4 w-4 text-brand" />
                  <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-brand/30 bg-brand-tint px-4 py-3 shadow-[0_8px_24px_-12px_rgba(217,88,62,0.4)]">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                    <span className="text-sm font-bold uppercase tracking-wide text-brand">
                      Site visit
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/how-it-works"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[0_10px_30px_-10px_rgba(217,88,62,0.5)] transition-transform hover:scale-[1.02]"
          >
            See the full step-by-step breakdown
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SourceCard({ source, index }: { source: Source; index: number }) {
  const Icon = source.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="rounded-2xl border border-border-subtle bg-card p-5 transition-colors hover:border-brand/30"
    >
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
          {source.title}
        </h3>
        {source.honest && (
          <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-subtle">
            Light touch
          </span>
        )}
      </div>
      <ul className="mt-3 grid gap-1.5 border-t border-border-subtle pt-3 sm:grid-cols-2">
        {source.helps.map((h) => {
          const isObj = typeof h === "object";
          const text = isObj ? h.text : h;
          const highlight = isObj && h.highlight;
          return (
            <li
              key={text}
              className="flex items-start gap-1.5 text-[12px] leading-relaxed text-muted-foreground"
            >
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-brand/80" />
              <span
                style={
                  highlight
                    ? { color: "var(--brand)", textShadow: "0 0 gray" }
                    : undefined
                }
              >
                {text}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function PipelinePill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle bg-background/50 px-4 py-2.5">
      <Icon className="h-4 w-4 text-foreground" />
      <span className="text-[13px] font-medium text-foreground">{label}</span>
    </div>
  );
}

function SnehaFlow() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) {
      setStep(FLOW.length - 1);
      return;
    }
    const id = setInterval(
      () => setStep((s) => (s + 1) % FLOW.length),
      STEP_MS,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const pct = (step / (FLOW.length - 1)) * 100;

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="relative px-5">
        {/* track + progress */}
        <div className="absolute left-5 right-5 top-6 h-0.5 -translate-y-1/2 rounded-full bg-border-subtle" />
        <motion.div
          className="absolute left-5 top-6 h-0.5 -translate-y-1/2 rounded-full bg-brand"
          animate={{ width: `calc((100% - 2.5rem) * ${pct / 100})` }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        />
        {/* Sneha token */}
        <motion.div
          className="absolute top-6 z-20 -translate-x-1/2 -translate-y-1/2"
          animate={{ left: `calc(1.25rem + (100% - 2.5rem) * ${pct / 100})` }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-brand-foreground shadow-[0_6px_16px_-4px_rgba(217,88,62,0.6)]">
            <User className="h-3 w-3" />
            Sneha
          </span>
        </motion.div>

        {/* nodes */}
        <div className="relative grid grid-cols-5">
          {FLOW.map((node, i) => {
            const active = i === step;
            const done = i < step;
            const Icon = node.icon;
            return (
              <div key={node.label} className="flex flex-col items-center">
                <span
                  className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 transition-all duration-500 ${
                    active
                      ? "scale-110 border-brand bg-brand text-brand-foreground shadow-[0_10px_24px_-8px_rgba(217,88,62,0.55)]"
                      : done
                        ? "border-brand/40 bg-brand-tint text-brand"
                        : "border-border-subtle bg-card text-subtle"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`mt-2.5 text-[11.5px] font-semibold transition-colors ${
                    active || done ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* caption */}
      <div className="mt-6 flex justify-center">
        <motion.div
          key={SNEHA[step]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-4 py-2 shadow-[0_4px_16px_-6px_rgba(26,24,23,0.12)]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
            <User className="h-3 w-3" />
          </span>
          <span className="text-[13px] font-medium text-foreground">
            {SNEHA[step]}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
