"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquareText,
  Layers,
  PhoneCall,
  Target,
  ArrowRightLeft,
  Megaphone,
  CalendarCheck,
  BellRing,
  BarChart3,
  Headset,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Beat = {
  layer: string;
  time: string;
  icon: LucideIcon;
  what: string;
  win: string;
  bubble: string;
  /** Re-engage is the outbound / tele-caller recovery band — styled apart. */
  recovery?: boolean;
};

const BEATS: Beat[] = [
  {
    layer: "Capture",
    time: "Sun · 11:04 PM",
    icon: MessageSquareText,
    what: "Sneha comments “price?” on your reel. Kriven auto-replies, DMs her, and she taps through to WhatsApp.",
    win: "A casual comment becomes a real, consented lead — automatically.",
    bubble: "“Price & availability?” 💬",
  },
  {
    layer: "Unify",
    time: "11:04 PM",
    icon: Layers,
    what: "Her chat lands in one inbox — tagged Instagram · reel, deduped against every other channel.",
    win: "No double-calls. You know the exact post that produced her.",
    bubble: "Source: Instagram · reel",
  },
  {
    layer: "Contact",
    time: "11:05 PM",
    icon: PhoneCall,
    what: "Kriven calls Sneha within 60 seconds — in her own language — while WhatsApp keeps chatting in parallel.",
    win: "Reached in the first minute, at 11 PM. The first to call wins the lead.",
    bubble: "नमस्ते · வணக்கம் · హాయ్ 📞",
  },
  {
    layer: "Qualify",
    time: "11:08 PM",
    icon: Target,
    what: "₹80L budget, 3BHK, ready to buy. Kriven answers her price & RERA questions correctly and marks her HOT.",
    win: "Only real leads reach your team — and never a wrong price.",
    bubble: "🔥 HOT · 3BHK · ₹80L · ready",
  },
  {
    layer: "Route",
    time: "11:09 PM",
    icon: ArrowRightLeft,
    what: "Kriven warm-transfers Sneha to your closer with a full summary — budget, intent, objections.",
    win: "Your salesperson gets a briefed, ready lead — not a cold name.",
    bubble: "→ Transferring to Ramesh (Sales)",
  },
  {
    layer: "Re-engage",
    time: "if she'd gone quiet",
    icon: Megaphone,
    what: "No pickup? Kriven's outbound campaign re-dials at the right hours and follows up on WhatsApp until she's back.",
    win: "You recover the 60–70% of leads that never convert on the first touch.",
    bubble: "Tele-caller campaign · retry 2 ✓",
    recovery: true,
  },
  {
    layer: "Book",
    time: "11:10 PM",
    icon: CalendarCheck,
    what: "Kriven books the site visit — Saturday 4 PM — and assigns a rep, right inside the chat.",
    win: "Booked on the very first contact, while interest is hottest.",
    bubble: "✅ Site visit · Sat 4:00 PM",
  },
  {
    layer: "Confirm",
    time: "Fri & Sat",
    icon: BellRing,
    what: "Reminders and a re-confirmation go out on WhatsApp, with one-tap reschedule.",
    win: "No-shows (40–60% industry-wide) drop — more visits actually happen.",
    bubble: "Reminder: tomorrow 4 PM 📍",
  },
  {
    layer: "Prove",
    time: "after the visit",
    icon: BarChart3,
    what: "Feedback is captured and the dashboard shows this visit came from an Instagram reel — at a known cost.",
    win: "You see exactly what every channel and post is worth, in site visits.",
    bubble: "Visit ✓ · Instagram · ₹420 / visit",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function LeadJourney() {
  const [active, setActive] = useState(0);
  const onActivate = useCallback((i: number) => setActive(i), []);

  return (
    <section className="relative border-t border-border-subtle py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-success/25 bg-success-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-success">
            <Headset className="h-3.5 w-3.5" />
            2 · We handle every lead
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Follow one lead, end to end.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Meet <span className="font-semibold text-foreground">Sneha</span> —
            scrolling Instagram in Hyderabad, 11 PM on a Sunday. Watch how a
            single tap becomes a booked site visit, while you sleep.
          </p>
        </div>

        {/* Two-column: sticky funnel rail + scrolling beats */}
        <div className="mt-14 lg:grid lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          {/* LEFT — sticky funnel diagram (desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <FunnelRail active={active} />
            </div>
          </div>

          {/* RIGHT — the story beats */}
          <div className="space-y-5 lg:space-y-8">
            {BEATS.map((beat, i) => (
              <BeatCard
                key={beat.layer}
                beat={beat}
                index={i}
                isActive={active === i}
                onActivate={onActivate}
              />
            ))}

            {/* Payoff */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative overflow-hidden rounded-2xl border border-brand/30 bg-card p-7 text-center shadow-[0_16px_44px_-16px_rgba(217,88,62,0.32)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e87a5f,#d9583e)]"
              />
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Site visit booked.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                From a midnight comment on a reel to a Saturday site visit — in
                her language, on the first contact, while you slept.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeatCard({
  beat,
  index,
  isActive,
  onActivate,
}: {
  beat: Beat;
  index: number;
  isActive: boolean;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when the card crosses the vertical centre of the viewport, so
  // exactly one beat is "active" and the funnel rail tracks the story.
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActivate(index);
  }, [inView, index, onActivate]);

  const Icon = beat.icon;
  const accent = beat.recovery ? "warning" : "brand";

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className={`rounded-2xl border bg-card p-6 transition-all duration-300 ${
        isActive
          ? "border-brand/40 shadow-[0_12px_36px_-14px_rgba(217,88,62,0.28)]"
          : "border-border-subtle"
      } ${beat.recovery ? "border-dashed" : ""}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
              accent === "warning"
                ? "bg-warning/15 text-warning"
                : "bg-brand-tint text-brand ring-1 ring-inset ring-brand/15"
            }`}
          >
            <Icon className="h-4.5 w-4.5" />
          </span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
            {beat.layer}
          </span>
          {beat.recovery && (
            <span className="rounded-full bg-warning/10 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-warning">
              Outbound
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] text-subtle">{beat.time}</span>
      </div>

      <p className="mt-4 text-[15px] font-medium leading-relaxed text-foreground">
        {beat.what}
      </p>

      {/* live bubble */}
      <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
        <span className="text-[12px] text-muted-foreground">{beat.bubble}</span>
      </div>

      <div className="mt-4 flex items-start gap-2 border-t border-border-subtle pt-3.5">
        <span className="mt-0.5 text-brand">↑</span>
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Your win — </span>
          {beat.win}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * The sticky funnel diagram. Each layer is a pill that narrows toward the
 * bottom (funnel shape) and lights up as its beat becomes active while the
 * reader scrolls the story.
 */
function FunnelRail({ active }: { active: number }) {
  // Widths taper from 100% to ~58% to draw the funnel silhouette.
  const widths = [100, 94, 88, 83, 78, 73, 69, 65, 61];

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        The pipeline · every lead
      </p>
      <div className="flex w-full flex-col items-center gap-1.5">
        {BEATS.map((beat, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <div
              key={beat.layer}
              style={{ width: `${widths[i]}%` }}
              className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-center transition-all duration-300 ${
                isActive
                  ? "border-brand bg-brand text-brand-foreground shadow-[0_8px_20px_-8px_rgba(217,88,62,0.5)]"
                  : isDone
                    ? "border-brand/30 bg-brand-tint text-brand"
                    : "border-border-subtle bg-card text-muted-foreground"
              }`}
            >
              <span className="text-[12px] font-semibold">{beat.layer}</span>
            </div>
          );
        })}
        {/* Site visit cap */}
        <div className="mt-1 flex w-[56%] items-center justify-center gap-1.5 rounded-lg border border-brand/40 bg-card px-3 py-2 text-brand">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span className="text-[12px] font-bold uppercase tracking-wide">
            Site visit
          </span>
        </div>
      </div>
    </div>
  );
}
