import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "How Kriven AI collects, uses, and protects the information you share with us — including demo requests and enquiries.",
};

const UPDATED = "June 27, 2026";

export default function PrivacyPage() {
  return (
    <section className="relative px-6 pt-32 pb-24 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-subtle">Last updated: {UPDATED}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Kriven AI (“we”, “us”, “our”) respects your privacy. This policy
            explains what information we collect when you visit{" "}
            <span className="text-foreground">kriven.ai</span> or contact us,
            how we use it, and the choices you have.
          </p>

          <Section title="1. Information we collect">
            <p>
              <span className="font-medium text-foreground">
                Information you give us.
              </span>{" "}
              When you book a demo or get in touch, we collect the details you
              provide — typically your name, company, work email, phone number,
              and any message.
            </p>
            <p className="mt-3">
              <span className="font-medium text-foreground">
                Information collected automatically.
              </span>{" "}
              We may collect basic, anonymised usage data (such as which pages
              you visit) to understand how the site is used and improve it.
            </p>
          </Section>

          <Section title="2. How we use your information">
            <p>
              We use your information to respond to demo requests and enquiries,
              schedule walkthroughs, provide and improve our services, and
              communicate with you about Kriven AI. We do not sell your personal
              information.
            </p>
          </Section>

          <Section title="3. How we store and share it">
            <p>
              Demo and contact submissions are stored in the business tools we
              use to operate (for example, our hosting and Google Workspace). We
              share your information only with service providers that help us run
              our business, and only as needed — never sold to third parties.
            </p>
          </Section>

          <Section title="4. Your rights">
            <p>
              You may request access to, correction of, or deletion of your
              personal information, and you may withdraw your consent at any
              time. To do so, email us at the address below and we’ll act on
              your request as required by applicable law, including India’s
              Digital Personal Data Protection (DPDP) Act.
            </p>
          </Section>

          <Section title="5. Data retention">
            <p>
              We keep your information only for as long as needed to respond to
              you and to fulfil the purposes described here, or as required by
              law.
            </p>
          </Section>

          <Section title="6. Security">
            <p>
              We use reasonable technical and organisational measures to protect
              your information. No method of transmission or storage is fully
              secure, but we work to keep your data safe.
            </p>
          </Section>

          <Section title="7. Changes to this policy">
            <p>
              We may update this policy from time to time. The “last updated”
              date above reflects the most recent version.
            </p>
          </Section>

          <Section title="8. Contact us">
            <p>
              Questions about this policy or your data? Email us at{" "}
              <a
                href="mailto:hello@kriven.ai"
                className="font-medium text-brand underline underline-offset-2"
              >
                hello@kriven.ai
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
