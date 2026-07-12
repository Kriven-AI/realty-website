import type { Metadata } from "next";
import { Hero } from "@/components/solutions/lead-generation/hero";
import { TheReframe } from "@/components/solutions/lead-generation/the-reframe";
import { Capabilities } from "@/components/solutions/lead-generation/capabilities";
import { BuiltForRealEstate } from "@/components/solutions/lead-generation/built-for-real-estate";
import { Faq } from "@/components/solutions/lead-generation/faq";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/lead-generation" },
  title: "Real Estate Lead Generation Platform",
  description:
    "A real estate lead generation platform that brings buyers in from every channel — search, ads and social — then works every lead until it books a site visit.",
  openGraph: {
    title: "Real Estate Lead Generation Platform — Kriven AI",
    description:
      "Generate leads across Google, Maps, AI search, ads and social — then convert them with voice and WhatsApp until the site visit is booked. Not just more leads: more site visits.",
    url: "https://kriven.ai/solutions/lead-generation",
  },
};

export default function LeadGenerationPage() {
  return (
    <>
      <Hero />
      <TheReframe />
      <Capabilities />
      <BuiltForRealEstate />
      <Faq />
      <FinalCTA />
    </>
  );
}
