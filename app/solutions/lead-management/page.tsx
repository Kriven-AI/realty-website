import type { Metadata } from "next";
import { Hero } from "@/components/solutions/lead-management/hero";
import { TheGraveyard } from "@/components/solutions/lead-management/the-graveyard";
import { Capabilities } from "@/components/solutions/lead-management/capabilities";
import { BuiltForRealEstate } from "@/components/solutions/lead-management/built-for-real-estate";
import { Faq } from "@/components/solutions/lead-management/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/lead-management" },
  title: "Real Estate Lead Management Software",
  description:
    "Real estate lead management that works your leads — not just stores them. Kriven AI captures every channel, tracks every lead, and follows up until they book.",
  openGraph: {
    title: "Real Estate Lead Management Software — Kriven AI",
    description:
      "Every channel in one place, every lead tracked and scored, and worked automatically with calls and WhatsApp until the site visit is booked. A sales engine, not a filing cabinet.",
    url: "https://kriven.ai/solutions/lead-management",
    images: ["/og?title=" + encodeURIComponent("Real Estate Lead Management Software") + "&category=Solutions"],
  },
};

export default function LeadManagementPage() {
  return (
    <>
      <Breadcrumbs schemaOnly items={[{ name: "Home", item: "https://kriven.ai" }, { name: "Product", item: "https://kriven.ai/product" }, { name: "Lead Management", item: "https://kriven.ai/solutions/lead-management" }]} />
      <Hero />
      <TheGraveyard />
      <Capabilities />
      <BuiltForRealEstate />
      <Faq />
      <FinalCTA />
    </>
  );
}
