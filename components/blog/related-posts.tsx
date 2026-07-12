import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { POSTS } from "@/components/blog/posts";

/**
 * "Keep reading" block for the bottom of a blog post. Prefers posts in the
 * same category, then fills with the most recent others. Pulls from the posts
 * registry, so it stays in sync as posts are added.
 */
export function RelatedPosts({ slug }: { slug: string }) {
  const current = POSTS.find((p) => p.slug === slug);
  const others = POSTS.filter((p) => p.slug !== slug);

  const ranked = [
    ...others.filter((p) => current && p.category === current.category),
    ...others.filter((p) => !current || p.category !== current.category),
  ];
  const related = ranked.slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="relative border-t border-border-subtle py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
          Keep reading
        </h2>
        <div className="mt-6 space-y-3">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border-subtle bg-card p-5 transition-colors hover:border-brand/30"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-soft">
                  {post.category}
                </p>
                <p className="mt-1 text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {post.title}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
