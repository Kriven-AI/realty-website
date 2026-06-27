"use client";

import { motion } from "framer-motion";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageCircle,
  BarChart3,
  Megaphone,
  Database,
  Check,
  UserPlus,
  LayoutGrid,
  Radar,
  Search,
  Sparkles,
  Camera,
  MonitorPlay,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BRAND_ICONS } from "@/components/icons/brand-icons";

type Bullet = string | { text: string; highlight?: boolean };

type AvailableModule = {
  id: string;
  index: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  bullets: Bullet[];
};

type ComingModule = {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  chips: string[];
};

const AVAILABLE: AvailableModule[] = [
  {
    id: "inbound",
    index: "01",
    name: "Inbound Voice AI",
    icon: PhoneIncoming,
    tagline: "Picks up every call. Books site visits.",
    bullets: [
      "Telugu, Hindi, Tamil, Kannada & more. Switches mid-call.",
      "Qualifies and books site visits",
      { text: "Highlights your strengths against competitors.", highlight: true },
      "Warm transfers to a human on request",
      "Missed-call recovery",
      "Updates your CRM with lead details"
    ],
  },
  {
    id: "outbound",
    index: "02",
    name: "Targeted Outbound Campaigns",
    icon: PhoneOutgoing,
    tagline: "Calls your list. Smart retries.",
    bullets: [
      "Profession-tuned dial windows",
      "Concurrent-call control per campaign",
      { text: "Dials 2,000+ leads in a single day", highlight: true },
      "Smart call retries for no-pickups",
      { text: "WhatsApp follow-up after failed retries", highlight: true },
      "Campaign analytics + auditability"
    ],
  },
  {
    id: "whatsapp",
    index: "03",
    name: "WhatsApp Follow-ups",
    icon: MessageCircle,
    tagline: "Two-way chat. Always on.",
    bullets: [
      "Site-visit confirmations with brochures",
      "No-show recovery",
      "Nurtures warm leads so none go cold",
      "Lead can message or call on WhatsApp",
      "Follow-ups post site visits"
    ],
  },
  {
    id: "analytics",
    index: "04",
    name: "Analytics & Intent",
    icon: BarChart3,
    tagline: "Know your leads. Track your team.",
    bullets: [
      "Lead profile · interests · objections",
      "Competitor mentions ranked + tracked",
      { text: "Highly customizable lead qualification metrics", highlight: true },
      "Sales-team performance on every transferred call",
      "Drill from chart → lead → transcript",
      "Track every lead’s journey from capture to site visit.",
    ],
  },
];

const LEAD_GEN = {
  name: "Lead Generation",
  tagline: "Be everywhere buyers look.",
  blurb:
    "We run your marketing across every channel that matters in India — and pull buyers straight into the engine.",
  bullets: [
    "Rank on Google — SEO, Maps & Business Profile",
    { text: "Show up in ChatGPT, Gemini & Google AI Overviews", highlight: true },
    "Meta & Google ad campaigns, fully managed",
    "Scroll-stopping reels from your own site footage",
    "Website chatbot that qualifies on the spot",
    { text: "Comments → DM → WhatsApp, automatically", highlight: true },
  ] as Bullet[],
  channels: [
    { label: "Google", icon: Search },
    { label: "AI search", icon: Sparkles },
    { label: "Meta & Google ads", icon: Megaphone },
    { label: "Instagram", icon: Camera },
    { label: "YouTube", icon: MonitorPlay },
    { label: "Chatbot", icon: Bot },
  ],
};

const COMING_SOON: ComingModule[] = [
  {
    id: "crm",
    name: "CRM Integrations",
    icon: Database,
    tagline: "Plug into the CRMs you already use.",
    description:
      "Two-way sync with the leading real estate CRMs — leads in, status out. No spreadsheet exports, no missing context.",
    chips: ["Sell.Do", "Salesforce", "LeadSquared", "Zoho", "HubSpot"],
  },
];

