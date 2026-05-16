import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

const FOOTER_LINKS: { title: string; items: { label: string; href: string }[] }[] =
  [
    {
      title: "Platform",
      items: [
        { label: "Inbound Voice AI", href: "/product#inbound" },
        { label: "Outbound Campaigns", href: "/product#outbound" },
        { label: "WhatsApp Follow-ups", href: "/product#whatsapp" },
        { label: "Analytics", href: "/product#analytics" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "Why Kriven", href: "/#why" },
        { label: "Book a Demo", href: "/demo" },
        { label: "Customers", href: "/#customers" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Roadmap", href: "/#whats-next" },
        { label: "Contact", href: "/demo" },
      ],
    },
  ];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border-subtle bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8 lg:py-20">
        <div className="space-y-5">
          <SiteLogo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            The AI sales platform built only for real estate builders. Every
            step of the sale, under one roof.
          </p>
          <p className="text-xs text-subtle">Made for builders. India · Global.</p>
        </div>

        {FOOTER_LINKS.map((column) => (
          <div key={column.title} className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-subtle">
              {column.title}
            </h4>
            <ul className="space-y-2.5">
              {column.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-subtle md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Kriven AI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
