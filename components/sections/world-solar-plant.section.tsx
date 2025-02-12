import React from 'react';
import Image from 'next/image';

export const WorldSolarPlantSection = () => {
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

            {/* Main Content */}
            <div className="relative w-full aspect-[16/9] bg-gray-100">
                <Image
                    src="/topaz-solar-plant.jpg"
                    alt="Aerial view of Topaz Solar Plant"
                    fill
                    className="object-cover"
                />

                {/* Measurement Overlay */}
                <div className="absolute top-1/4 left-1/4 right-1/4 flex items-center justify-center">
                    <div className="bg-[#FFD700]/80 px-4 py-1 rounded-full">
                        <span className="text-xl font-bold">6 kilometer</span>
                    </div>
                </div>

                {/* Location Labels */}
                <div className="absolute top-1/3 left-0">
                    <span className="bg-white/80 px-2 py-1 text-sm">Caliente Range</span>
                </div>
                <div className="absolute top-1/4 right-0">
                    <span className="bg-white/80 px-2 py-1 text-sm">Temblor Range</span>
                </div>
            </div>

            {/* Info Box */}
            <div className="absolute bottom-8 right-8 bg-gray-200/90 p-4 rounded-lg">
                <h3 className="text-[#003366] text-xl font-bold mb-2">
                    TOPAZ SOLAR<br />
                    CALIORNIA
                </h3>
                <div className="bg-[#FFD700] px-3 py-1">
                    <span className="text-lg font-bold">WHY USA ?</span>
                </div>
            </div>
        </section>
    );
};

export default WorldSolarPlantSection; 