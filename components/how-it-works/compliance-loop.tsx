"use client";

import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Check } from "lucide-react";

const COMPLIANCE_POINTS = [
  "Consent captured at the source — timestamped & withdrawable",
  "DLT-registered calls & SMS, approved WhatsApp templates",
  "Every message carries an opt-out, honoured promptly",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function ComplianceLoop() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-24 lg:py-28">
      <div className="absolute inset-0 dot-pattern opacity-20 mask-radial-fade" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Compliance */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-2xl border border-border-subtle bg-card p-7"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/15 text-success">
              <ShieldCheck className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
              Compliance, built in.
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Built to help you stay aligned with India&apos;s DPDP and TRAI/DLT
              rules — from the first touch, not bolted on later.
            </p>
            <ul className="mt-4 space-y-2 border-t border-border-subtle pt-4">
              {COMPLIANCE_POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] font-medium text-foreground">
              Compliance built in from the start helps keep your outreach on the
              right side of the rules — and earns trust with every lead you reach.
            </p>
          </motion.div>

          {/* The loop */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative overflow-hidden rounded-2xl border border-brand/25 bg-card p-7 shadow-[0_16px_44px_-18px_rgba(217,88,62,0.3)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e87a5f,#d9583e)]"
            />
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
              <RefreshCw className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
              And the engine learns.
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Every booked site visit tells the engine which channels actually
              work — so next month&apos;s spend shifts to what fills your site
              visits, and the cost per visit keeps dropping.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-muted px-4 py-3 text-center font-mono text-[12px] text-muted-foreground">
              <span className="font-semibold text-foreground">Site visit</span>
              <RefreshCw className="h-3.5 w-3.5 text-brand" />
              <span>spend shifts to what works</span>
            </div>
            <p className="mt-4 text-[12px] font-medium text-foreground">
              One engine. One number that matters: more site visits, at a lower
              cost each.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
