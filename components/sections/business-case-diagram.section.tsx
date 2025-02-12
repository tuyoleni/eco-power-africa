import React from 'react';
import Image from 'next/image';

export const BusinessCaseDiagramSection = () => {
    return (
        <section className="relative w-full bg-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#003366] text-2xl font-bold">
                    BUSINESS CASE – Built Own Operate
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

            {/* System Diagram */}
            <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-sky-600 to-sky-800 rounded-lg overflow-hidden p-8">
                {/* Sun and Solar Panel Section */}
                <div className="absolute left-[10%] top-[15%] flex flex-col items-center">
                    <div className="relative w-24 h-24">
                        <Image
                            src="/sun-icon.png"
                            alt="Sun"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 relative w-32 h-24">
                        <Image
                            src="/solar-panel.png"
                            alt="Solar Panel"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Central Flow Arrow */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/90 px-8 py-3 rounded-lg shadow-lg">
                        <h3 className="text-[#003366] text-xl font-bold whitespace-nowrap">
                            KNOWLEDGE & ENGINEERING & FUNDING = PROFIT
                        </h3>
                    </div>
                </div>

                {/* Grid Connection */}
                <div className="absolute right-[15%] top-1/2 transform -translate-y-1/2">
                    <div className="relative w-32 h-48">
                        <Image
                            src="/power-grid.png"
                            alt="Power Grid"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Bottom Components */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-12 items-end">
                    <div className="text-center">
                        <div className="relative w-24 h-24 mb-2">
                            <Image
                                src="/inverter.png"
                                alt="Grid-tied Inverter"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-white text-sm">PV Grid-tied Inverter</span>
                    </div>
                    <div className="text-center">
                        <div className="relative w-24 h-24 mb-2">
                            <Image
                                src="/loading-diagram.png"
                                alt="Loading"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-white text-sm">Loading</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessCaseDiagramSection; 