import Link from "next/link";
import { cn } from "@/lib/utils";

export function SiteLogo({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col leading-none transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Kriven AI — Real Estate Intelligence"
    >
      <span className="text-[18px] font-semibold tracking-tight text-foreground">
        Kriven<span className="text-brand">&nbsp;AI</span>
      </span>
      {showTagline && (
        <span className="mt-[3px] text-[8px] font-semibold uppercase tracking-[0.2em] text-subtle">
          Real Estate Intelligence
        </span>
      )}
    </Link>
  );
}
