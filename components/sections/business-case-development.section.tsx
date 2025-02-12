import React from 'react';
import Image from 'next/image';

export const BusinessCaseDevelopmentSection = () => {
    return (
        <section className="relative w-full bg-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#003366] text-2xl font-bold">
                    BUSINESS CASE – DEVELOPMENT
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

            {/* Map Container */}
            <div className="relative w-full aspect-[16/9]">
                {/* Satellite Map */}
                <div className="relative w-full h-full">
                    <Image
                        src="/trekkopje-map.jpg"
                        alt="Trekkopje Area Satellite View"
                        fill
                        className="object-cover rounded-lg"
                    />

                    {/* Area Overlay */}
                    <div className="absolute inset-0">
                        {/* Red boundary lines would be drawn here */}
                        {/* This could be achieved with SVG or border styling */}
                    </div>

                    {/* Area Information */}
                    <div className="absolute top-4 right-4 bg-white/90 p-4 rounded-lg shadow-lg">
                        <h3 className="text-[#003366] text-3xl font-bold mb-2">
                            TREKKOPJE
                        </h3>
                        <div className="text-2xl font-bold text-[#003366]">
                            2.500 ha
                        </div>
                        <div className="text-lg text-[#003366]">
                            overlapping interests
                        </div>
                    </div>

                    {/* Markers */}
                    <div className="absolute top-[15%] right-[20%] w-4 h-4 bg-yellow-400 rounded-full" />
                    <div className="absolute bottom-[20%] right-[10%] w-4 h-4 bg-yellow-400 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default BusinessCaseDevelopmentSection; 