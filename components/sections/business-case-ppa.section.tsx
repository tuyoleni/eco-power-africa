import React from 'react';
import { Sun, FileText, Power } from 'lucide-react';

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

export const BusinessCasePPASection = () => {
    return (
        <section className="container mx-auto relative w-full bg-white py-20">
            {/* Header */}
            <div className="px-8 mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
                    Power Purchase Agreement
                </h2>
                <p className="text-[#003366]/70 text-xl mt-6 max-w-3xl">
                    Our Build-Own-Operate Model ensures long-term sustainable energy supply through
                    strategic partnerships and efficient infrastructure management.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-16 mb-24">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index}>
                                <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    Stage {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-2xl font-bold text-[#003366] mt-2">{step.title}</h3>
                                <div className="text-4xl font-light text-[#003366] mt-4">{step.value}</div>
                                <p className="text-[#003366]/70 mt-3">{step.description}</p>
                                <p className="text-sm text-[#003366]/70 mt-4">{step.subtext}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Detailed Information */}
                <div className="bg-[#003366] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-8">PPA Structure & Benefits</h3>

                    <div className="grid md:grid-cols-2 gap-12 divide-x divide-white/10">
                        <div className="pr-12">
                            <h4 className="text-xl font-medium mb-4">Key Features</h4>
                            <div className="space-y-4 text-white/80">
                                <div>
                                    <p className="font-medium mb-2">Sustainable Generation</p>
                                    <p className="text-sm leading-relaxed">
                                        State-of-the-art solar installation with 2,000 MWp capacity,
                                        providing clean and reliable energy.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium mb-2">Long-term Commitment</p>
                                    <p className="text-sm leading-relaxed">
                                        25-year agreement ensuring stable energy supply and
                                        infrastructure maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pl-12">
                            <h4 className="text-xl font-medium mb-4">Partner Benefits</h4>
                            <div className="space-y-4 text-white/80">
                                <div>
                                    <p className="font-medium mb-2">Predictable Costs</p>
                                    <p className="text-sm leading-relaxed">
                                        Stable, long-term energy pricing structure with
                                        transparent terms and conditions.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium mb-2">Infrastructure Support</p>
                                    <p className="text-sm leading-relaxed">
                                        Seamless integration with existing systems and
                                        guaranteed performance standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-sm text-white/80">
                            <span className="font-medium">Note:</span> Our PPA structure is designed
                            to support Namibia&apos;s renewable energy goals while providing partners with
                            reliable, sustainable power solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessCasePPASection;