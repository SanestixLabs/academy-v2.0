import { Hero } from "@/components/sections/Hero";
import { VideoIntro } from "@/components/sections/VideoIntro";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PricingCard } from "@/components/sections/PricingCard";
import { CTASection } from "@/components/sections/CTASection";

import { CurriculumOverview } from "@/components/sections/CurriculumOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoIntro
        title="See What Sanestix Academy Is About"
        description="A short video on what you'll learn, how it works, and the opportunities ahead."
        duration="2:55"
      />
      <FeatureGrid />
      <CurriculumOverview />
      <PricingCard id="pricing" className="border-t border-surface-border" />
      <CTASection />
    </>
  );
}
