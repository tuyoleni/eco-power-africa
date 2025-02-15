import Image from "next/image";
import { Frame, Transformers, Inverter } from "@/public/assets";

const qualityCards = [
    {
        title: "Power Transformers",
        description: "High-performance dry-type transformers designed for maximum efficiency and minimal maintenance, ensuring reliable power distribution in your solar installation.",
        image: Transformers,
        alt: "Industrial dry-type transformers"
    },
    {
        title: "Inverter Systems",
        description: "Advanced inverter technology that optimizes power conversion, featuring smart monitoring capabilities and superior grid integration performance.",
        image: Inverter,
        alt: "Solar power inverter system"
    },
    {
        title: "Mounting Solutions",
        description: "Custom-engineered mounting frames and rack systems designed for durability and easy installation, optimized for various terrain conditions.",
        image: Frame,
        alt: "Solar panel mounting frame system"
    }
];

export default function QualitySection() {
    return (
        <section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 text-[#0A3D91]">
            <div className="container mx-auto px-6">
                {/* Header with Title */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                        HIGH QUALITY FOR LIFE-CYCLE COSTING BENEFITS
                    </h2>
                    <p className="text-[#003366]/70 max-w-2xl leading-relaxed">
                        Our commitment to quality ensures long-term reliability and optimal performance of your investment
                    </p>
                </div>

                {/* Quality Points Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl">
                    {qualityCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                                <p className="text-[#003366]/70 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}