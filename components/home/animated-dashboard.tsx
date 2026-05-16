"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageCircle,
  Activity,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const TRANSCRIPT: {
  speaker: "ai" | "lead";
  text: string;
  lang: string;
}[] = [
  {
    speaker: "ai",
    text: "नमस्ते Vikram ji, Sunrise Builders से Riya. आपने Whitefield 2BHK के लिए enquire किया था — 2 minute हैं आपके पास?",
    lang: "HI + EN",
  },
  {
    speaker: "lead",
    text: "Yes Riya, please go ahead.",
    lang: "EN",
  },
  {
    speaker: "ai",
    text: "Perfect sir. We just launched a new 2BHK at Sunrise Towers — 1180 sqft, east-facing, all-inclusive at ₹72L. It's just 8 minutes from EPIP, and 47 families have already booked in the last month alone.",
    lang: "EN",
  },
  {
    speaker: "lead",
    text: "Interesting! Amenities ఏంటి? Clubhouse 24/7 ఉంటుందా?",
    lang: "TE + EN",
  },
  {
    speaker: "ai",
    text: "Clubhouse 24/7 open ఉంటుంది sir — gym, pool, work pods, kids' area అన్నీ ఉన్నాయి. Roof-top garden కూడా ఉందండి. ఈ Saturday 4pm ki site visit block చేయమంటారా?",
    lang: "TE + EN",
  },
  {
    speaker: "lead",
    text: "Yes, Saturday 4pm works for me.",
    lang: "EN",
  },
  {
    speaker: "ai",
    text: "Done sir, site visit book చేశాను. Brochure, map, sales person details అన్నీ WhatsApp లో ఇప్పుడే పంపిస్తున్నాను.",
    lang: "TE + EN",
  },
];

const LANGUAGES = ["हिंदी", "EN", "తెలుగు"];

// Outbound campaign fallback: AI tried to call Suresh, missed after 2 retries,
// WhatsApp recovery kicks in automatically.
const WHATSAPP_MESSAGES: { from: "ai" | "lead"; text: string }[] = [
  {
    from: "ai",
    text: "नमस्ते Suresh ji, Sunrise Builders से Riya. आज 2 बार call किया, miss हो गया. Premium 4BHK options share कर रही हूँ.",
  },
  { from: "ai", text: "📎 Sunrise Premium · 4BHK · Brochure.pdf" },
  { from: "lead", text: "Saturday morning free hai?" },
  {
    from: "ai",
    text: "बिल्कुल — Saturday 11am block कर दिया. Sales rep का contact और address अभी भेज रही हूँ.",
  },
  { from: "lead", text: "👍 Confirm" },
];

