import Image from "next/image";
import { motion, type MotionValue } from "framer-motion";

/**
 * Hand-drawn skyline sketch placed as a horizon behind the dashboard.
 * The source image is very wide (2400×387 ≈ 6:1). A fixed responsive
 * height + object-cover keeps the buildings at full height on every
 * breakpoint and crops the WIDTH instead of squashing the image.
 *
 * Accepts an optional `parallaxY` motion value — when scrolled past, the
 * skyline drifts down slightly within its parent, lagging behind the
 * dashboard for a quiet depth/parallax effect.
 */
export function HeroSkyline({
  parallaxY,
}: {
  parallaxY?: MotionValue<number>;
}) {
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
      <motion.div
        className="relative h-full w-full"
        style={parallaxY ? { y: parallaxY } : undefined}
      >
        <Image
          src="/skyline-sketch.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="select-none object-cover object-bottom opacity-50 mix-blend-multiply"
        />
      </motion.div>
    </div>
  );
}
