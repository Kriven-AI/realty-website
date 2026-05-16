import { cn } from "@/lib/utils";

type GlowVariant = "top" | "above" | "below" | "center";

export function Glow({
  variant = "above",
  className,
}: {
  variant?: GlowVariant;
  className?: string;
}) {
  const positionClass: Record<GlowVariant, string> = {
    top: "top-0",
    above: "-top-32",
    below: "-bottom-32",
    center: "top-1/2 -translate-y-1/2",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 w-full",
        positionClass[variant],
        className,
      )}
    >
      <div
        className="absolute left-1/2 h-[420px] w-[80%] -translate-x-1/2 scale-[2] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232, 122, 95, 0.5) 0%, rgba(217, 88, 62, 0.0) 60%)",
        }}
      />
      <div
        className="absolute left-1/2 h-[200px] w-[60%] -translate-x-1/2 scale-[2] rounded-full opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217, 88, 62, 0.4) 0%, rgba(217, 88, 62, 0) 60%)",
        }}
      />
    </div>
  );
}
