import React from 'react';
import Image from 'next/image';

export const DesalinationPlantSection = () => {
    return (
        <section className="relative w-full bg-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#003366] text-2xl font-bold">
                    BUSINESS CASE – DESALINATION PLANT
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

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Key Points */}
                <div className="space-y-6">
                    <h3 className="text-[#003366] text-2xl font-bold">Key Components:</h3>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-2">
                            <span className="text-[#003366] font-bold">a.</span>
                            <span className="text-[#003366]">water supply Hydrogen production</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#003366] font-bold">b.</span>
                            <span className="text-[#003366]">energy supply from ECO - POWER</span>
                        </li>
                    </ul>

                    {/* Interior Plant Image */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                            src="/desalination-interior.jpg"
                            alt="Desalination Plant Interior"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                            Interior view of desalination plant machinery and piping systems
                        </div>
                    </div>
                </div>

                {/* Right Column - Exterior Image */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                        src="/desalination-exterior.jpg"
                        alt="Desalination Plant Exterior"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                        Aerial view of the desalination plant facility
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesalinationPlantSection; 