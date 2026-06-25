"use client";

import { motion } from "framer-motion";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
  Search,
  MapPin,
  Sparkles,
  MonitorPlay,
} from "lucide-react";

export function InboundVisual() {
  const lines = [
    {
      speaker: "lead",
      text: "Whitefield project లో 2BHK price ఎంత?",
    },
    {
      speaker: "ai",
      text: "Starting ₹72L — 1180 sqft, east-facing. WhatsApp లో floor plan పంపమంటారా?",
    },
    {
      speaker: "lead",
      text: "Yes. Loan tie-ups కూడా చెప్పండి.",
    },
    {
      speaker: "ai",
      text: "HDFC, SBI, ICICI pre-approved ఉన్నాయి. Saturday 4pm site visit block చేస్తాను?",
    },
  ];

  return (
    <div className="relative rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_20px_50px_-20px_rgba(26,24,23,0.12)]">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand-soft">
            <PhoneIncoming className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">
              Inbound · Live
            </p>
            <p className="text-sm font-medium text-foreground">
              +91 98•• ••42
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-muted-foreground">02:41</span>
      </div>

      <div className="mt-4 space-y-3">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className={`flex gap-2 ${
              line.speaker === "ai" ? "" : "flex-row-reverse"
            }`}
          >
            <span
              className={`mt-1 inline-flex h-5 shrink-0 items-center rounded px-1.5 text-[9px] font-bold uppercase tracking-wider ${
                line.speaker === "ai"
                  ? "bg-brand/15 text-brand-soft"
                  : "bg-black/[0.06] text-muted-foreground"
              }`}
            >
              {line.speaker === "ai" ? "AI" : "Lead"}
            </span>
            <p
              className={`max-w-[80%] rounded-lg px-3 py-2 text-[13.5px] leading-relaxed ${
                line.speaker === "ai"
                  ? "bg-black/[0.04] text-foreground"
                  : "border border-brand/15 bg-brand/10 text-foreground"
              }`}
            >
              {line.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 border-t border-border-subtle pt-4">
        {[
          { label: "Intent", value: "Hot", tint: "brand" },
          { label: "Score", value: "92" },
          { label: "Lang", value: "EN+HI" },
          { label: "Visit", value: "Booked", tint: "success" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-[9px] uppercase tracking-wider text-subtle">
              {stat.label}
            </p>
            <p
              className={`mt-0.5 text-xs font-semibold ${
                stat.tint === "brand"
                  ? "text-brand-soft"
                  : stat.tint === "success"
                    ? "text-success"
                    : "text-foreground"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OutboundVisual() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_20px_50px_-20px_rgba(26,24,23,0.12)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/[0.05] text-foreground/80">
            <PhoneOutgoing className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">
              Campaign · Active
            </p>
            <p className="text-sm font-medium text-foreground">
              Whitefield · Phase 2
            </p>
          </div>
        </div>
        <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-success">
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "Dialing", value: "247", sub: "of 850" },
          { label: "Picked", value: "62%", sub: "+8% vs avg" },
          { label: "Booked", value: "11", sub: "site visits" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border-subtle bg-background/40 p-3"
          >
            <p className="text-[10px] uppercase tracking-wider text-subtle">
              {kpi.label}
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-foreground tabular-nums">
              {kpi.value}
            </p>
            <p className="text-[10px] text-muted-foreground">{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-subtle">
          Smart retry windows · today
        </p>
        <div className="space-y-2">
          {[
            { type: "Business owners", time: "10:00 — 12:00", count: 67 },
            { type: "IT professionals", time: "12:30 — 13:30", count: 124 },
            { type: "Salaried", time: "18:30 — 20:00", count: 89 },
          ].map((row) => (
            <div
              key={row.type}
              className="flex items-center justify-between rounded-lg border border-border-subtle bg-background/30 px-3 py-2"
            >
              <div>
                <p className="text-xs font-medium text-foreground">
                  {row.type}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {row.time} IST
                </p>
              </div>
              <span className="font-mono text-xs text-brand-soft">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhatsAppVisual() {
  const messages = [
    {
      from: "ai",
      text: "Hi Vikram ji! Aapse call par baat karke accha laga.",
    },
    { from: "ai", text: "📎 Sunrise · Whitefield 2BHK · Floor Plan.pdf" },
    {
      from: "lead",
      text: "Sorry, couldn't talk earlier. Brochure looks good.",
    },
    {
      from: "ai",
      text: "No problem! Saturday 4pm site visit ke liye free ho?",
    },
    { from: "lead", text: "Saturday works. Address bhej do." },
    {
      from: "ai",
      text: "✅ Booked. Map + sales rep contact 2 min mein bhejta hoon.",
    },
  ];

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border-subtle bg-card p-5 shadow-[0_20px_50px_-20px_rgba(26,24,23,0.12)]">
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success">
            <MessageCircle className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">
              WhatsApp Business
            </p>
            <p className="text-sm font-medium text-foreground">
              Vikram · +91 98•• ••81
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className={`flex ${msg.from === "lead" ? "" : "justify-end"}`}
          >
            <span
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug ${
                msg.from === "ai"
                  ? "rounded-br-md bg-success/10 text-foreground"
                  : "rounded-bl-md bg-black/[0.05] text-foreground"
              }`}
            >
              {msg.text}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg border border-success/20 bg-success/10 px-3 py-2 text-[11px] text-success">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Lead handed back to inbound queue · context preserved
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_20px_50px_-20px_rgba(26,24,23,0.12)]">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-warning/15 text-warning">
            <BarChart3 className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">
              Lead intent · last 7 days
            </p>
            <p className="text-sm font-medium text-foreground">
              Sunrise Builders
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
          <TrendingUp className="h-3 w-3" /> +24%
        </span>
      </div>

      <div className="mt-5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-subtle">
          Top objections raised
        </p>
        <div className="space-y-2.5">
          {[
            { label: "Possession date", pct: 86 },
            { label: "Price negotiation", pct: 72 },
            { label: "Loan & RERA docs", pct: 58 },
            { label: "Floor / direction", pct: 41 },
          ].map((obj) => (
            <div key={obj.label}>
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-foreground">{obj.label}</span>
                <span className="font-mono text-muted-foreground">
                  {obj.pct}%
                </span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/[0.04]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${obj.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-[linear-gradient(90deg,#e87a5f,#d9583e)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border-subtle pt-4">
        <div>
          <p className="text-[9px] uppercase tracking-wider text-subtle">
            Site visits
          </p>
          <p className="mt-0.5 font-mono text-xl font-semibold text-foreground">
            89
          </p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-subtle">
            Avg score
          </p>
          <p className="mt-0.5 font-mono text-xl font-semibold text-foreground">
            74
          </p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-subtle">
            Team SLA
          </p>
          <p className="mt-0.5 inline-flex items-center gap-1 font-mono text-xl font-semibold text-success">
            <Users className="h-3.5 w-3.5" /> 96%
          </p>
        </div>
      </div>
    </div>
  );
}

export function LeadGenVisual() {
  const found = [
    {
      icon: Search,
      channel: "Google · “2BHK in Whitefield”",
      rank: "Rank #1",
      tint: "brand" as const,
    },
    {
      icon: MapPin,
      channel: "Google Maps · “near me”",
      rank: "Top 3",
      tint: "brand" as const,
    },
    {
      icon: Sparkles,
      channel: "ChatGPT · “best builders in…”",
      rank: "Cited",
      tint: "success" as const,
    },
    {
      icon: MonitorPlay,
      channel: "Instagram & YouTube · reels",
      rank: "Trending",
      tint: "success" as const,
    },
  ];

  return (
    <div className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_20px_50px_-20px_rgba(26,24,23,0.12)]">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand-soft">
            <Search className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">
              Discovery · this month
            </p>
            <p className="text-sm font-medium text-foreground">
              Sunrise Builders
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
          <TrendingUp className="h-3 w-3" /> +61%
        </span>
      </div>

      <div className="mt-5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-subtle">
          Where buyers find you
        </p>
        <div className="space-y-2.5">
          {found.map((row, i) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.channel}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="flex items-center justify-between rounded-lg border border-border-subtle bg-background/30 px-3 py-2.5"
              >
                <span className="flex items-center gap-2.5">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[12.5px] text-foreground">
                    {row.channel}
                  </span>
                </span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    row.tint === "success"
                      ? "bg-success/15 text-success"
                      : "bg-brand/15 text-brand-soft"
                  }`}
                >
                  {row.rank}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border-subtle pt-4">
        <div>
          <p className="text-[9px] uppercase tracking-wider text-subtle">
            Leads
          </p>
          <p className="mt-0.5 font-mono text-xl font-semibold text-foreground">
            1,240
          </p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-subtle">
            Top channel
          </p>
          <p className="mt-0.5 font-mono text-xl font-semibold text-success">
            Google
          </p>
        </div>
      </div>
    </div>
  );
}
