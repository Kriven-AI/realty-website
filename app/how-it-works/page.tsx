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
    "From the first ad-tap to a booked site visit, Kriven AI runs the whole journey — bringing buyers in across every channel, then handling every one across chatbot, WhatsApp and voice AI. One engine, every Indian language, 24/7.",
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
