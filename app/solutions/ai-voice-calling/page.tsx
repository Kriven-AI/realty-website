import type { Metadata } from "next";
import { Hero } from "@/components/solutions/ai-voice-calling/hero";
import { TheCost } from "@/components/solutions/ai-voice-calling/the-cost";
import { Capabilities } from "@/components/solutions/ai-voice-calling/capabilities";
import { BuiltForRealEstate } from "@/components/solutions/ai-voice-calling/built-for-real-estate";
import { Faq } from "@/components/solutions/ai-voice-calling/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/ai-voice-calling" },
  title: "Voice AI Calling for Real Estate",
  description:
    "Kriven AI's voice agent calls every real estate lead in under 60 seconds — inbound and outbound, in any Indian language — qualifying buyers and booking site visits.",
  openGraph: {
    title: "Voice AI Calling for Real Estate — Kriven AI",
    description:
      "Call every cold lead in under 60 seconds and work your outbound lists 24/7, in any Indian language. Qualify buyers and book more site visits.",
    url: "https://kriven.ai/solutions/ai-voice-calling",
    images: ["/og?title=" + encodeURIComponent("Voice AI Calling for Real Estate") + "&category=Solutions"],
  },
};

export default function AIVoiceCallingPage() {
  return (
    <>
      <Breadcrumbs schemaOnly items={[{ name: "Home", item: "https://kriven.ai" }, { name: "Product", item: "https://kriven.ai/product" }, { name: "AI Voice Calling", item: "https://kriven.ai/solutions/ai-voice-calling" }]} />
      <Hero />
      <TheCost />
      <Capabilities />
      <BuiltForRealEstate />
      <Faq />
      <FinalCTA />
    </>
  );
}
