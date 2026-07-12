"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/site-logo";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  {
    label: "Lead Generation",
    href: "/solutions/lead-generation",
    desc: "Bring buyers in from every channel",
  },
  {
    label: "AI Voice Calling",
    href: "/solutions/ai-voice-calling",
    desc: "Inbound + outbound calling, 24/7",
  },
  {
    label: "WhatsApp Automation",
    href: "/solutions/whatsapp-automation",
    desc: "Follow-up that never forgets",
  },
  {
    label: "Lead Management",
    href: "/solutions/lead-management",
    desc: "Every lead, tracked and worked",
  },
  {
    label: "Analytics & Insights",
    href: "/solutions/analytics",
    desc: "Know who your buyers really are",
  },
];

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Solutions", children: SOLUTIONS },
];

/** Pixels to stop short of a section top so it clears the fixed navbar. */
const SCROLL_OFFSET = -84;
/** A slower, more graceful glide for section navigation. */
const SCROLL_DURATION = 1.8;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // After landing on the home page with a hash (e.g. navigated from
  // /product or /demo), smooth-scroll to that section once it's in the
  // DOM. A fixed delay was unreliable when the home page mounted slowly
  // (heavy hero, animated dashboard, etc) — the target section wasn't
  // ready yet. So we poll: keep checking until both the section element
  // exists AND lenis is initialised, then scroll. Capped to ~1.5s so it
  // never hangs forever.
  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;
    const maxAttempts = 30;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.querySelector(hash);
      if (el && lenis) {
        lenis.scrollTo(hash, {
          offset: SCROLL_OFFSET,
          duration: SCROLL_DURATION,
        });
        return;
      }
      if (attempts < maxAttempts) {
        attempts++;
        timeoutId = setTimeout(tryScroll, 50);
      }
    };

    timeoutId = setTimeout(tryScroll, 100);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname, lenis]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMobileOpen(false);
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return; // plain route — let Link navigate

    const hash = href.slice(hashIndex);
    // Already on the home page → just smooth-scroll to the section.
    if (pathname === "/") {
      e.preventDefault();
      lenis?.scrollTo(hash, {
        offset: SCROLL_OFFSET,
        duration: SCROLL_DURATION,
      });
    }
    // Otherwise let the Link navigate to /#hash — the effect above
    // handles the scroll once the home page mounts.
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_24px_-16px_rgba(26,24,23,0.25)]"
          : "",
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Left — logo */}
        <SiteLogo />

        {/* Center — primary nav (absolutely centered for symmetry) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] font-medium text-muted-foreground transition-colors group-hover:bg-foreground/[0.05] group-hover:text-foreground"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-72 rounded-2xl border border-border-subtle bg-background/95 p-2 shadow-[0_8px_30px_-8px_rgba(26,24,23,0.18)] backdrop-blur-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/[0.05]"
                      >
                        <span className="block text-sm font-medium text-foreground">
                          {child.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {child.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                scroll={!link.href!.includes("#")}
                onClick={(e) => handleNavClick(e, link.href!)}
                className="rounded-full px-4 py-2 text-[13.5px] font-medium text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right — CTA */}
        <div className="hidden items-center md:flex">
          <Button asChild variant="primary" size="sm">
            <Link href="/demo">
              Book a demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-foreground/[0.05] md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-subtle bg-background/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-6 py-6">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="pt-2">
                  <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-subtle">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  scroll={!link.href!.includes("#")}
                  onClick={(e) => handleNavClick(e, link.href!)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="mt-4 border-t border-border-subtle pt-4">
              <Button asChild variant="primary" size="md" className="w-full">
                <Link href="/demo" onClick={() => setMobileOpen(false)}>
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
