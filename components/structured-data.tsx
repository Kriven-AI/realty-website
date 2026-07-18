/**
 * Site-wide JSON-LD structured data. Invisible to humans, but it lets Google
 * and AI engines (ChatGPT, Gemini, Perplexity, AI Overviews) understand
 * exactly what Kriven AI is — a clear "entity" they can confidently cite.
 *
 * Organization + WebSite + SoftwareApplication. The SoftwareApplication has no
 * `offers`/`aggregateRating` yet (no public pricing or reviews), so Google
 * won't render a product rich result — but the entity data still helps AI
 * understand this is a product. Add `offers`/`aggregateRating` once available.
 * Add `sameAs` (LinkedIn / Crunchbase / G2 URLs) to ORGANIZATION once those
 * profiles exist — it links this site to those sources for AI cross-reference.
 */

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kriven AI",
  url: "https://kriven.ai",
  logo: "https://kriven.ai/icon.png",
  image: "https://kriven.ai/icon.png",
  description:
    "Kriven AI is the all-in-one AI sales engine for Indian real estate — lead generation, inbound voice AI, outbound campaigns, WhatsApp follow-ups and analytics, in one platform.",
  slogan: "Every step of the sale. One platform.",
  email: "hello@kriven.ai",
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Real estate sales",
    "AI voice calling",
    "Lead generation for real estate",
    "WhatsApp automation",
    "Lead management",
    "Real estate CRM",
    "Sales analytics",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@kriven.ai",
    contactType: "sales",
    areaServed: "IN",
  },
  // sameAs: ["https://www.linkedin.com/company/...", "https://www.crunchbase.com/organization/...", "https://www.g2.com/products/..."],
};

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kriven AI",
  url: "https://kriven.ai",
  publisher: { "@type": "Organization", name: "Kriven AI", url: "https://kriven.ai" },
};

const SOFTWARE_APPLICATION = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kriven AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://kriven.ai",
  description:
    "AI sales engine for Indian real estate builders — it generates leads, then calls, WhatsApps, qualifies and follows up with every lead until a site visit is booked.",
  featureList: [
    "AI voice calling — inbound and outbound",
    "WhatsApp automation and follow-up",
    "Lead generation across every channel",
    "Lead management and tracking",
    "Sales analytics and lead intelligence",
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Real estate builders and developers in India",
  },
  publisher: { "@type": "Organization", name: "Kriven AI", url: "https://kriven.ai" },
};

// The product overview video embedded on the homepage ("Watch a lead become a
// site visit"). Makes the video eligible for Google video rich results / video
// search. The contentUrl streams from S3; thumbnailUrl + embedUrl live on kriven.ai.
const VIDEO_OBJECT = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Kriven AI — Product Overview",
  description:
    "See how Kriven AI works as the all-in-one AI sales engine for Indian real estate — it answers every call in the buyer's own language, qualifies leads, follows up on WhatsApp, runs outbound calls at scale, and puts every lead in one dashboard.",
  thumbnailUrl: ["https://kriven.ai/kriven-launch-poster.jpg"],
  uploadDate: "2026-07-17",
  duration: "PT2M43S",
  contentUrl:
    "https://kriven-ai-real-estate-intelligence.s3.us-east-1.amazonaws.com/kriven-launch-v11.mp4",
  embedUrl: "https://kriven.ai/#see-it-in-action",
  publisher: {
    "@type": "Organization",
    name: "Kriven AI",
    logo: { "@type": "ImageObject", url: "https://kriven.ai/icon.png" },
  },
};

export function StructuredData() {
  const graph = [ORGANIZATION, WEBSITE, SOFTWARE_APPLICATION, VIDEO_OBJECT];
  return (
    <>
      {graph.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}
