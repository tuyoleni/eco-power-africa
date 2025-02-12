import React from 'react';
import Image from 'next/image';

export const BusinessCasePPASection = () => {
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

            {/* Subtitle */}
            <div className="mb-8">
                <h3 className="text-[#003366] text-2xl font-bold">
                    Built Own Operate – <span className="underline">PPA offtake driven</span>
                </h3>
            </div>

            {/* Main Diagram */}
            <div className="relative w-full aspect-[16/9] bg-[#1E3A8A] rounded-lg overflow-hidden">
                {/* Sun */}
                <div className="absolute left-[10%] top-[10%]">
                    <Image
                        src="/sun-icon.png"
                        alt="Sun"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>

                {/* Arrow with Text */}
                <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 bg-gray-200/90 px-6 py-2 rounded-lg">
                    <p className="text-[#003366] text-lg font-bold whitespace-nowrap">
                        KNOWLEDGE & ENGINEERING & FUNDING = PROFIT
                    </p>
                </div>

                {/* Solar System Components */}
                <div className="absolute bottom-[20%] w-full px-8">
                    <div className="flex items-center justify-between">
                        {/* PV Modules */}
                        <div className="text-center">
                            <Image
                                src="/pv-modules.png"
                                alt="PV Modules"
                                width={100}
                                height={80}
                                className="object-contain mb-2"
                            />
                            <p className="text-white text-sm">PV modules</p>
                        </div>

                        {/* PV Grid-tied Inverter */}
                        <div className="text-center">
                            <Image
                                src="/inverter.png"
                                alt="PV Grid-tied Inverter"
                                width={80}
                                height={80}
                                className="object-contain mb-2"
                            />
                            <p className="text-white text-sm">PV Grid-tied Inverter</p>
                        </div>

                        {/* Power Grid */}
                        <div className="text-center">
                            <Image
                                src="/power-grid.png"
                                alt="AC power grid"
                                width={100}
                                height={120}
                                className="object-contain mb-2"
                            />
                            <p className="text-white text-sm">AC power grid</p>
                        </div>
                    </div>
                </div>

                {/* Loading Diagram */}
                <div className="absolute bottom-[10%] right-[10%]">
                    <Image
                        src="/loading-diagram.png"
                        alt="Loading Diagram"
                        width={120}
                        height={80}
                        className="object-contain"
                    />
                    <p className="text-white text-sm text-center">Loading</p>
                </div>
            </div>
        </section>
    );
};

export default BusinessCasePPASection; 