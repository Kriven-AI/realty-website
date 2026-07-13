"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ShieldQuestion,
  PieChart,
  Radar,
  Swords,
  TrendingUp,
  TrendingDown,
  MessageSquareText,
  Briefcase,
  ArrowLeftRight,
  Timer,
  type LucideIcon,
} from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1] as const;

const KPIS = [
  { value: "342", label: "Site visits booked", delta: "+34%" },
  { value: "5.8%", label: "Lead → visit rate", delta: "+1.2pt" },
  { value: "2m 34s", label: "Avg call time", delta: "-9%", down: true },
  { value: "19%", label: "Hot-intent leads", delta: "+3pt" },
];

// Site visits booked per month — the "growth over time" story
const TREND = {
  values: [24, 31, 28, 39, 44, 41, 55, 63, 74],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
};

const INTENT = [
  { label: "Hot", pct: 19, color: "var(--brand)" },
  { label: "Warm", pct: 44, color: "var(--brand-soft)" },
  { label: "Cold", pct: 37, color: "#d8d2c7" },
];

const OBJECTIONS = [
  { label: "Price too high", pct: 34 },
  { label: "Possession timeline", pct: 23 },
  { label: "Home loan / eligibility", pct: 18 },
  { label: "Location & connectivity", pct: 14 },
  { label: "Competing project", pct: 11 },
];

const ASKS = [
  { label: "2 vs 3 BHK?", pct: 28 },
  { label: "Possession date?", pct: 22 },
  { label: "Price per sq ft?", pct: 19 },
  { label: "Home-loan help?", pct: 16 },
  { label: "Amenities?", pct: 15 },
];

const CHANNELS = [
  { label: "Meta Ads", pct: 88 },
  { label: "Google Ads", pct: 71 },
  { label: "Instagram", pct: 54 },
  { label: "99acres", pct: 39 },
  { label: "Referrals", pct: 31 },
];

const PROFESSION = [
  { label: "Salaried · IT / Corporate", pct: 38 },
  { label: "Business owner", pct: 24 },
  { label: "Govt / PSU", pct: 16 },
  { label: "NRI", pct: 12 },
  { label: "Doctor / Professional", pct: 10 },
];

const TRANSFER_REASONS = [
  { label: "Wants to negotiate price", pct: 34 },
  { label: "Legal / paperwork query", pct: 22 },
  { label: "Asked for a human", pct: 19 },
  { label: "High-value / NRI", pct: 15 },
  { label: "Loan structuring", pct: 10 },
];

// Illustrative — fictional project names
const COMPETITORS = [
  { name: "Lakeside Heights", mentions: 84, up: true },
  { name: "Green Vista Enclave", mentions: 61, up: true },
  { name: "Palm County", mentions: 47, up: false },
  { name: "Metro Greens", mentions: 32, up: true },
];

const REPS = [
  { name: "Priya S.", time: "18s", missed: 1, pct: 22, tone: "var(--success)" },
  { name: "Rahul M.", time: "32s", missed: 2, pct: 44, tone: "var(--brand-soft)" },
  { name: "Anita K.", time: "47s", missed: 3, pct: 64, tone: "var(--brand-soft)" },
  { name: "Vikram R.", time: "1m 12s", missed: 6, pct: 100, tone: "var(--warning)" },
];

function BarRow({
  label,
  pct,
  index,
}: {
  label: string;
  pct: number;
  index: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-[46%] shrink-0 truncate text-[12px] text-muted-foreground">
        {label}
      </span>
      <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1 + index * 0.06, duration: 0.85, ease }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-soft to-brand"
        />
      </div>
      <span className="w-8 shrink-0 text-right text-[12px] font-semibold tabular-nums text-foreground">
        {pct}%
      </span>
    </div>
  );
}

