"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Phone,
  TrendingUp,
  MessageCircle,
  Sparkles,
} from "lucide-react";

type ChipKind = "brand" | "success";

type ActivityChip = {
  id: string;
  icon: React.ReactNode;
  kind: ChipKind;
  title: string;
  sub: string;
};

type PositionedChip = ActivityChip & { x: string; delay: number };

/**
 * Pool of "live activity" signals that bubble up above the dashboard.
 * The mix of bookings, NRI enquiries, calls, brochures and metrics is
 * what creates the "many builders, many customers" impression a visitor
 * should feel when landing.
 */
const CHIPS: ActivityChip[] = [
  {
    id: "visit",
    icon: <Check className="h-3.5 w-3.5" />,
    kind: "brand",
    title: "Visit booked",
    sub: "Whitefield · Sat 4pm",
  },
  {
    id: "nri",
    icon: <Phone className="h-3.5 w-3.5" />,
    kind: "success",
    title: "NRI customer · investor",
    sub: "Dubai · 3BHK premium",
  },
  {
    id: "visits",
    icon: <TrendingUp className="h-3.5 w-3.5" />,
    kind: "brand",
    title: "+47 site visits",
    sub: "Last 7 days",
  },
  {
    id: "brochure",
    icon: <MessageCircle className="h-3.5 w-3.5" />,
    kind: "success",
    title: "Brochure sent",
    sub: "WhatsApp · just now",
  },
  {
    id: "bookings",
    icon: <Sparkles className="h-3.5 w-3.5" />,
    kind: "brand",
    title: "+11 bookings",
    sub: "Today",
  },
];

const DURATION = 8; // seconds per chip cycle
const RISE = 150; // pixels each chip rises before fading

/**
 * Build a fresh layout per refresh — random, but provably collision-free:
 *
 *   1. X position — chips placed in N slots within MIN_X..MAX_X (the
 *      inner safe zone so the rounded-full pills are never clipped).
 *      Within each slot, x jitters by a small random offset. Which chip
 *      data lands in which slot is shuffled per refresh.
 *
 *   2. Phase (delay) — chip phases are *discrete* and *evenly spaced*
 *      (0, 1, 2, 3, 4 × cycle/N seconds). The order of phases across
 *      x slots is randomized — but only among patterns where adjacent
 *      x slots differ by ≥ 2 phase steps. Two phase steps = ~60px of
 *      vertical separation between adjacent-x chips, well above the
 *      chip's ~46px height, so they can never overlap visually even
 *      though their widths exceed the per-slot horizontal stride.
 */
const MIN_X = 15;
const MAX_X = 85;

// Permutations of phase indices [0..4] where every adjacent pair differs
// by ≥ 2. Picked at random each refresh so the visual rhythm changes,
// while guaranteeing no two horizontally-adjacent chips overlap.
const PHASE_PATTERNS: number[][] = [
  [0, 2, 4, 1, 3],
  [3, 0, 2, 4, 1],
  [1, 4, 2, 0, 3],
  [3, 1, 4, 2, 0],
  [2, 4, 1, 3, 0],
  [0, 3, 1, 4, 2],
];

function buildLayout(chips: ActivityChip[]): PositionedChip[] {
  const count = chips.length;
  const range = MAX_X - MIN_X;
  const slotWidth = range / count;
  const slotPadding = slotWidth * 0.15;

  const shuffledChips = [...chips].sort(() => Math.random() - 0.5);
  const pattern =
    PHASE_PATTERNS[Math.floor(Math.random() * PHASE_PATTERNS.length)];
  const phaseStep = DURATION / count;

  return shuffledChips.map((chip, i) => {
    const slotStart = MIN_X + i * slotWidth + slotPadding;
    const slotEnd = MIN_X + (i + 1) * slotWidth - slotPadding;
    const x = slotStart + Math.random() * (slotEnd - slotStart);
    const delay = -pattern[i] * phaseStep;
    return { ...chip, x: `${x.toFixed(1)}%`, delay };
  });
}

export function HeroFloatingChips() {
  const reduceMotion = useReducedMotion();
  const [layout, setLayout] = useState<PositionedChip[]>([]);

  // Layout is computed only on the client to avoid SSR hydration mismatch
  // (Math.random() would diverge between server and client).
  useEffect(() => {
    setLayout(buildLayout(CHIPS));
  }, []);

  if (reduceMotion || layout.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-40 z-20 hidden h-40 overflow-hidden md:block lg:-top-44 lg:h-44"
    >
      {layout.map((chip) => {
        const delay = chip.delay;
        const isBrand = chip.kind === "brand";
        return (
          <motion.div
            key={chip.id}
            className="absolute bottom-0"
            style={{ left: chip.x, x: "-50%" }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -RISE, opacity: [0, 1, 1, 0] }}
            transition={{
              y: {
                duration: DURATION,
                repeat: Infinity,
                ease: "linear",
                delay,
              },
              opacity: {
                duration: DURATION,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.18, 0.8, 1],
                delay,
              },
            }}
          >
            <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border-subtle bg-card/95 px-3.5 py-2 shadow-[0_16px_40px_-10px_rgba(26,24,23,0.22)] backdrop-blur-xl">
              <span
                className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  isBrand
                    ? "bg-brand/15 text-brand"
                    : "bg-success/15 text-success"
                }`}
              >
                {chip.icon}
              </span>
              <div className="leading-tight">
                <p className="text-[11.5px] font-semibold text-foreground">
                  {chip.title}
                </p>
                <p className="text-[9.5px] text-muted-foreground">{chip.sub}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
