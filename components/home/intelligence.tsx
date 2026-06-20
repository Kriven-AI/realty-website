"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Target,
  AlertCircle,
  Swords,
  UserCheck,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";

const CALLER_PROFILES = [
  { label: "IT professionals", pct: 38, color: "#d9583e" },
  { label: "Business owners", pct: 24, color: "#0a8b62" },
  { label: "Salaried (non-IT)", pct: 18, color: "#b45309" },
  { label: "NRIs", pct: 12, color: "#1f6feb" },
  { label: "Retired / others", pct: 8, color: "#8e8a82" },
];

const TOP_INTERESTS = [
  { label: "2BHK · Whitefield", count: 487, pct: 92 },
  { label: "3BHK · Sarjapur", count: 312, pct: 78 },
  { label: "Premium amenities", count: 268, pct: 64 },
  { label: "EPIP corridor proximity", count: 241, pct: 58 },
  { label: "RERA + possession ≤ 18mo", count: 198, pct: 47 },
];

const TOP_OBJECTIONS = [
  { label: "Possession timeline", pct: 86, delta: "+12% vs last month" },
  { label: "Price vs Prestige Lakeside", pct: 72, delta: "+8%" },
  { label: "Loan tie-ups & EMI", pct: 58, delta: "−4%" },
  { label: "Floor / east-facing", pct: 41, delta: "stable" },
  { label: "Maintenance charges", pct: 34, delta: "+3%" },
];

const COMPETITORS = [
  { name: "Prestige Lakeside Habitat", mentions: 124, win: 41 },
  { name: "Sobha Dream Acres", mentions: 87, win: 56 },
  { name: "Brigade Cornerstone", mentions: 62, win: 38 },
  { name: "Godrej Air Bangalore", mentions: 48, win: 64 },
];

const SALES_TEAM = [
  {
    name: "Priya R.",
    role: "Sr. Sales",
    transferred: 62,
    answered: "98%",
    converted: 41,
    sla: 12,
    status: "ok",
  },
  {
    name: "Arjun M.",
    role: "Sales",
    transferred: 54,
    answered: "94%",
    converted: 32,
    sla: 18,
    status: "ok",
  },
  {
    name: "Neha S.",
    role: "Sr. Sales",
    transferred: 71,
    answered: "78%",
    converted: 28,
    sla: 42,
    status: "alert",
  },
  {
    name: "Rohan T.",
    role: "Sales",
    transferred: 33,
    answered: "100%",
    converted: 24,
    sla: 8,
    status: "great",
  },
];

