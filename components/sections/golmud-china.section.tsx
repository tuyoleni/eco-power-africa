import React from 'react';
import Image from 'next/image';

export const GolmudChinaSection = () => {
    return (
        <section className="relative w-full bg-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#003366] text-2xl font-bold">
                    WORLD SOLAR PV POWER PLANT MARKET
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-lg">ECO POWER AFRICA</span>
                    <span className="text-sm text-gray-600">NAMIBIA INVEST CC</span>
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/eco-power-logo.png"
                            alt="Eco Power Africa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-[#003366] text-3xl font-bold">GOLMUD CHINA</h3>
                <span className="text-xl font-bold">-</span>
                <div className="bg-yellow-400 px-4 py-1">
                    <span className="text-xl font-bold">WHY CHINA ?</span>
                </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                    src="/golmud-china-solar.jpg"
                    alt="Aerial view of Golmud China Solar Plant"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Optional Description */}
            <div className="mt-6 bg-white/90 p-4 rounded-lg max-w-3xl">
                <p className="text-lg text-gray-700">
                    Aerial view of the massive Golmud solar power installation in China,
                    showcasing extensive arrays of solar panels across the desert landscape
                    with maintenance access roads between panel sections.
                </p>
            </div>
        </section>
    );
};

export default GolmudChinaSection; 