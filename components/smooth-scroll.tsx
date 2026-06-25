"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/**
 * Lenis renders the page at its own virtual scroll position, so Next.js'
 * default "scroll to top on navigation" doesn't actually move it — you'd
 * land wherever Lenis last was (e.g. mid-page). This resets Lenis to the
 * top on every route change, unless the URL carries a hash (in which case
 * the header's hash-scroll logic handles the target).
 */
function ScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