function Widget({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-background/60 p-5 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <h3 className="text-[13px] font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function TrendChart() {
  const W = 640;
  const H = 230;
  const padL = 14;
  const padR = 14;
  const padT = 18;
  const padB = 34;
  const chartMax = 80;
  const { values, labels } = TREND;
  const n = values.length;
  const step = (W - padL - padR) / (n - 1);
  const baseline = H - padB;
  const pts = values.map((v, i) => ({
    x: padL + i * step,
    y: padT + (1 - v / chartMax) * (H - padT - padB),
  }));
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const area = `${line} L ${pts[n - 1].x} ${baseline} L ${pts[0].x} ${baseline} Z`;
  const last = pts[n - 1];
  const grid = [0.25, 0.5, 0.75].map((f) => padT + f * (H - padT - padB));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-1 w-full">
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {grid.map((y) => (
        <line
          key={y}
          x1={padL}
          x2={W - padR}
          y1={y}
          y2={y}
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />
      ))}

      <motion.path
        d={area}
        fill="url(#trendFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="var(--brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease }}
      />

      {pts.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === n - 1 ? 5 : 3}
          fill={i === n - 1 ? "var(--brand)" : "var(--card)"}
          stroke="var(--brand)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
        />
      ))}

      {/* last value bubble */}
      <motion.g
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 1.3, duration: 0.4 }}
      >
        <rect
          x={last.x - 42}
          y={last.y - 30}
          width="36"
          height="20"
          rx="6"
          fill="var(--brand)"
        />
        <text
          x={last.x - 24}
          y={last.y - 16}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--brand-foreground)"
        >
          74
        </text>
      </motion.g>

      {labels.map((l, i) => (
        <text
          key={l}
          x={pts[i].x}
          y={H - 12}
          textAnchor="middle"
          fontSize="12"
          fill="var(--subtle)"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

export function InsightsDashboard() {
  const conic = `conic-gradient(var(--brand) 0 ${INTENT[0].pct}%, var(--brand-soft) ${INTENT[0].pct}% ${
    INTENT[0].pct + INTENT[1].pct
  }%, #d8d2c7 ${INTENT[0].pct + INTENT[1].pct}% 100%)`;

  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            A look inside
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Not another chart of the past.</span>{" "}
            <span className="text-muted-foreground">
              A live read on your demand.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Every call and WhatsApp thread becomes a picture you can act on — how
            sales are trending, who&apos;s buying, what stops them, which channels
            book, who you lose to, and how fast your team responds. Here&apos;s
            what that looks like.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 overflow-hidden rounded-3xl border border-border-subtle bg-card shadow-[0_24px_70px_-24px_rgba(26,24,23,0.22)]"
        >
          {/* Chrome */}
          <div className="flex items-center gap-3 border-b border-border-subtle bg-background/60 px-5 py-3.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              Kriven AI Insights
            </span>
            <span className="ml-auto inline-flex items-center gap-2 text-[11px] text-subtle">
              <span className="hidden rounded-full bg-muted px-2 py-0.5 font-medium sm:inline">
                Last 9 months
              </span>
              <span className="rounded-full bg-brand-tint px-2 py-0.5 font-semibold text-brand">
                Sample view
              </span>
            </span>
          </div>

          <div className="p-5 lg:p-6">
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {KPIS.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease }}
                  className="rounded-2xl border border-border-subtle bg-background/60 p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-[28px]">
                      {k.value}
                    </p>
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-success-tint px-1.5 py-0.5 text-[10px] font-semibold text-success">
                      {k.down ? (
                        <TrendingDown className="h-3 w-3" />
                      ) : (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {k.delta}
                    </span>
                  </div>
                  <p className="mt-1 text-[11.5px] leading-snug text-subtle">
                    {k.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Widgets */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Trend — wide */}
              <div className="rounded-2xl border border-border-subtle bg-background/60 p-5 sm:col-span-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-[13px] font-semibold tracking-tight text-foreground">
                      Site visits booked
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-success-tint px-2 py-0.5 text-[11px] font-semibold text-success">
                    <TrendingUp className="h-3 w-3" /> +34% this quarter
                  </span>
                </div>
                <TrendChart />
              </div>

              {/* Intent donut */}
              <Widget icon={PieChart} title="Hot vs warm vs cold">
                <div className="flex items-center gap-5">
                  <div
                    className="relative h-28 w-28 shrink-0 rounded-full"
                    style={{ background: conic }}
                  >
                    <div className="absolute inset-[10px] flex flex-col items-center justify-center rounded-full bg-card">
                      <span className="text-lg font-semibold tracking-tight text-foreground">
                        1,247
                      </span>
                      <span className="text-[9.5px] uppercase tracking-wider text-subtle">
                        leads
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {INTENT.map((seg) => (
                      <li key={seg.label} className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: seg.color }}
                        />
                        <span className="text-[12px] font-medium text-foreground">
                          {seg.label}
                        </span>
                        <span className="text-[12px] tabular-nums text-subtle">
                          {seg.pct}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Widget>

              <Widget icon={ShieldQuestion} title="Why buyers said no">
                <div className="space-y-3">
                  {OBJECTIONS.map((o, i) => (
                    <BarRow key={o.label} {...o} index={i} />
                  ))}
                </div>
              </Widget>

              <Widget icon={MessageSquareText} title="What buyers ask most">
                <div className="space-y-3">
                  {ASKS.map((a, i) => (
                    <BarRow key={a.label} {...a} index={i} />
                  ))}
                </div>
              </Widget>

              <Widget icon={Radar} title="Which channels actually book">
                <div className="space-y-3">
                  {CHANNELS.map((c, i) => (
                    <BarRow key={c.label} {...c} index={i} />
                  ))}
                </div>
              </Widget>

              <Widget icon={Briefcase} title="Who's buying — by profession">
                <div className="space-y-3">
                  {PROFESSION.map((p, i) => (
                    <BarRow key={p.label} {...p} index={i} />
                  ))}
                </div>
              </Widget>

              <Widget icon={Swords} title="Who buyers weigh you against">
                <ul className="space-y-2">
                  {COMPETITORS.map((c) => (
                    <li
                      key={c.name}
                      className="flex items-center gap-3 rounded-xl border border-border-subtle bg-card px-3.5 py-2.5"
                    >
                      <span className="text-[13px] font-medium text-foreground">
                        {c.name}
                      </span>
                      <span className="ml-auto flex items-center gap-1.5">
                        <span className="text-[12px] font-semibold tabular-nums text-foreground">
                          {c.mentions}
                        </span>
                        {c.up ? (
                          <TrendingUp className="h-3.5 w-3.5 text-brand" />
                        ) : (
                          <TrendingDown className="h-3.5 w-3.5 text-success" />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Widget>

              <Widget icon={ArrowLeftRight} title="Why leads get transferred">
                <div className="space-y-3">
                  {TRANSFER_REASONS.map((t, i) => (
                    <BarRow key={t.label} {...t} index={i} />
                  ))}
                </div>
              </Widget>

              {/* Sales team response — full width */}
              <div className="rounded-2xl border border-border-subtle bg-background/60 p-5 sm:col-span-2 lg:col-span-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                    <Timer className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="text-[13px] font-semibold tracking-tight text-foreground">
                    Sales-team response on transfers
                  </h3>
                </div>

                <div className="mt-4 grid gap-6 lg:grid-cols-[220px_1fr]">
                  <div className="flex flex-col justify-center gap-3 rounded-xl border border-border-subtle bg-card p-4">
                    <div>
                      <p className="text-3xl font-semibold tracking-tight text-foreground">
                        38s
                      </p>
                      <p className="mt-1 text-[12px] text-subtle">
                        Avg pickup after a warm handoff
                      </p>
                      <p className="mt-1.5 text-[11.5px] font-medium text-success">
                        96% answered within a minute
                      </p>
                    </div>
                    <div className="border-t border-border-subtle pt-3">
                      <p className="text-xl font-semibold tracking-tight text-foreground">
                        12{" "}
                        <span className="text-[12px] font-normal text-subtle">
                          missed calls
                        </span>
                      </p>
                      <p className="mt-0.5 text-[11.5px] text-subtle">
                        Flagged and re-queued for follow-up
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-wider text-subtle">
                      <span className="w-20 shrink-0 sm:w-24">Salesperson</span>
                      <span className="flex-1">Avg time to pick up</span>
                      <span className="w-12 shrink-0 text-right">Time</span>
                      <span className="w-14 shrink-0 text-right">Missed</span>
                    </div>
                    {REPS.map((r, i) => (
                      <div key={r.name} className="flex items-center gap-3">
                        <span className="w-20 shrink-0 truncate text-[12px] text-muted-foreground sm:w-24">
                          {r.name}
                        </span>
                        <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${r.pct}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                              delay: 0.1 + i * 0.08,
                              duration: 0.85,
                              ease,
                            }}
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{ background: r.tone }}
                          />
                        </div>
                        <span className="w-12 shrink-0 text-right text-[12px] font-semibold tabular-nums text-foreground">
                          {r.time}
                        </span>
                        <span
                          className={`w-14 shrink-0 text-right text-[12px] font-semibold tabular-nums ${
                            r.missed >= 4 ? "text-warning" : "text-subtle"
                          }`}
                        >
                          {r.missed}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-4 text-center text-[11px] text-subtle">
          Illustrative dashboard with sample data — your real numbers come from
          your own calls and chats.
        </p>
      </div>
    </section>
  );
}
