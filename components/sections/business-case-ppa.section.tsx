import React from 'react';
import { Sun, FileText, Power, ArrowRight } from 'lucide-react';

interface ProcessStep {
    icon: React.ElementType;
    title: string;
    description: string;
    value: string;
    subtext: string;
}

const processSteps: ProcessStep[] = [
    {
        icon: Sun,
        title: "Energy Generation",
        description: "Solar panels convert sunlight into DC electricity",
        value: "2,000 MWp",
        subtext: "Total Capacity"
    },
    {
        icon: FileText,
        title: "Power Purchase Agreement",
        description: "Long-term contract ensuring stable energy supply",
        value: "25 Years",
        subtext: "Contract Duration"
    },
    {
        icon: Power,
        title: "Grid Distribution",
        description: "Reliable power supply to the national grid",
        value: "24/7",
        subtext: "Power Supply"
    }
];

const ProcessStepCard = ({
    step,
    index,
    total
}: {
    step: ProcessStep;
    index: number;
    total: number;
}) => {
    const { icon: Icon, title, description, value, subtext } = step;
    return (
        <div className="relative group h-full">
            <div className="bg-white p-8 rounded-2xl border border-[#003366]/10 hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col">
                <div className="w-12 h-12 mb-6 text-[#003366] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                    {title}
                </h3>
                <p className="text-[#003366]/70 mb-6 leading-relaxed flex-grow">
                    {description}
                </p>
                <div className="pt-4 border-t border-[#003366]/10">
                    <div className="text-2xl font-bold text-[#003366] group-hover:text-[#003366]/80 transition-colors">
                        {value}
                    </div>
                    <div className="text-sm text-[#003366]/70">
                        {subtext}
                    </div>
                </div>
            </div>
            {index < total - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 items-center transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#003366]/20" />
                </div>
            )}
        </div>
    );
};

export const BusinessCasePPASection = () => {
    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                            Power Purchase Agreement
                        </h2>
                        <p className="text-[#003366]/70 mt-2">
                            Build-Own-Operate Model
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl">
                    {/* PPA Process Flow */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {processSteps.map((step, index) => (
                                <ProcessStepCard
                                    key={index}
                                    step={step}
                                    index={index}
                                    total={processSteps.length}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Detailed Description */}
                    <div className="max-w-4xl">
                        <h3 className="text-xl font-semibold text-[#003366] mb-6">
                            Understanding Our PPA Structure
                        </h3>
                        <div className="space-y-6 text-[#003366]/70">
                            <p>
                                Our Power Purchase Agreement (PPA) represents a cornerstone of sustainable energy development in Namibia. Through this agreement, we establish a direct relationship between power generation and consumption, ensuring reliable and sustainable energy supply for decades to come.
                            </p>
                            <p>
                                The process begins with our state-of-the-art solar installation, capable of generating 2,000 MWp of clean energy. This power is then distributed through our sophisticated grid network, backed by a 25-year commitment to maintaining and operating these facilities at peak efficiency.
                            </p>
                            <p>
                                By choosing our PPA solution, partners gain access to stable, predictable energy costs while contributing to Namibia's renewable energy goals. Our end-to-end approach ensures seamless integration with existing infrastructure and guaranteed performance throughout the agreement's duration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessCasePPASection;