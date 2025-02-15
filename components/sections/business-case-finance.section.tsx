import React from 'react';

export const BusinessCaseFinanceSection = () => {
    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-6">

                {/* Main Content with Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Overview Card */}
                    <div className="bg-white rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-[#003366] mb-6">Generation Capacity</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-5xl font-bold text-[#003366]">2,000</div>
                                <div className="text-[#003366]/70 mt-1">MWp Total Capacity</div>
                            </div>
                            <div className="pt-4 border-t border-[#003366]/10">
                                <div className="text-3xl font-bold text-[#003366]">200</div>
                                <div className="text-[#003366]/70">MWp Phase 1/10</div>
                            </div>
                        </div>
                    </div>

                    {/* Investment Structure Card */}
                    <div className="bg-white rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-[#003366] mb-6">Investment Structure</h3>
                        <div className="space-y-6">
                            <div className="flex items-end gap-4">
                                <div className="flex-1">
                                    <div className="h-32 bg-[#003366] rounded-lg relative">
                                        <div className="absolute bottom-2 left-0 right-0 text-center text-white">
                                            <div className="text-2xl font-bold">30%</div>
                                            <div className="text-sm">Equity</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="h-48 bg-[#003366]/80 rounded-lg relative">
                                        <div className="absolute bottom-2 left-0 right-0 text-center text-white">
                                            <div className="text-2xl font-bold">70%</div>
                                            <div className="text-sm">Debt</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#003366]/10">
                                <div className="text-sm text-[#003366]/70">Investment per Phase</div>
                                <div className="text-2xl font-bold text-[#003366]">USD 180M</div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Card */}
                    <div className="bg-white rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-[#003366] mb-6">Key Benefits</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Long-term Security",
                                    description: "25-year Power Purchase Agreement",
                                },
                                {
                                    title: "Minimal Costs",
                                    description: "No fuel costs, low maintenance",
                                },
                                {
                                    title: "Stable Revenue",
                                    description: "Fixed tariff + inflation adjustment",
                                },
                            ].map((benefit, index) => (
                                <div key={index} className="group flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="font-medium text-[#003366]">{benefit.title}</div>
                                        <div className="text-sm text-[#003366]/70">{benefit.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-16 max-w-3xl">
                    <p className="text-[#003366]/70 leading-relaxed">
                        The financial structure is designed to maximize project sustainability and investor returns. With a total capacity of 2,000 MWp implemented across ten strategic phases, each requiring USD 180M investment, we maintain a balanced 70/30 debt-to-equity ratio. This approach, combined with our 25-year Power Purchase Agreement, ensures long-term stability and predictable revenue streams while minimizing operational costs through efficient solar technology deployment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BusinessCaseFinanceSection;