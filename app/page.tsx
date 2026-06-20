import { Hero } from "@/components/home/hero";
import { FragmentedReality } from "@/components/home/fragmented-reality";
import { LeadEngineTeaser } from "@/components/home/lead-engine-teaser";
import { PlatformSuite } from "@/components/home/platform-suite";
import { Personalization } from "@/components/home/personalization";
import { Intelligence } from "@/components/home/intelligence";
import { WhyKriven } from "@/components/home/why-kriven";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FragmentedReality />
      <LeadEngineTeaser />
      <PlatformSuite />
      <Personalization />
      <Intelligence />
      <WhyKriven />
      <FinalCTA />
    </>
  );
}
