"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";

export function DemoForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1100));
    setState("success");
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-success/30 bg-success/[0.06] p-10 text-center"
      >
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Our team will reach out to set up a 30-minute walkthrough tailored to
          your projects and inventory.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border-subtle bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          placeholder="Vikram Sharma"
          required
        />
        <Field
          label="Company"
          name="company"
          placeholder="Sunrise Builders"
          required
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Work email"
          name="email"
          type="email"
          placeholder="vikram@sunrisebuilders.in"
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 98•• ••42"
          required
        />
      </div>
      <Field
        label="Role"
        name="role"
        placeholder="Sales Head / Founder / CMO"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          label="Number of active projects"
          name="projects"
          options={[
            "1 — 2 projects",
            "3 — 5 projects",
            "6 — 10 projects",
            "10+ projects",
          ]}
        />
        <Select
          label="Monthly leads handled"
          name="leads"
          options={[
            "< 500 leads",
            "500 — 2,000 leads",
            "2,000 — 10,000 leads",
            "10,000+ leads",
          ]}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-subtle"
        >
          What&apos;s the biggest gap in your sales today? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="e.g. We miss too many calls on weekends and our telecaller team can't keep up with retries."
          className="w-full resize-none rounded-lg border border-border-subtle bg-background/40 px-3.5 py-3 text-sm text-foreground placeholder:text-subtle focus:border-brand/40 focus:bg-background/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-border-subtle pt-5 sm:flex-row sm:justify-between">
        <p className="text-xs text-subtle">
          We&apos;ll respond within 24 hours · No sales spam, ever.
        </p>
        <Button
          type="submit"
          variant="brand"
          size="lg"
          disabled={state === "submitting"}
          className={cn(state === "submitting" && "opacity-75")}
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-subtle"
      >
        {label} {required && <span className="text-warning">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-border-subtle bg-background/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle focus:border-brand/40 focus:bg-background/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-subtle"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full appearance-none rounded-lg border border-border-subtle bg-background/40 px-3.5 py-2.5 text-sm text-foreground focus:border-brand/40 focus:bg-background/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='%23A1A1AA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
          paddingRight: "2.5rem",
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
