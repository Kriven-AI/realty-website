import { Sparkles } from "lucide-react";

/**
 * An extractable "Key takeaways" summary box near the top of a blog post.
 * AI answer engines readily lift a clean, bulleted summary — so this improves
 * the odds the post's key facts get quoted (AEO/GEO), and it helps readers scan.
 */
export function KeyTakeaways({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-8 rounded-2xl border border-border-subtle bg-muted/40 p-6">
      <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
        <Sparkles className="h-3.5 w-3.5" />
        Key takeaways
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((t) => (
          <li
            key={t}
            className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/90"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