const TREND_DATA = [42, 58, 51, 67, 73, 68, 89, 94, 102, 118, 112, 134];
const TREND_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function Intelligence() {
  const maxTrend = Math.max(...TREND_DATA);

  return (
    <section
      id="intelligence"
      className="relative border-t border-border-subtle py-24 lg:py-32"
    >
      <div className="absolute inset-0 paper-grain opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <BarChart3 className="h-3.5 w-3.5" />
            Intelligence · not just analytics
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              Every call. Every objection. Every competitor.
            </span>{" "}
            <span className="text-muted-foreground">
              All in one brain.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Other dashboards show you call counts. Kriven shows you{" "}
            <span className="text-foreground">why</span> leads are buying —
            and <span className="text-foreground">why they aren&apos;t</span>.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-6">
          {/* 1. Site visits trend — wide */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.04)] lg:col-span-4"
          >
            <PanelHeader
              icon={<TrendingUp className="h-4 w-4" />}
              eyebrow="Site Visits"
              title="Booked site visits · last 12 months"
              meta={
                <span className="inline-flex items-center gap-1 rounded-full bg-success-tint px-2.5 py-0.5 text-[11px] font-semibold text-success">
                  <ArrowUpRight className="h-3 w-3" /> 3.2× YoY
                </span>
              }
            />
            <div className="mt-6 flex h-44 items-end gap-1.5">
              {TREND_DATA.map((v, i) => {
                const h = (v / maxTrend) * 100;
                const isLast = i === TREND_DATA.length - 1;
                return (
                  <div
                    key={i}
                    className="group relative flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.6 }}
                      className={`w-full shrink-0 rounded-sm ${
                        isLast
                          ? "bg-[linear-gradient(180deg,#e87a5f,#d9583e)]"
                          : "bg-black/[0.08]"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-subtle">
              {TREND_LABELS.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4 border-t border-border-subtle pt-4">
              <Kpi label="Site visits · Dec" value="134" />
              <Kpi label="Visit → booking" value="38%" tint="success" />
              <Kpi label="Avg lead score" value="74 / 100" />
            </div>
          </motion.div>

          {/* 2. Caller profile donut */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.04)] lg:col-span-2"
          >
            <PanelHeader
              icon={<Users className="h-4 w-4" />}
              eyebrow="Caller Profile"
              title="Who's actually calling"
            />
            <Donut data={CALLER_PROFILES} />
            <div className="mt-5 space-y-2">
              {CALLER_PROFILES.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between text-[12px]"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: p.color }}
                    />
                    <span className="text-foreground">{p.label}</span>
                  </span>
                  <span className="font-mono text-muted-foreground">
                    {p.pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Top interests */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.04)] lg:col-span-3"
          >
            <PanelHeader
              icon={<Target className="h-4 w-4" />}
              eyebrow="Top Interests"
              title="What leads are actually asking for"
            />
            <div className="mt-5 space-y-3">
              {TOP_INTERESTS.map((item, i) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between text-[13px]">
                    <span className="text-foreground">{item.label}</span>
                    <span className="font-mono text-subtle">
                      {item.count} leads
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.7 }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,#e87a5f,#d9583e)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Top objections */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.04)] lg:col-span-3"
          >
            <PanelHeader
              icon={<AlertCircle className="h-4 w-4" />}
              eyebrow="Top Objections"
              title="What's blocking conversion"
            />
            <div className="mt-5 space-y-3">
              {TOP_OBJECTIONS.map((obj) => (
                <div
                  key={obj.label}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border-subtle bg-background/40 px-3 py-2.5"
                >
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-[13px] font-medium text-foreground">
                      {obj.label}
                    </p>
                    <p className="font-mono text-[10px] text-subtle">
                      {obj.delta}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-foreground tabular-nums">
                    {obj.pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Competitors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.04)] lg:col-span-3"
          >
            <PanelHeader
              icon={<Swords className="h-4 w-4" />}
              eyebrow="Competitors"
              title="Mentioned on calls · win rate"
            />
            <table className="mt-5 w-full text-[13px]">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-wider text-subtle">
                  <th className="pb-2 font-medium">Competitor</th>
                  <th className="pb-2 text-right font-medium">Mentions</th>
                  <th className="pb-2 text-right font-medium">Win rate</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c) => (
                  <tr
                    key={c.name}
                    className="border-t border-border-subtle"
                  >
                    <td className="py-2.5 text-foreground">{c.name}</td>
                    <td className="py-2.5 text-right font-mono text-muted-foreground tabular-nums">
                      {c.mentions}
                    </td>
                    <td className="py-2.5 text-right">
                      <span
                        className={`font-mono font-semibold tabular-nums ${
                          c.win >= 55
                            ? "text-success"
                            : c.win >= 40
                              ? "text-warning"
                              : "text-foreground"
                        }`}
                      >
                        {c.win}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* 6. Sales team performance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-card p-6 shadow-[0_1px_2px_0_rgba(26,24,23,0.04),0_4px_14px_-2px_rgba(26,24,23,0.04)] lg:col-span-3"
          >
            <PanelHeader
              icon={<UserCheck className="h-4 w-4" />}
              eyebrow="Sales Team · transferred calls"
              title="How your humans pick up where AI hands off"
            />
            <div className="mt-5 space-y-2">
              {SALES_TEAM.map((s) => (
                <div
                  key={s.name}
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 rounded-lg border border-border-subtle bg-background/30 px-3 py-2.5"
                >
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold ${
                      s.status === "great"
                        ? "bg-success-tint text-success"
                        : s.status === "alert"
                          ? "bg-warning-tint text-warning"
                          : "bg-black/[0.06] text-foreground"
                    }`}
                  >
                    {s.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-foreground">
                      {s.name}
                    </p>
                    <p className="text-[10px] text-subtle">
                      {s.role} · {s.transferred} transferred · {s.converted}{" "}
                      converted
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-subtle">
                      Pickup
                    </p>
                    <p className="font-mono text-[12px] font-semibold text-foreground">
                      {s.answered}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-subtle">SLA</p>
                    <p
                      className={`font-mono text-[12px] font-semibold ${
                        s.sla <= 15
                          ? "text-success"
                          : s.sla <= 30
                            ? "text-foreground"
                            : "text-warning"
                      }`}
                    >
                      {s.sla}s
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-subtle">
              Built-in alerts when SLA breaches — so warm leads never go
              cold waiting for a callback.
            </p>
          </motion.div>
        </div>

        {/* Tagline strip */}
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            "Every call recorded, transcribed, scored — automatically",
            "Drill from chart to lead to transcript in two clicks",
            "Export to your data team or CRM — APIs, webhooks, CSV",
          ].map((line) => (
            <div
              key={line}
              className="flex items-start gap-2 rounded-lg border border-border-subtle bg-card/60 p-3"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <p className="text-[13px] text-muted-foreground">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelHeader({
  icon,
  eyebrow,
  title,
  meta,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  meta?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-tint text-brand">
          {icon}
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">
            {eyebrow}
          </p>
          <p className="mt-0.5 text-sm font-semibold tracking-tight text-foreground">
            {title}
          </p>
        </div>
      </div>
      {meta}
    </div>
  );
}

function Kpi({
  label,
  value,
  tint = "default",
}: {
  label: string;
  value: string;
  tint?: "default" | "success" | "brand";
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">
        {label}
      </p>
      <p
        className={`mt-0.5 font-mono text-lg font-semibold tabular-nums ${
          tint === "success"
            ? "text-success"
            : tint === "brand"
              ? "text-brand"
              : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Donut({ data }: { data: typeof CALLER_PROFILES }) {
  const size = 140;
  const radius = 56;
  const stroke = 18;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div className="relative mt-5 flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((segment, i) => {
          const length = (segment.pct / 100) * circumference;
          const offset = cumulative;
          cumulative += length;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={stroke}
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      <div className="absolute text-center">
        <p className="font-mono text-[9px] uppercase tracking-wider text-subtle">
          Last 30d
        </p>
        <p className="mt-0.5 font-mono text-xl font-semibold text-foreground tabular-nums">
          2,847
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">callers</p>
      </div>
    </div>
  );
}
