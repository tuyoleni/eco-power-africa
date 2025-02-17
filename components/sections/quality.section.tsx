import Image from "next/image";
import { Zap, RefreshCw, Layers3 } from 'lucide-react';
import { Frame, Transformers, Inverter } from "@/public/assets";

const qualityCards = [
    {
        title: "Power Transformers",
        description: "High-performance dry-type transformers designed for maximum efficiency and minimal maintenance, ensuring reliable power distribution in your solar installation.",
        image: Transformers,
        alt: "Industrial dry-type transformers",
        icon: Zap
    },
    {
        title: "Inverter Systems",
        description: "Advanced inverter technology that optimizes power conversion, featuring smart monitoring capabilities and superior grid integration performance.",
        image: Inverter,
        alt: "Solar power inverter system",
        icon: RefreshCw
    },
    {
        title: "Mounting Solutions",
        description: "Custom-engineered mounting frames and rack systems designed for durability and easy installation, optimized for various terrain conditions.",
        image: Frame,
        alt: "Solar panel mounting frame system",
        icon: Layers3
    }
];

export default function QualitySection() {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            High quality for life-cycle costing benefits
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            Our commitment to quality ensures long-term reliability and optimal performance of your investment
                        </p>
                    </div>

                    {/* Quality Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-16">
                        {qualityCards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <div key={index} className="space-y-6">
                                    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                                        <Image
                                            src={card.image}
                                            alt={card.alt}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Icon className="w-6 h-6 text-[#003366]" />
                                            <h3 className="text-2xl font-bold">{card.title}</h3>
                                        </div>
                                        <p className="text-base text-[#003366]/70">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Additional Information */}
                    <div className="max-w-3xl mt-24">
                        <h3 className="text-2xl font-bold mb-6">
                            Quality Assurance
                        </h3>
                        <p className="text-base leading-relaxed text-[#003366]/70 mb-8">
                            Our comprehensive quality control system ensures that every component meets the highest
                            industry standards. From material selection to installation, we maintain rigorous quality
                            checks to guarantee optimal performance and longevity of your solar power system.
                        </p>
                        <div className="flex gap-3">
                            <span className="text-sm font-medium bg-[#003366]/10 text-[#003366] px-4 py-2 rounded-lg">
                                ISO Certified
                            </span>
                            <span className="text-sm font-medium bg-[#003366]/10 text-[#003366] px-4 py-2 rounded-lg">
                                Industry Leading Standards
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}