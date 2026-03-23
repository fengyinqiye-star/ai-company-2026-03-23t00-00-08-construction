import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesHighlight from "@/components/sections/FeaturesHighlight";
import WorksPickup from "@/components/sections/WorksPickup";
import FlowDigest from "@/components/sections/FlowDigest";
import TestimonialTeaser from "@/components/sections/TestimonialTeaser";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesHighlight />
      <WorksPickup />
      <FlowDigest />
      <TestimonialTeaser />
      <CtaBanner />
    </>
  );
}
