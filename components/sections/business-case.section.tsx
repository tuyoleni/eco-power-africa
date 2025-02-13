import Image from "next/image";
import { Card } from "@/components/ui/card";
import BusinessCaseDevelopmentSection from "./business-case-development.section";
import BusinessCaseDiagramSection from "./business-case-diagram.section";
import BusinessCaseFinanceSection from "./business-case-finance.section";
import BusinessCaseInfoSection from "./business-case-info.section";
import BusinessCasePPASection from "./business-case-ppa.section";
import { arialView } from "@/public/assets"

const cardData = [
    {
        title: "IPP License",
        value: "2,000 MWp",
        image: "/license-image.jpg",
        alt: "IPP License",
    },
    {
        title: "Project Phase",
        value: "PHASE 1 of 10",
        subValue: "200 MWp",
        image: "/phase-image.jpg",
        alt: "Project Phase",
    },
    {
        title: "Monthly Income",
        value: "30 MILLION USD",
        subValue: "Projected monthly revenue",
        image: "/income-image.jpg",
        alt: "Monthly Income",
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
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#0A3D91]">
                                Powering Africa's Sustainable Future
                            </h1>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-[#0A3D91]/80 leading-relaxed">
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
                                        <div className="flex-1 p-4">
                                            <h3 className="text-lg font-medium mb-1 text-black">{card.title}</h3>
                                            <p className="text-2xl font-bold text-black">{card.value}</p>
                                            {card.subValue && (
                                                <p className="text-sm mt-1 text-black/70">{card.subValue}</p>
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
                <BusinessCaseInfoSection />
                <BusinessCaseFinanceSection />
                <BusinessCasePPASection />
                <BusinessCaseDiagramSection />
                <BusinessCaseDevelopmentSection />
            </div>
        </section>
    );
}