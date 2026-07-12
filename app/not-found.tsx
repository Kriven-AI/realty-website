import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-40" />
      <Glow variant="center" />

      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
          404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-gradient">This page took a wrong turn.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link href="/">
              Back home
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/product">Explore the platform</Link>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link
            href="/how-it-works"
            className="transition-colors hover:text-brand"
          >
            How it works
          </Link>
          <Link
            href="/solutions/lead-generation"
            className="transition-colors hover:text-brand"
          >
            Solutions
          </Link>
          <Link href="/blog" className="transition-colors hover:text-brand">
            Blog
          </Link>
          <Link href="/demo" className="transition-colors hover:text-brand">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
