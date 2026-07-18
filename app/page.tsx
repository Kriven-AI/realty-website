import { Hero } from "@/components/home/hero";
import { LaunchFilm } from "@/components/home/launch-film";
import { Integrations } from "@/components/home/integrations";
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
      <LaunchFilm />
      <FragmentedReality />
      <LeadEngineTeaser />
      <Integrations />
      <PlatformSuite />
      <Personalization />
      <Intelligence />
      <WhyKriven />
      <FinalCTA />
    </>
  );
}
