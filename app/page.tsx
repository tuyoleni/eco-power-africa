'use client'

import HeroSection from "@/components/sections/home/hero.section";
import KeypointsSection from "@/components/sections/keypoints.section";
import EnergySection from "@/components/sections/home/energy.section";
import SunSection from "@/components/sections/sun.section";
import BusinessCaseSection from "@/components/sections/business-case.section";
import QualitySection from "@/components/sections/quality.section";
import ReferencesSection from "@/components/sections/references.section";
import BreakthroughSection from "@/components/sections/breakthrough.section";
import PowerhouseSection from "@/components/sections/powerhouse.section";
import WorldSolarPlantSection from "@/components/sections/world-solar-plant.section";
import GolmudChinaSection from "@/components/sections/golmud-china.section";
import ProductionCostSection from "@/components/sections/production-cost.section";
import RenewableFutureSection from "@/components/sections/renewable-future.section";
import BloombergArticleSection from "@/components/sections/bloomberg-article.section";
import CapacityAdditionsSection from "@/components/sections/capacity-additions.section";
import BusinessCasePPASection from "@/components/sections/business-case-ppa.section";
import BusinessCaseFinanceSection from "@/components/sections/business-case-finance.section";
import BusinessCaseDiagramSection from "@/components/sections/business-case-diagram.section";
import BusinessCaseInfoSection from "@/components/sections/business-case-info.section";
import Power2XBlocksSection from "@/components/sections/power2x-blocks.section";
import BusinessCaseDevelopmentSection from "@/components/sections/business-case-development.section";
import TrekkopjeMineralRightsSection from "@/components/sections/trekkopje-mineral-rights.section";
import DesalinationPlantSection from "@/components/sections/desalination-plant.section";

export default function Home() {
  return (
    <main>
      <KeypointsSection />
      <HeroSection />
      <EnergySection />
      <SunSection />


      <BusinessCaseSection />


      <ReferencesSection />
      <BreakthroughSection />
      <QualitySection />
      <PowerhouseSection />
      <WorldSolarPlantSection />
      <GolmudChinaSection />
      <ProductionCostSection />
      <RenewableFutureSection />
      <BloombergArticleSection />
      <CapacityAdditionsSection />
      <Power2XBlocksSection />
      <TrekkopjeMineralRightsSection />
      <DesalinationPlantSection />
    </main>
  );
}

