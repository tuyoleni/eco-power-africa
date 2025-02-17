'use client'

import HeroSection from "@/components/sections/hero.section";
import EnergySection from "@/components/sections/energy.section";
import BusinessCaseSection from "@/components/sections/business-case.section";
import QualitySection from "@/components/sections/quality.section";
import Power2XBlocksSection from "@/components/sections/power2x-blocks.section";
import ProductionCostSection from "@/components/sections/production-cost.section";
// import RenewableFutureSection from "@/components/sections/renewable-future.section";
// import DesalinationPlantSection from "@/components/sections/desalination-plant.section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EnergySection />
      <BusinessCaseSection />
      {/* <Power2XBlocksSection /> */}
      {/* <DesalinationPlantSection /> */}
      <ProductionCostSection />
      <QualitySection />
      {/* <RenewableFutureSection /> */}
    </main>
  );
}