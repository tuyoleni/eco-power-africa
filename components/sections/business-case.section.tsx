import Image from "next/image";
import BusinessCaseFinanceSection from "./business-case-finance.section";
import BusinessCasePPASection from "./business-case-ppa.section";
import { arialView } from "@/public/assets";
import { Zap, Database, Factory } from 'lucide-react';

const cardData = [
    {
        title: "Power Generation",
        value: "2,000 MWp",
        subValue: "Megawatt Peak Capacity",
        description: "Total licensed generation capacity for sustainable power production across multiple phases",
        details: "Scalable infrastructure designed for maximum efficiency",
        section: "finance",
        icon: Zap
    },
    {
        title: "Project Structure",
        value: "PPA Driven",
        subValue: "Build, Own & Operate Model",
        description: "Long-term sustainable operation model with guaranteed performance",
        details: "25-year commitment to operational excellence",
        section: "ppa",
        icon: Factory
    },
    {
        title: "Project Development",
        value: "2,500 ha",
        subValue: "TREKKOPJE Area",
        description: "Strategic location with optimal solar radiation and existing infrastructure",
        details: "Comprehensive development plan with overlapping interests",
        section: "development",
        icon: Database
    },
];

export default function BusinessCaseSection() {
    const scrollToSection = (section: string) => {
        const element = document.getElementById(`business-case-${section}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="container mx-auto relative w-full">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center rounded-md">
                <div className="absolute inset-0">
                    <Image
                        src={arialView}
                        alt="Solar Farm Aerial View"
                        className="w-full h-full object-cover rounded-md"
                        fill
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A3D91]/90 rounded-md" />
                </div>

                <div className="px-6 relative z-10">
                    <div className="max-w-4xl text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Business Case
                        </h2>
                        <p className="text-[#fff]/70 mt-6 max-w-3xl text-lg">
                            A comprehensive solar power initiative driving Namibia&apos;s sustainable energy future through innovative infrastructure and strategic partnerships
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto relative w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-16">
                        {cardData.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={index}
                                    onClick={() => scrollToSection(card.section)}
                                    className="group cursor-pointer"
                                >
                                    <span className="text-sm font-medium text-[#0A3D91]/50 flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        {card.title}
                                    </span>
                                    <h3 className="text-2xl font-bold text-[#0A3D91] mt-2">{card.value}</h3>
                                    <div className="text-base font-light text-[#0A3D91] mt-4">{card.subValue}</div>
                                    <p className="text-[#0A3D91]/70 mt-3">{card.description}</p>
                                    <p className="text-[#0A3D91]/50 text-sm mt-4 group-hover:text-[#0A3D91]/70 transition-colors">
                                        {card.details}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="bg-white">
                <div className="space-y-32 py-32">
                    <div id="business-case-finance">
                        <BusinessCaseFinanceSection />
                    </div>
                    <div id="business-case-ppa">
                        <BusinessCasePPASection />
                    </div>
                </div>
            </div>
        </section>
    );
}