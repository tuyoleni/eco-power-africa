import Image from "next/image";
import { Card } from "@/components/ui/card";
import BusinessCaseDevelopmentSection from "./business-case-development.section";
import BusinessCaseDiagramSection from "./business-case-diagram.section";
import BusinessCaseFinanceSection from "./business-case-finance.section";
import BusinessCasePPASection from "./business-case-ppa.section";
import { arialView } from "@/public/assets";

const cardData = [
    {
        title: "Power Generation",
        value: "2,000 MWp",
        subValue: "Megawatt Peak Capacity",
        image: "/license-image.jpg",
        alt: "Power Generation",
        description: "Total licensed generation capacity"
    },
    {
        title: "Project Structure",
        value: "PPA Driven",
        subValue: "Build, Own & Operate Model",
        image: "/phase-image.jpg",
        alt: "Project Structure",
        description: "Long-term sustainable operation model"
    },
    {
        title: "Investment Model",
        value: "30/70",
        subValue: "Investment Ratio",
        image: "/income-image.jpg",
        alt: "Investment Model",
        description: "Equity to debt ratio structure"
    },
];

export default function BusinessCaseSection() {
    return (
        <section className="relative w-full">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={arialView}
                        alt="Solar Farm Aerial View"
                        className="w-full h-full object-cover"
                        fill
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A3D91]/90" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Business Case
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            A comprehensive solar power initiative driving Namibia's sustainable energy future
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                className="group bg-white/10 backdrop-blur-md border-0 overflow-hidden hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <Image
                                        fill
                                        src={card.image}
                                        alt={card.alt}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6 relative">
                                    <h3 className="text-lg font-medium text-white mb-2">{card.title}</h3>
                                    <p className="text-3xl font-bold text-white mb-2">{card.value}</p>
                                    <p className="text-white/70 text-sm">{card.subValue}</p>
                                    <p className="mt-4 text-white/80 text-sm">{card.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections with Improved Spacing */}
            <div className="bg-white">
                <div className="space-y-40 py-40">
                    <BusinessCaseFinanceSection />
                    <BusinessCasePPASection />
                    <BusinessCaseDevelopmentSection />
                </div>
            </div>
        </section>
    );
}