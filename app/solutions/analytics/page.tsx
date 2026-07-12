import type { Metadata } from "next";
import { Hero } from "@/components/solutions/analytics/hero";
import { TheBlindSpot } from "@/components/solutions/analytics/the-blind-spot";
import { Capabilities } from "@/components/solutions/analytics/capabilities";
import { BuiltForRealEstate } from "@/components/solutions/analytics/built-for-real-estate";
import { Faq } from "@/components/solutions/analytics/faq";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/analytics" },
  title: "Real Estate Sales Analytics & Lead Intelligence",
  description:
    "Kriven AI turns every call and WhatsApp chat into insight — who's calling, what buyers want, why they don't convert, and which channels book — so you grow on data.",
  openGraph: {
    title: "Real Estate Sales Analytics & Lead Intelligence — Kriven AI",
    description:
      "Understand who your buyers really are, what they want, and what's stopping them — from real calls and chats — so you make decisions that grow your sales.",
    url: "https://kriven.ai/solutions/analytics",
  },
};

export default function AnalyticsPage() {
  return (
    <>
      <Hero />
      <TheBlindSpot />
      <Capabilities />
      <BuiltForRealEstate />
      <Faq />
      <FinalCTA />
    </>
  );
}
