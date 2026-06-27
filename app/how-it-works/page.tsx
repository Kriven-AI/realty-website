import type { Metadata } from "next";
import { LeadEngineHero } from "@/components/how-it-works/lead-engine-hero";
import { AttractChannels } from "@/components/how-it-works/attract-channels";
import { LeadJourney } from "@/components/how-it-works/lead-journey";
import { ComplianceLoop } from "@/components/how-it-works/compliance-loop";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/how-it-works" },
  title: "How it works — The Lead Engine",
  description:
    "Kriven AI runs the whole journey — from the first ad-click to a booked site visit, across chatbot, WhatsApp and voice AI, in every Indian language.",
};

export default function HowItWorksPage() {
  return (
    <>
      <LeadEngineHero />
      <AttractChannels />
      <LeadJourney />
      <ComplianceLoop />
      <FinalCTA />
    </>
  );
}
