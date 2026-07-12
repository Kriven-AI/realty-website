import type { Metadata } from "next";
import { BlogList } from "@/components/blog/blog-list";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog — Real Estate Sales & Lead Playbooks",
  description:
    "Practical guides, templates and data for Indian real estate builders — on lead follow-up, WhatsApp, voice AI, speed-to-lead and booking more site visits.",
};

export default function BlogIndexPage() {
  return (
    <>
      <BlogList />
      <FinalCTA />
    </>
  );
}
