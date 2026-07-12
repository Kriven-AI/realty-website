import type { Metadata } from "next";
import { Article } from "@/components/blog/one-engine-vs-five/article";
import { POST, FAQS } from "@/components/blog/one-engine-vs-five/data";
import { FinalCTA } from "@/components/home/final-cta";

const URL = `https://kriven.ai/blog/${POST.slug}`;

export const metadata: Metadata = {
  alternates: { canonical: `/blog/${POST.slug}` },
  title: POST.title,
  description: POST.description,
  openGraph: {
    title: POST.title,
    description: POST.description,
    url: URL,
    type: "article",
    publishedTime: POST.datePublished,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: POST.title,
  description: POST.description,
  datePublished: POST.datePublished,
  dateModified: POST.dateModified,
  author: { "@type": "Organization", name: "Kriven AI", url: "https://kriven.ai" },
  publisher: {
    "@type": "Organization",
    name: "Kriven AI",
    logo: { "@type": "ImageObject", url: "https://kriven.ai/icon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function OneEngineVsFivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Article />
      <FinalCTA />
    </>
  );
}
