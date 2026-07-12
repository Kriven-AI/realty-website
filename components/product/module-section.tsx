"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type ModuleSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  replaces: string;
  visual: React.ReactNode;
  reverse?: boolean;
  status?: "available" | "soon";
  href?: string;
  hrefLabel?: string;
};

export function ModuleSection({
  id,
  eyebrow,
  title,
  tagline,
  description,
  features,
  replaces,
  visual,
  reverse = false,
  status = "available",
  href,
  hrefLabel,
}: ModuleSectionProps) {
  return (
    <section
      id={id}
      className="relative border-t border-border-subtle py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
                {eyebrow}
              </p>
              {status === "available" ? (
                <Badge variant="success">Available</Badge>
              ) : (
                <Badge variant="soon">Coming soon</Badge>
              )}
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-foreground">{title}</span>{" "}
              <span className="text-muted-foreground">{tagline}</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                  <span className="text-[14px] leading-relaxed text-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-border-subtle bg-card/60 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                Replaces
              </p>
              <p className="mt-1 text-sm text-foreground">{replaces}</p>
            </div>

            {href && (
              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-soft"
              >
                {hrefLabel ?? "Learn more"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="relative"
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