export function AnimatedDashboard() {
  const [transcriptIdx, setTranscriptIdx] = useState(2);
  const [callsDialing, setCallsDialing] = useState(247);
  const [chartTick, setChartTick] = useState(0);
  const [waMessages, setWaMessages] = useState(1);

  // Story arc: complete conversation cycles, with rest between loops.
  // transcriptIdx 2 → TRANSCRIPT.length, then 2 ticks of rest, then reset to 2.
  useEffect(() => {
    const REST_TICKS = 3;
    const transcriptTimer = setInterval(() => {
      setTranscriptIdx((i) => {
        if (i >= TRANSCRIPT.length + REST_TICKS) return 2;
        return i + 1;
      });
    }, 1600);

    const callsTimer = setInterval(() => {
      setCallsDialing((c) => c + Math.floor(Math.random() * 3));
    }, 1500);

    const chartTimer = setInterval(() => {
      setChartTick((t) => t + 1);
    }, 1800);

    return () => {
      clearInterval(transcriptTimer);
      clearInterval(callsTimer);
      clearInterval(chartTimer);
    };
  }, []);

  // Outbound campaign WhatsApp fallback — cycles independently of the inbound
  // call on the left. Tells a parallel story: missed call → retry → WA recovery.
  useEffect(() => {
    const waTimer = setInterval(() => {
      setWaMessages((m) =>
        m >= WHATSAPP_MESSAGES.length ? 1 : m + 1,
      );
    }, 1600);
    return () => clearInterval(waTimer);
  }, []);

  // Booked moment — true after Riya confirms (line 7).
  const isBooked = transcriptIdx >= 7;

  return (
    <div className="relative w-full">
      {/* Outer frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-card/80 shadow-[0_24px_60px_-24px_rgba(26,24,23,0.16),0_8px_24px_-8px_rgba(26,24,23,0.06)] backdrop-blur-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border-subtle bg-black/[0.02] px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-3 hidden items-center gap-2 sm:flex">
              <span className="text-[11px] font-medium text-muted-foreground">
                kriven.ai · Sunrise Builders
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              Live · 6 calls active
            </span>
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="grid gap-px bg-border-subtle md:grid-cols-[1.45fr_1fr]">
          {/* Inbound call panel */}
          <div className="flex flex-col bg-card p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand/15 text-brand-soft">
                  <PhoneIncoming className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">
                    Riya · Inbound Live
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    +91 98•• ••42 · Whitefield
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-xs text-muted-foreground">
                  02:34
                </span>
                <div className="flex items-center gap-1">
                  {LANGUAGES.map((lang, i) => {
                    const isActive =
                      (transcriptIdx > 0 &&
                        TRANSCRIPT[Math.min(transcriptIdx - 1, TRANSCRIPT.length - 1)]
                          ?.lang.includes(lang === "हिंदी" ? "HI" : lang === "EN" ? "EN" : "TE")) ||
                      false;
                    return (
                      <span
                        key={i}
                        className={`rounded px-1.5 py-0.5 text-[9px] font-medium transition-colors ${
                          isActive
                            ? "bg-brand text-white"
                            : "bg-black/[0.04] text-subtle"
                        }`}
                      >
                        {lang}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-2.5">
              {TRANSCRIPT.map((line, i) => {
                const isVisible = i < transcriptIdx;
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 8,
                    }}
                    transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                    className={`flex gap-2 ${
                      line.speaker === "ai" ? "" : "flex-row-reverse"
                    }`}
                  >
                    <span
                      className={`mt-1 inline-flex h-5 shrink-0 items-center rounded px-1.5 text-[9px] font-semibold uppercase tracking-wider ${
                        line.speaker === "ai"
                          ? "bg-brand/15 text-brand-soft"
                          : "bg-black/[0.06] text-muted-foreground"
                      }`}
                    >
                      {line.speaker === "ai" ? "Riya" : "Lead"}
                    </span>
                    <p
                      className={`max-w-[78%] rounded-lg px-3 py-2 text-[13px] leading-relaxed ${
                        line.speaker === "ai"
                          ? "bg-black/[0.04] text-foreground"
                          : "bg-brand/10 text-foreground border border-brand/15"
                      }`}
                    >
                      {line.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border-subtle pt-4">
              <Stat label="Intent" value="Hot" tint="brand" />
              <Stat label="Lead Score" value="87" tint="default" />
              <Stat
                label="Site Visit"
                value="Sat 4pm"
                tint="success"
                icon={<CheckCircle2 className="h-3 w-3" />}
              />
            </div>
          </div>

          {/* Side panels: Outbound, WhatsApp, Analytics */}
          <div className="flex h-full flex-col gap-px">
            {/* Outbound */}
            <div className="flex flex-1 flex-col bg-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/[0.05] text-foreground/80">
                    <PhoneOutgoing className="h-3 w-3" />
                  </span>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">
                    Outbound Campaign
                  </p>
                </div>
                <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  Whitefield · Phase 2
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <motion.span
                  key={callsDialing}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-2xl font-semibold tabular-nums text-foreground"
                >
                  {callsDialing}
                </motion.span>
                <span className="text-xs text-muted-foreground">
                  / 850 dialing
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.05]">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#e87a5f,#d9583e)]"
                  initial={{ width: "28%" }}
                  animate={{ width: `${Math.min((callsDialing / 850) * 100, 92)}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                <MiniMetric label="Picked" value="62%" />
                <MiniMetric label="Booked" value="11" tint="success" />
                <MiniMetric label="Retries" value="183" />
              </div>
            </div>

            {/* WhatsApp — outbound campaign fallback (different lead, parallel story) */}
            <div className="flex flex-1 flex-col bg-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-success/15 text-success">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                    WhatsApp · Retry fallback
                  </p>
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">
                  +91 98•• ••81
                </span>
              </div>
              <div className="flex-1 space-y-1.5">
                {WHATSAPP_MESSAGES.map((msg, i) => {
                  const isVisible = i < waMessages;
                  return (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        opacity: isVisible ? 1 : 0.2,
                      }}
                      transition={{ duration: 0.35 }}
                      className={`flex ${msg.from === "lead" ? "" : "justify-end"}`}
                    >
                      <span
                        className={`max-w-[88%] rounded-lg px-3 py-1.5 text-xs leading-snug ${
                          msg.from === "ai"
                            ? "bg-success/10 text-foreground"
                            : "border border-black/[0.06] bg-card text-foreground"
                        }`}
                      >
                        {msg.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Analytics */}
            <div className="flex flex-1 flex-col bg-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-warning/15 text-warning">
                    <Activity className="h-3 w-3" />
                  </span>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-subtle">
                    Site Visits · 7d
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-success">
                  <Sparkles className="h-2.5 w-2.5" /> +24%
                </span>
              </div>
              <div className="flex flex-1 items-end gap-1.5 min-h-[60px]">
                {[42, 58, 51, 67, 73, 68, 89].map((value, i) => {
                  const isActive = i === (chartTick + 6) % 7;
                  const heightPct = (value / 89) * 100;
                  return (
                    <div
                      key={i}
                      className="relative flex-1 overflow-hidden rounded-sm bg-black/[0.08]"
                      style={{ height: `${heightPct}%` }}
                    >
                      <motion.div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-sm bg-[linear-gradient(180deg,#e87a5f,#d9583e)]"
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-subtle">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border-subtle pt-2.5 text-[10px]">
                <div>
                  <p className="text-subtle">Booked · 7d</p>
                  <p className="font-mono text-xs font-semibold text-foreground">
                    448
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-subtle">Conv. rate</p>
                  <p className="font-mono text-xs font-semibold text-success">
                    38%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking confirmation — appears the moment Riya confirms */}
      <motion.div
        initial={false}
        animate={{
          opacity: isBooked ? 1 : 0,
          y: isBooked ? 0 : 16,
          scale: isBooked ? 1 : 0.95,
        }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute -left-3 -bottom-4 z-10 hidden rounded-xl border border-success/30 bg-card/95 px-4 py-3 shadow-[0_16px_40px_-10px_rgba(10,139,98,0.25),0_4px_12px_-2px_rgba(26,24,23,0.1)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
      >
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
          {isBooked && (
            <span className="absolute inset-0 animate-ping rounded-full bg-success/30" />
          )}
          <CheckCircle2 className="relative h-4 w-4" />
        </span>
        <div className="flex-1">
          <p className="text-[12px] font-semibold text-foreground">
            Site visit booked
          </p>
          <p className="text-[10.5px] text-muted-foreground">
            Sat 16 Nov · 4:00 pm · 2BHK Whitefield · Brochure sent
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({
  label,
  value,
  tint = "default",
  icon,
}: {
  label: string;
  value: string;
  tint?: "default" | "brand" | "success";
  icon?: React.ReactNode;
}) {
  const tintClass =
    tint === "brand"
      ? "text-brand-soft"
      : tint === "success"
        ? "text-success"
        : "text-foreground";
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-wider text-subtle">
        {label}
      </p>
      <p
        className={`mt-0.5 flex items-center gap-1 text-sm font-semibold ${tintClass}`}
      >
        {icon}
        {value}
      </p>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  tint = "default",
}: {
  label: string;
  value: string;
  tint?: "default" | "success";
}) {
  return (
    <div className="rounded-md bg-black/[0.03] px-2 py-1.5">
      <p className="text-[9px] uppercase tracking-wider text-subtle">{label}</p>
      <p
        className={`mt-0.5 text-xs font-semibold ${
          tint === "success" ? "text-success" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
