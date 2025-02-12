import React from 'react';
import Image from 'next/image';

export const BusinessCaseInfoSection = () => {
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

            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#003366]">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">Power Generation</h3>
                    <div className="text-3xl font-bold text-[#003366]">2,000 MWp</div>
                    <div className="text-gray-600 mt-1">Total Capacity</div>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#003366]">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">Project Structure</h3>
                    <div className="text-3xl font-bold text-[#003366]">PPA Driven</div>
                    <div className="text-gray-600 mt-1">Built Own Operate</div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#003366]">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">Investment Model</h3>
                    <div className="flex justify-between text-lg">
                        <span>Equity / Debt</span>
                        <span className="font-bold">30/70</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessCaseInfoSection; 