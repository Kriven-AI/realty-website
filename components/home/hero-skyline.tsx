import Image from "next/image";

/**
 * Hand-drawn skyline sketch placed as a horizon behind the dashboard.
 * The source image is very wide (2400×387 ≈ 6:1). The container holds a
 * tall fixed height so the buildings keep their proper height at every
 * breakpoint — object-cover then crops the WIDTH (sides), showing fewer
 * buildings on mobile rather than a squashed sliver.
 */
export function HeroSkyline() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 z-0 h-52 w-screen max-w-none -translate-x-1/2 -translate-y-[66%] select-none sm:h-56 lg:h-60"
      style={{
        maskImage: "linear-gradient(to top, black 24%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 24%, transparent 100%)",
      }}
    >
      <Image
        src="/skyline-sketch.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="select-none object-cover object-bottom opacity-50 mix-blend-multiply"
      />
    </div>
  );
}
