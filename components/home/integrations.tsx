"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Megaphone,
  Search,
  Camera,
  Play,
  Bot,
  MessageCircle,
  Phone,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1] as const;

// Channels Kriven captures leads from / works them on, each with its own
// brand colour + a fitting icon. (Swap the icon for a real logo SVG later.)
type Channel = { name: string; icon: LucideIcon; color: string };

const CHANNELS: Channel[] = [
  { name: "99acres", icon: Building2, color: "#f37021" },
  { name: "MagicBricks", icon: Building2, color: "#d3232a" },
  { name: "Housing.com", icon: Home, color: "#0aa699" },
  { name: "NoBroker", icon: Home, color: "#d0021b" },
  { name: "Meta Ads", icon: Megaphone, color: "#0866ff" },
  { name: "Google Ads", icon: Search, color: "#4285f4" },
  { name: "Instagram", icon: Camera, color: "#e1306c" },
  { name: "YouTube", icon: Play, color: "#ff0000" },
  { name: "Website chatbot", icon: Bot, color: "#d9583e" },
  { name: "WhatsApp", icon: MessageCircle, color: "#1faf52" },
  { name: "Inbound calls", icon: Phone, color: "#7c3aed" },
];

function Tile({ name, icon: Icon, color }: Channel) {
  return (
    <div className="mr-4 flex shrink-0 items-center gap-2.5 rounded-xl border border-border-subtle bg-card px-4 py-2.5 shadow-[0_1px_2px_0_rgba(26,24,23,0.04)]">
      <span
        aria-hidden="true"
        style={{ backgroundColor: `${color}1f`, color }}
        className="inline-flex h-7 w-7 items-center justify-center rounded-lg"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-foreground/85">
        {name}
      </span>
    </div>
  );
}

export function Integrations() {
  return (
    <section className="relative border-t border-border-subtle py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand"
          >
            <Waypoints className="h-3.5 w-3.5" />
            Every channel, one engine
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.05, duration: 0.6, ease }}
            className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="text-foreground">
              Wherever your buyers come from,
            </span>{" "}
            <span className="text-muted-foreground">
              Kriven AI is already there.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Portals, ads, social, your website, WhatsApp and calls — every lead
            is pulled in, de-duplicated, and worked in one place.
          </motion.p>
        </div>

        {/* Marquee — fades at both edges, pauses on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
            {[...CHANNELS, ...CHANNELS].map((c, i) => (
              <Tile key={`${c.name}-${i}`} {...c} />
            ))}
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-subtle">
          New sources added all the time — one dashboard, one source of truth.
        </p>
      </div>
    </section>
  );
}
