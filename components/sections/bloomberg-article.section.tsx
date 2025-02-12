import React from 'react';
import Image from 'next/image';

export const BloombergArticleSection = () => {
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

            {/* Bloomberg Article Section */}
            <div className="bg-[#1a1a1a] text-white p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                    <Image
                        src="/bloomberg-logo.png"
                        alt="Bloomberg Logo"
                        width={120}
                        height={30}
                        className="object-contain"
                    />
                    <div className="text-sm text-gray-400">June 23, 2016 — 3:00 PM GST</div>
                </div>

                <h3 className="text-4xl font-bold mb-4">
                    The Way Humans Get Electricity Is About to Change Forever
                </h3>
                <p className="text-gray-300 mb-4">
                    These six shifts will transform markets over the next 25 years
                </p>

                <div className="text-gray-200 space-y-4">
                    <p>
                        The renewable-energy boom is here. Trillions of dollars will be invested over the next 25
                        years, driving some of the most profound changes yet in how humans get their electricity.
                    </p>
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">1. Solar Prices Keep Crashing</h4>
                        <p>
                            The price of solar power will continue to fall, until it becomes the cheapest form of power
                            in a rapidly expanding number of national markets. By 2026, utility-scale solar will be
                            competitive for the majority of the world.
                        </p>
                        <h4 className="text-xl font-bold">2. Solar Billions Become Solar Trillions</h4>
                        <p>
                            With solar power so cheap, investments will surge. Expect $3.7 trillion in solar
                            investments between now and 2040.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BloombergArticleSection; 