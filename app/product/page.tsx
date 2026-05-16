import type { Metadata } from "next";
import { ProductHero } from "@/components/product/product-hero";
import { ModuleSection } from "@/components/product/module-section";
import {
  InboundVisual,
  OutboundVisual,
  WhatsAppVisual,
  AnalyticsVisual,
} from "@/components/product/module-visuals";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Product — Inbound, Outbound, WhatsApp, Analytics",
  description:
    "Deep dive into Kriven AI's four modules: Inbound Voice AI, Outbound Campaigns, WhatsApp Follow-ups, and Analytics — all built only for real estate builders.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />

      <ModuleSection
        id="inbound"
        eyebrow="Module 01 · Inbound"
        title="Inbound Voice AI."
        tagline="Picks up every call. Books site visits."
        description="When a lead calls, Kriven answers in their language, qualifies them with a real conversation — not a script — and books the site visit. It handles objections about price, possession, loans, and competing projects with builder-specific context, and escalates to a human salesperson the moment the lead asks."
        features={[
          "Picks up 24/7 — including weekends, late evenings, peak hours",
          "Qualifies with real conversation, not a scripted IVR",
          "Books site visits directly into your calendar",
          "Multi-language: Telugu, Hindi, English — and the codemix",
          "Transfers to a human salesperson on request, with full context",
          "Continues the conversation on WhatsApp after the call ends",
          "Skill-injectable — you train it on your own playbook",
        ]}
        replaces="Receptionists, call centers, missed-call apps, and after-hours services."
        visual={<InboundVisual />}
      />

      <ModuleSection
        id="outbound"
        eyebrow="Module 02 · Outbound"
        title="Outbound Campaigns."
        tagline="Calls your lead list. Smart retries."
        description="Upload a CSV or pull from your CRM. Kriven dials your leads at the times they're actually free — different windows for IT professionals, business owners, salaried staff, retirees — pitches the project, handles questions, and books site visits. If they don't pick up, it retries on a schedule that respects their profession, then falls back to WhatsApp."
        features={[
          "Smart retry windows by lead profession & time-of-day",
          "Concurrent calls capped per builder & per campaign",
          "WhatsApp fallback when calls don't connect",
          "Campaign-level analytics: picked, booked, converted",
          "Caller-ID rotation and trunk management built in",
          "Pause, resume, or A/B test pitches mid-campaign",
        ]}
        replaces="Telecaller teams, dialer software, and chase-the-list spreadsheets."
        visual={<OutboundVisual />}
        reverse
      />

      <ModuleSection
        id="whatsapp"
        eyebrow="Module 03 · WhatsApp"
        title="WhatsApp Follow-ups."
        tagline="Same thread. Same context."
        description="Every call continues on WhatsApp — the same lead, the same intent, the same context. Kriven sends brochures, handles two-way replies, re-engages no-shows, and warms up cold leads with relevant nudges. The handoff between voice and chat is seamless because they're the same agent, on the same brain."
        features={[
          "Two-way conversational replies on WhatsApp Business",
          "Auto-sends brochures, floor plans, RERA docs after the call",
          "No-show recovery for missed site visits",
          "Warm-lead nurture sequences tuned to project & price band",
          "Hands lead back to inbound queue when they want to talk",
          "Compliant via AISensy / Meta Business APIs",
        ]}
        replaces="Manual ops teams, broadcast tools, and forgotten leads in inboxes."
        visual={<WhatsAppVisual />}
      />

      <ModuleSection
        id="analytics"
        eyebrow="Module 04 · Analytics"
        title="Analytics & Intent."
        tagline="Lead intent. Objections. Team performance."
        description="Every call, every WhatsApp thread, every campaign feeds one unified view. See exactly what leads are asking — possession, price, loans, competition — and what's blocking conversion. Track your salespeople on transferred calls. Understand which projects, channels, and pitches actually move buyers to site visit."
        features={[
          "Per-lead intent scoring and conversation summary",
          "Top objections, surfaced and ranked, project by project",
          "Sales team SLA tracking on transferred calls",
          "Campaign performance breakdowns by profession & time",
          "Recording-grade auditability — every call, every transcript",
          "Exports & API access for your data team",
        ]}
        replaces={`Generic analytics dashboards and "how did the calls go?" Slack threads.`}
        visual={<AnalyticsVisual />}
        reverse
      />

      <FinalCTA />
    </>
  );
}
