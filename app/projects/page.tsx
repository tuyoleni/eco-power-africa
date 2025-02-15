'use client'

import ReferencesSection from "@/components/sections/references.section";
import BreakthroughSection from "@/components/sections/breakthrough.section";
import PowerhouseSection from "@/components/sections/powerhouse.section";
import WorldSolarPlantSection from "@/components/sections/world-solar-plant.section";
import GolmudChinaSection from "@/components/sections/golmud-china.section";
import ProductionCostSection from "@/components/sections/production-cost.section";
import RenewableFutureSection from "@/components/sections/renewable-future.section";
import TrekkopjeMineralRightsSection from "@/components/sections/trekkopje-mineral-rights.section";
import DesalinationPlantSection from "@/components/sections/desalination-plant.section";
import BusinessCaseDevelopmentSection from "@/components/sections/business-case-development.section";

export default function ProjectsPage() {
    return (
        <main>
            <ReferencesSection />
            <WorldSolarPlantSection />
            <GolmudChinaSection />
            <BreakthroughSection />
            <PowerhouseSection />
            <TrekkopjeMineralRightsSection />
            {/* <ProductionCostSection /> */}
            {/* <RenewableFutureSection /> */}
            <BusinessCaseDevelopmentSection />
            {/* <DesalinationPlantSection /> */}
        </main>
    );
}