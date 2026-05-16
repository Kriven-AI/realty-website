import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realty-website.vercel.app"),
  title: {
    default: "Kriven AI — Every step of the real estate sale. One platform.",
    template: "%s · Kriven AI",
  },
  description:
    "Kriven AI is the AI sales engine for Indian real estate builders — inbound calls, outbound campaigns, WhatsApp follow-ups and analytics, in one place.",
  keywords: [
    "real estate AI",
    "AI sales platform",
    "voice AI for builders",
    "outbound campaigns real estate",
    "site visit booking AI",
    "real estate CRM AI",
    "Kriven AI",
  ],
  openGraph: {
    title: "Kriven AI — Every step of the real estate sale.",
    description:
      "The AI sales engine for Indian real estate builders — inbound calls, outbound campaigns, WhatsApp follow-ups and analytics, in one place.",
    type: "website",
    siteName: "Kriven AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kriven AI — Every step of the real estate sale.",
    description:
      "The AI sales engine for Indian real estate builders. One platform, not five vendors.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground">
        <SmoothScroll>
          <SiteHeader />
          <main className="relative">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
