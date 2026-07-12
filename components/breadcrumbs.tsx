import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

type Item = { name: string; item: string };

/**
 * Breadcrumbs. Always emits BreadcrumbList JSON-LD (for search results).
 * By default it also renders a visible trail; pass `schemaOnly` to emit only
 * the structured data with no visible UI (used on solution/company pages).
 */
export function Breadcrumbs({
  items,
  schemaOnly = false,
}: {
  items: Item[];
  schemaOnly?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };

  const jsonLd = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );

  if (schemaOnly) return jsonLd;

  // Absolute item URLs -> site-relative paths for fast internal navigation.
  const toPath = (url: string) => url.replace("https://kriven.ai", "") || "/";

  return (
    <nav aria-label="Breadcrumb" className="relative pt-24 lg:pt-28">
      {jsonLd}
      <ol className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-1.5 gap-y-1 px-6 text-[13px] text-muted-foreground lg:px-8">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={it.item} className="flex items-center gap-x-1.5">
              {i > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-subtle"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-foreground"
                >
                  {it.name}
                </span>
              ) : (
                <Link
                  href={toPath(it.item)}
                  className="inline-flex items-center gap-1 transition-colors hover:text-brand"
                >
                  {i === 0 && <Home className="h-3.5 w-3.5" />}
                  {it.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
