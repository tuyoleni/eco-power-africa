import React from 'react';
import Image from 'next/image';

export const TrekkopjeMineralRightsSection = () => {
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
            <div className="relative w-full aspect-[16/9] bg-white rounded-lg overflow-hidden">
                {/* Main Map */}
                <div className="relative w-full h-full">
                    <Image
                        src="/trekkopje-mineral-map.jpg"
                        alt="Trekkopje Mineral Rights Map"
                        fill
                        className="object-contain"
                    />

                    {/* Mineral Rights Legend */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
                        <div className="text-sm font-bold mb-2">Active - Mineral Rights (1)</div>
                        <div className="flex items-center gap-2">
                            <span>151</span>
                            <span>Active</span>
                        </div>
                        <div className="text-sm">
                            Uramin Namibia (Pty) Ltd (100%)
                            <br />
                            Mining Licence
                        </div>
                    </div>

                    {/* Farm Information Popup */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-lg shadow-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold">Trekkopje</span>
                            <button className="text-gray-500">&times;</button>
                        </div>
                        <div className="space-y-1">
                            <div className="flex gap-2">
                                <span className="font-bold">Farm Name:</span>
                                <span>Trekkopje</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold">Farm Number:</span>
                                <span>120</span>
                            </div>
                        </div>
                    </div>

                    {/* Area Highlight */}
                    <div className="absolute inset-0">
                        <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
                            <path
                                d="M200,200 L400,150 L500,300 L300,400 Z"
                                fill="none"
                                stroke="#00FFFF"
                                strokeWidth="2"
                                className="opacity-80"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrekkopjeMineralRightsSection; 