"use client";

import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Camera,
  MonitorPlay,
  Building2,
  QrCode,
  Users,
  Tv,
  Megaphone,
  Bot,
  PhoneCall,
  MessageCircle,
  ArrowDown,
  Send,
  type LucideIcon,
} from "lucide-react";

type Channel = {
  icon: LucideIcon;
  label: string;
  sub: string;
  /** Which door this channel mostly flows into. */
  door: "web" | "whatsapp" | "dm";
};

const CHANNELS: Channel[] = [
  { icon: Search, label: "Google Search & Maps", sub: "High-intent + ‘near me’", door: "web" },
  { icon: Sparkles, label: "AI search", sub: "ChatGPT · Gemini · Perplexity", door: "web" },
  { icon: Megaphone, label: "Meta & Google ads", sub: "Click-to-WhatsApp", door: "whatsapp" },
  { icon: Camera, label: "Instagram", sub: "Posts · reels · DMs", door: "dm" },
  { icon: MonitorPlay, label: "YouTube", sub: "Videos · comments", door: "whatsapp" },
  { icon: Building2, label: "Property portals", sub: "99acres · Magicbricks", door: "whatsapp" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function AttractChannels() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-24 lg:py-28">
      <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <Megaphone className="h-3.5 w-3.5" />
            1 · We bring leads in
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            It starts wherever your lead is.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We run your marketing across every channel that matters in India —
            and no matter where a lead discovers you, they flow into one of
            four channels where Kriven AI captures and qualifies them.
          </p>
        </div>

        {/* Channel grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={ch.label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex items-center gap-3 rounded-xl border border-border-subtle bg-card p-3.5 transition-colors hover:border-brand/30"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[13px] font-semibold text-foreground">
                    {ch.label}
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {ch.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Converge cue */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-xs font-medium uppercase tracking-wider text-subtle">
            Every channel flows into
          </p>
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-2"
          >
            <ArrowDown className="h-5 w-5 text-brand" />
          </motion.div>
          <p className="mt-2 text-sm font-semibold text-foreground">
            Channels that qualify
          </p>
        </div>

        {/* The four channels that qualify */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DoorCard
            icon={MessageCircle}
            tone="success"
            title="WhatsApp"
            line="Ads (click-to-WhatsApp) and YouTube route into WhatsApp, where Kriven AI greets and qualifies in their language."
          />
          <DoorCard
            icon={Send}
            tone="success"
            title="Instagram DM"
            line="Comment on an organic post and Kriven auto-DMs you — then qualifies you right there in the thread, no app-switching."
          />
          <DoorCard
            icon={PhoneCall}
            tone="brand"
            title="Voice AI · Call"
            line="Kriven AI calls every new lead within 60 seconds — and picks up the moment they call you back."
          />
          <DoorCard
            icon={Bot}
            tone="brand"
            title="Website chatbot"
            line="Visitors from search & AI-search chat with the bot on your site — it qualifies them on the spot."
          />
        </div>
      </div>
    </section>
  );
}

function DoorCard({
  icon: Icon,
  tone,
  title,
  line,
}: {
  icon: LucideIcon;
  tone: "brand" | "success";
  title: string;
  line: string;
}) {
  const toneClasses =
    tone === "brand"
      ? "bg-brand/15 text-brand"
      : "bg-success/15 text-success";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      className="rounded-2xl border border-border-subtle bg-card p-6 text-center shadow-[0_8px_30px_-12px_rgba(26,24,23,0.12)]"
    >
      <span
        className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl ${toneClasses}`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
        {line}
      </p>
    </motion.div>
  );
}
