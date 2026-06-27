/**
 * Site-wide JSON-LD structured data. Invisible to humans, but it lets
 * Google (and AI engines like ChatGPT / AI Overviews) understand exactly
 * what Kriven AI is — and tells Google the official site name to show.
 *
 * We use Organization + WebSite (both fully valid, no missing-field
 * warnings). We deliberately omit SoftwareApplication: without public
 * pricing/ratings it can't form a valid rich result and only adds
 * Rich-Results-Test warnings. Add it back if/when there's an offer or
 * aggregateRating to show.
 */

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kriven AI",
  url: "https://kriven.ai",
  logo: "https://kriven.ai/icon.png",
  description:
    "Kriven AI is the all-in-one AI sales engine for Indian real estate — lead generation, inbound voice AI, outbound campaigns, WhatsApp follow-ups and analytics, in one platform.",
};

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kriven AI",
  url: "https://kriven.ai",
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE) }}
      />
    </>
  );
}
