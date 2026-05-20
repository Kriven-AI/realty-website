"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { AnimatedDashboard } from "@/components/home/animated-dashboard";
import { HeroSkyline } from "@/components/home/hero-skyline";
import { HeroFloatingChips } from "@/components/home/hero-floating-chips";

export function Hero() {
  const dashRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // The "laptop opening" tilt is a desktop delight — on a tall, narrow
  // mobile dashboard the 3D rotation never frames well, so it's shown
  // flat on mobile (and for reduced-motion users).
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const flat = reduceMotion || isMobile;

  // Scroll-driven "laptop opening" reveal — the dashboard tilts open
  // gradually across a long scroll range and locks fully upright (0deg)
  // by the time it is centred in the viewport.
  const { scrollYProgress } = useScroll({
    target: dashRef,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    flat ? [0, 0, 0] : [24, 0, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    flat ? [1, 1, 1] : [0.92, 1, 1],
  );

  // Quiet parallax: as the dashboard passes through the viewport, the
  // skyline drifts down a bit within its parent, so it appears to lag
  // behind the dashboard — depth, not motion sickness.
  const skylineY = useTransform(
    scrollYProgress,
    [0, 1],
    flat ? [0, 0] : [0, 64],
  );

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-50" />
      <Glow variant="above" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card py-1.5 pl-1.5 pr-4 text-xs shadow-[0_1px_2px_0_rgba(26,24,23,0.04)]"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
              <Sparkles className="h-2.5 w-2.5" />
              New
            </span>
            <span className="text-muted-foreground">
              Outbound Campaign Engine — now live for builders
            </span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 max-w-6xl text-balance text-2xl font-semibold leading-[1.2] tracking-tight md:text-[1.7rem] lg:text-[2.3rem] xl:text-[2.6rem]"
          >
            <span className="text-gradient md:whitespace-nowrap">
              One-stop solution for real estate businesses,
            </span>
            <br className="hidden md:block" />{" "}
            <span className="text-muted-foreground">
              where every moment matters.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            The AI sales engine built for India’s real estate market. Seamlessly manage calls, campaigns, and follow-ups to convert more leads and accelerate sales growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button asChild variant="brand" size="lg">
              <Link href="/demo">
                Book a demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/product">See how it works</Link>
            </Button>
          </motion.div>

          {/* Mini proof line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-xs text-subtle"
          >
            Built with love for Indian builders — fluent in Telugu, Hindi,
            English &amp; 20+ regional languages
          </motion.p>
        </div>

        {/* Animated dashboard — laptop tilt-up reveal, standing in the city */}
        <div
          ref={dashRef}
          className="relative mx-auto mt-40 max-w-6xl px-2 sm:px-0 lg:mt-48"
        >
          {/* Skyline horizon behind the dashboard */}
          <HeroSkyline parallaxY={skylineY} />

          {/* Floating data chips around the dashboard */}
          <HeroFloatingChips />

          <div
            className="relative z-10"
            style={{ perspective: "1600px" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              style={{
                rotateX,
                scale,
                transformOrigin: "50% 100%",
                transformStyle: "preserve-3d",
              }}
            >
              <AnimatedDashboard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
