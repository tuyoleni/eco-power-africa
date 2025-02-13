import Image from "next/image";
import { Card } from "@/components/ui/card";
import BusinessCaseDevelopmentSection from "./business-case-development.section";
import BusinessCaseDiagramSection from "./business-case-diagram.section";
import BusinessCaseFinanceSection from "./business-case-finance.section";
import BusinessCasePPASection from "./business-case-ppa.section";
import { arialView } from "@/public/assets"

const cardData = [
    {
        title: "Power Generation",
        value: "2,000 MWp",
        subValue: "Megawatt Peak Capacity",
        image: "/license-image.jpg",
        alt: "Power Generation",
    },
    {
        title: "Project Structure",
        value: "PPA Driven",
        subValue: "Build, Own & Operate Model",
        image: "/phase-image.jpg",
        alt: "Project Structure",
    },
    {
        title: "Investment Model",
        value: "30/70",
        subValue: "Investment Ratio",
        image: "/income-image.jpg",
        alt: "Investment Model",
    },
];

export default function BusinessCaseSection() {
    return (
        <section className="relative w-full py-20">
            {/* Hero Section with Background */}
            <div className="relative min-h-[60vh] flex items-center justify-between">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={arialView}
                        alt="Solar Farm Aerial View"
                        className="w-full h-full object-cover"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D91]/80 to-transparent" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white">
                                Project Overview
                            </h1>
                            <p className="text-white/80 text-lg">
                                Key metrics and structure of our solar power initiative
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-white/80 leading-relaxed">
                                Comprehensive analysis of our solar power project, detailing financial projections, technical specifications, and environmental impact assessments. Our thorough evaluation covers all aspects of implementation, from initial planning to long-term sustainability.
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-40">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {cardData.map((card, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden bg-white/40 backdrop-blur-[20px] shadow-lg hover:shadow-xl transition-shadow border-0"
                                >
                                    <div className="flex flex-row">
                                        <div className="flex-1 p-6">
                                            <h3 className="text-lg font-medium mb-2 text-black">{card.title}</h3>
                                            <p className="text-3xl font-bold text-black mb-2">{card.value}</p>
                                            {card.subValue && (
                                                <p className="text-sm text-black/70">{card.subValue}</p>
                                            )}
                                        </div>
                                        <div className="w-40 h-52 relative">
                                            <Image
                                                fill
                                                src={card.image}
                                                alt={card.alt}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of the sections */}
            <div className="space-y-32 py-32">
                <BusinessCaseFinanceSection />
                <BusinessCasePPASection />
                <BusinessCaseDiagramSection />
                <BusinessCaseDevelopmentSection />
            </div>
        </section>
    );
}