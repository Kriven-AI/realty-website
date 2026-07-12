import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: { absolute: "About Kriven AI" },
  description:
    "Kriven AI is the AI sales engine for Indian real estate builders — built to capture, call, message and follow up with every lead so more become site visits.",
  openGraph: {
    title: "About Kriven AI",
    description:
      "Why we're building the AI sales engine for Indian real estate — and what makes it different.",
    url: "https://kriven.ai/about",
    images: ["/og?title=" + encodeURIComponent("About Kriven AI") + "&category=Company"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        schemaOnly
        items={[
          { name: "Home", item: "https://kriven.ai" },
          { name: "About", item: "https://kriven.ai/about" },
        ]}
      />
      <AboutContent />
      <FinalCTA />
    </>
  );
}
