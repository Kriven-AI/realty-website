import { Hero } from "@/components/home/hero";
import { FragmentedReality } from "@/components/home/fragmented-reality";
import { PlatformSuite } from "@/components/home/platform-suite";
import { Personalization } from "@/components/home/personalization";
import { Intelligence } from "@/components/home/intelligence";
import { WhyKriven } from "@/components/home/why-kriven";
import { WhatsNext } from "@/components/home/whats-next";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FragmentedReality />
      <PlatformSuite />
      <Personalization />
      <Intelligence />
      <WhyKriven />
      <WhatsNext />
      <FinalCTA />
    </>
  );
}
