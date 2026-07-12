"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { POSTS } from "@/components/blog/posts";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function BlogList() {
  const posts = [...POSTS].sort((a, b) =>
    a.datePublished < b.datePublished ? 1 : -1,
  );
  const [featured, ...rest] = posts;

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-40" />
      <Glow variant="above" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            Blog
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">
              Playbooks for selling real estate, faster.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides, templates and real data for Indian builders — on
            lead follow-up, WhatsApp, voice AI and booking more site visits.
          </p>
        </motion.div>

        {/* Featured — latest post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="mt-12"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-border-subtle bg-card p-8 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_28px_60px_-24px_rgba(217,88,62,0.28)] lg:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                    {featured.category}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                    Latest
                  </span>
                </div>
                <h2 className="mt-5 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-subtle">
                  <span className="font-mono">{featured.dateDisplay}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{featured.readTime}</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_44px_-22px_rgba(217,88,62,0.25)]"
              >
                {/* Top accent line, drawn in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,#e87a5f,#d9583e)] transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-border-subtle bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-soft">
                    {post.category}
                  </span>
                  <span className="font-mono text-[11px] text-subtle">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-mono text-[11px] text-subtle">
                    {post.dateDisplay}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-brand-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
