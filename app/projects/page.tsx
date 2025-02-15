'use client'

import WorldSolarPlantSection from "@/components/sections/world-solar-plant.section";
import GolmudChinaSection from "@/components/sections/golmud-china.section";
import BusinessCaseDevelopmentSection from "@/components/sections/business-case-development.section";
import TrekkopjeMineralRightsSection from "@/components/sections/trekkopje-mineral-rights.section";

export default function Projects() {
    return (
        <main>
            <WorldSolarPlantSection />
            <GolmudChinaSection />
            <BusinessCaseDevelopmentSection />
            <TrekkopjeMineralRightsSection />
        </main>
    );
}