'use client'

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const ReferencesSection = dynamic(() => import("@/components/sections/references.section"), { ssr: false });
const BreakthroughSection = dynamic(() => import("@/components/sections/breakthrough.section"), { ssr: false });
const PowerhouseSection = dynamic(() => import("@/components/sections/powerhouse.section"), { ssr: false });
const WorldSolarPlantSection = dynamic(() => import("@/components/sections/world-solar-plant.section"), { ssr: false });
const GolmudChinaSection = dynamic(() => import("@/components/sections/golmud-china.section"), { ssr: false });
const BusinessCaseDevelopmentSection = dynamic(() => import("@/components/sections/business-case-development.section"), { ssr: false });
const TrekkopjeMineralRightsSection = dynamic(() => import("@/components/sections/trekkopje-mineral-rights.section"), { ssr: false });

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