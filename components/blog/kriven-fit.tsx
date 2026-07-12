import type { ReactNode } from "react";

/**
 * A subtle mid-article aside that connects the post's insight to the Kriven AI
 * platform. Deliberately light (left-accent, not a full CTA block) so the
 * article stays value-first rather than reading like an ad.
 */
export function KrivenFit({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 rounded-r-xl border-l-2 border-brand bg-brand-tint/30 py-4 pl-5 pr-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">
        Where Kriven AI fits
      </p>
      <p className="mt-1.5 text-base leading-relaxed text-foreground/90">
        {children}
      </p>
    </div>
  );
}
