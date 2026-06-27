import type { Metadata } from "next";
import {
  Calendar,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { DemoForm } from "@/components/demo/demo-form";
import { Glow } from "@/components/ui/glow";

export const metadata: Metadata = {
  alternates: { canonical: "/demo" },
  title: "Book a demo",
  description:
    "Get a tailored 30-minute walkthrough — live agent on a real call, no slide deck.",
};

const WHAT_TO_EXPECT = [
  {
    icon: Clock,
    title: "30 minutes, no slide deck",
    body: "We open Kriven AI, hand you a phone, and you talk to the agent yourself. That's the demo.",
  },
  {
    icon: PhoneCall,
    title: "A live call — in your language",
    body: "Telugu, Hindi, English, codemix. Bring your toughest objection and try to trip the agent up.",
  },
  {
    icon: Sparkles,
    title: "Tailored to your projects",
    body: "We pre-load a fake inventory close to yours so the agent's responses sound like your sale.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    body: "Nothing you share goes into model training. Recordings stored only on your tenant.",
  },
];

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-pattern mask-radial-fade opacity-30" />
      <Glow variant="above" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left: pitch */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-soft">
              Book a demo
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">See Kriven AI handle</span>
              <br className="hidden sm:block" />
              <span className="text-muted-foreground">a real sales call.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Skip the deck. In 30 minutes you&apos;ll watch the agent qualify
              a lead, handle objections, and book a site visit — using your
              project, your inventory, your buyer profile.
            </p>

            <div className="mt-12 space-y-5">
              {WHAT_TO_EXPECT.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/[0.04] text-foreground/80">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex items-center gap-3 rounded-xl border border-border-subtle bg-card/60 p-4">
              <Calendar className="h-5 w-5 text-brand-soft" />
              <p className="text-sm text-muted-foreground">
                We respond within{" "}
                <span className="font-semibold text-foreground">
                  24 hours
                </span>
                . Demo slots open within a week.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
