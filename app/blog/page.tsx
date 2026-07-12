import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "@/components/blog/posts";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog — Real Estate Sales & Lead Playbooks",
  description:
    "Practical guides, templates and data for Indian real estate builders — on lead follow-up, WhatsApp, voice AI, speed-to-lead and booking more site visits.",
};

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) =>
    a.datePublished < b.datePublished ? 1 : -1,
  );

  return (
    <>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
            Blog
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Playbooks for selling real estate, faster.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides, templates and real data for Indian builders — on
            lead follow-up, WhatsApp, voice AI and booking more site visits.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border-subtle bg-card p-7 transition-colors hover:border-brand/30"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-brand/25 bg-brand-tint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  {post.category}
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-xs text-subtle">
                    {post.dateDisplay} · {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-transform group-hover:translate-x-0.5">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