export function PlatformSuite() {
  return (
    <section
      id="modules"
      className="relative border-t border-border-subtle py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <LayoutGrid className="h-3.5 w-3.5" />
            The platform
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Built only for real estate.
            <br className="hidden sm:block" />{" "}
            <span className="text-muted-foreground">Every step in one place.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium">5 modules live today</span>{" "}
            — from bringing leads in to booking the visit. 1 more in development.
          </p>
        </div>

        {/* Bring leads in — featured Lead Generation */}
        <div className="mt-14">
          <SectionLabel label="Bring leads in" status="available" count={1} />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-4 rounded-2xl border border-border-subtle bg-card p-6 transition-all hover:border-brand/30 hover:shadow-[0_8px_30px_-8px_rgba(217,88,62,0.18)] lg:p-8"
          >
            <div className="lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
              {/* identity */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                    <Radar className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success-tint px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-success">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
                    Live now
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {LEAD_GEN.name}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-brand">
                  {LEAD_GEN.tagline}
                </p>
                <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                  {LEAD_GEN.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {LEAD_GEN.channels.map((c) => {
                    const Icon = c.icon;
                    return (
                      <span
                        key={c.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-background/60 py-1 pl-2 pr-2.5 text-[11px] font-medium text-muted-foreground"
                      >
                        <Icon className="h-3 w-3 text-brand" />
                        {c.label}
                      </span>
                    );
                  })}
                </div>
              </div>
              {/* bullets */}
              <ul className="mt-6 space-y-2 border-t border-border-subtle pt-5 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {LEAD_GEN.bullets.map((b) => {
                  const isObj = typeof b === "object";
                  const text = isObj ? b.text : b;
                  const isHighlight = isObj && b.highlight;
                  return (
                    <li
                      key={text}
                      className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/80" />
                      <span
                        style={
                          isHighlight
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
            </div>
          </motion.div>
        </div>

        {/* Handle every lead — 4 equal tiles */}
        <div className="mt-12">
          <SectionLabel label="Handle every lead" status="available" count={AVAILABLE.length} />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AVAILABLE.map((module, i) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.55,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card p-6 transition-all hover:border-brand/30 hover:shadow-[0_8px_30px_-8px_rgba(217,88,62,0.18)]"
                >
                  {/* Top: icon + index */}
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                      {module.index}
                    </span>
                  </div>

                  {/* Title + tagline */}
                  <div className="mt-5">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {module.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-brand">
                      {module.tagline}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2 border-t border-border-subtle pt-4">
                    {module.bullets.map((bullet) => {
                      const isObj = typeof bullet === "object";
                      const text = isObj ? bullet.text : bullet;
                      const isHighlight = isObj && bullet.highlight;
                      return (
                        <li
                          key={text}
                          className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/80" />
                          <span style={isHighlight ? { color: "var(--brand)", textShadow: "0 0 gray" } : undefined}>
                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Coming soon row — 2 wide tiles */}
        <div className="mt-12">
          <SectionLabel
            label="In development"
            status="soon"
            count={COMING_SOON.length}
          />
          <div className="mt-4 mx-auto max-w-2xl">
            {COMING_SOON.map((module, i) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.55,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="relative overflow-hidden rounded-2xl border border-border-subtle bg-card p-6"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warning/50 to-transparent"
                  />
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10 text-warning ring-1 ring-inset ring-warning/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="soon">Coming soon</Badge>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {module.name}
                    </h3>
                    <p className="mt-1 text-[13.5px] font-medium text-warning">
                      {module.tagline}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                    {module.chips.map((chip) => {
                      const BrandIcon = BRAND_ICONS[chip];
                      return (
                        <span
                          key={chip}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-background/60 py-1 pl-1.5 pr-2.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {BrandIcon ? (
                            <BrandIcon className="h-3.5 w-auto" />
                          ) : (
                            <UserPlus className="h-3 w-3 text-brand" />
                          )}
                          {chip}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({
  label,
  status,
  count,
}: {
  label: string;
  status: "available" | "soon";
  count: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
          status === "available"
            ? "bg-success-tint text-success"
            : "bg-warning-tint text-warning"
        }`}
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            status === "available" ? "bg-success" : "bg-warning"
          }`}
        />
        {label}
      </span>
      <span className="font-mono text-[11px] text-subtle">
        {count} {count === 1 ? "module" : "modules"}
      </span>
      <span className="h-px flex-1 bg-border-subtle" />
    </div>
  );
}
