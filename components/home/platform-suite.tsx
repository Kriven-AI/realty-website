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
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BRAND_ICONS } from "@/components/icons/brand-icons";

type AvailableModule = {
  id: string;
  index: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  bullets: string[];
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
      "Hindi, Telugu, English codemix — switches mid-call",
      "Qualifies in real conversation, not IVR",
      "Books visits directly to your calendar",
      "Transfers to a human on request",
    ],
  },
  {
    id: "outbound",
    index: "02",
    name: "Outbound Campaigns",
    icon: PhoneOutgoing,
    tagline: "Calls your list. Smart retries.",
    bullets: [
      "Profession-tuned dial windows",
      "Concurrent-call control per campaign",
      "WhatsApp fallback on no-pickup",
      "Campaign analytics + auditability",
    ],
  },
  {
    id: "whatsapp",
    index: "03",
    name: "WhatsApp Follow-ups",
    icon: MessageCircle,
    tagline: "Same thread. Same context.",
    bullets: [
      "Two-way replies, no-show recovery",
      "Auto-sends brochures, maps, RERA docs",
      "Warm-lead nurture by project + price",
      "Calls the lead back when they want to talk",
    ],
  },
  {
    id: "analytics",
    index: "04",
    name: "Analytics & Intent",
    icon: BarChart3,
    tagline: "Lead intent. Objections. Team SLA.",
    bullets: [
      "Per-lead intent + objection scoring",
      "Competitor mentions ranked + tracked",
      "Sales-team SLA on transferred calls",
      "Drill from chart → lead → transcript",
    ],
  },
];

const COMING_SOON: ComingModule[] = [
  {
    id: "marketing",
    name: "Marketing Orchestrator",
    icon: Megaphone,
    tagline: "AI agents that run your marketing.",
    description:
      "Generate ad creative from your source materials, post across channels, capture leads, and hand off to the voice AI for instant pickup — all under one platform.",
    chips: ["Meta", "Google", "Reddit", "ChatGPT ads", "Lead capture"],
  },
  {
    id: "crm",
    name: "CRM Integrations",
    icon: Database,
    tagline: "Plug into the CRMs builders already use.",
    description:
      "Two-way sync with the leading real estate CRMs — leads in, status out. No spreadsheet exports, no missing context.",
    chips: ["Salesforce", "Zoho", "HubSpot", "LeadSquared", "Bitrix24"],
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
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            The platform
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Built only for real estate.
            <br className="hidden sm:block" />{" "}
            <span className="text-muted-foreground">Every step in one place.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium">4 modules shipping today.</span>{" "}
            2 more in development. Turn on what you need, extend as you grow.
          </p>
        </div>

        {/* Available row — 4 equal tiles */}
        <div className="mt-14">
          <SectionLabel label="Available today" status="available" count={AVAILABLE.length} />
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
                    {module.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/80" />
                        <span>{bullet}</span>
                      </li>
                    ))}
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
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
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
                            <BrandIcon className="h-3.5 w-3.5" />
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
