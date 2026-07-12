import type { Metadata } from "next";
import { Hero } from "@/components/solutions/whatsapp-automation/hero";
import { TheGap } from "@/components/solutions/whatsapp-automation/the-gap";
import { Capabilities } from "@/components/solutions/whatsapp-automation/capabilities";
import { BuiltForRealEstate } from "@/components/solutions/whatsapp-automation/built-for-real-estate";
import { Faq } from "@/components/solutions/whatsapp-automation/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/whatsapp-automation" },
  title: "WhatsApp Automation & Follow-up for Real Estate",
  description:
    "Kriven AI runs your real estate WhatsApp follow-up on autopilot — instant two-way replies, brochures, no-show recovery and nurture — so no lead goes cold.",
  openGraph: {
    title: "WhatsApp Automation & Follow-up for Real Estate — Kriven AI",
    description:
      "Instant replies, brochures, no-show recovery and persistent nurture on WhatsApp — a real two-way conversation that follows up every lead until the site visit is booked.",
    url: "https://kriven.ai/solutions/whatsapp-automation",
    images: ["/og?title=" + encodeURIComponent("WhatsApp Automation & Follow-up for Real Estate") + "&category=Solutions"],
  },
};

export default function WhatsAppAutomationPage() {
  return (
    <>
      <Breadcrumbs schemaOnly items={[{ name: "Home", item: "https://kriven.ai" }, { name: "Product", item: "https://kriven.ai/product" }, { name: "WhatsApp Automation", item: "https://kriven.ai/solutions/whatsapp-automation" }]} />
      <Hero />
      <TheGap />
      <Capabilities />
      <BuiltForRealEstate />
      <Faq />
      <FinalCTA />
    </>
  );
}
