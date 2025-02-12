import React from 'react';
import Image from 'next/image';

export const BusinessCaseFinanceSection = () => {
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

            {/* Finance Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Project Specifications */}
                <div className="space-y-6">
                    {/* IPP License Box */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#003366]">
                        <h3 className="text-2xl font-bold text-[#003366] mb-4">IPP License</h3>
                        <div className="text-4xl font-bold text-[#003366]">
                            2,000 MWp
                        </div>
                    </div>

                    {/* Project Phases Box */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#003366]">
                        <h3 className="text-2xl font-bold text-[#003366] mb-4">Project Phases</h3>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-[#003366]">
                                PHASE 1 of 10
                            </div>
                            <div className="text-2xl text-[#003366]">
                                200 MWp
                            </div>
                        </div>
                    </div>

                    {/* Investment Details Box */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#003366]">
                        <h3 className="text-2xl font-bold text-[#003366] mb-4">Investment Structure</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Equity</span>
                                <span className="font-bold">30%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Debt</span>
                                <span className="font-bold">70%</span>
                            </div>
                            <div className="pt-3 border-t">
                                <div className="text-sm text-gray-600">Total Investment per Phase</div>
                                <div className="text-2xl font-bold text-[#003366]">USD 180 Million</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Financial Benefits */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-[#003366] mb-6">Financial Benefits</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Stable Long-term Returns</h4>
                                <p className="text-gray-600">25-year Power Purchase Agreement (PPA)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Low Operating Costs</h4>
                                <p className="text-gray-600">Minimal maintenance and no fuel costs</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Predictable Cash Flow</h4>
                                <p className="text-gray-600">Fixed tariff with inflation adjustment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessCaseFinanceSection;