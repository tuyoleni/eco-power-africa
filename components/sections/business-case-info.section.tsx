import React from 'react';
import { Card } from "@/components/ui/card";

export const BusinessCaseInfoSection = () => {
    return (
        <section className="w-full">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D91] mb-4">Project Overview</h2>
                    <p className="text-lg text-[#0A3D91]/70">Key metrics and structure of our solar power initiative</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="p-8 hover:shadow-lg transition-all duration-300">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#0A3D91]">Power Generation</h3>
                            <div className="text-3xl md:text-4xl font-bold text-[#0A3D91]">2,000 MWp</div>
                            <p className="text-[#0A3D91]/70">Total Capacity</p>
                        </div>
                    </Card>

                    <Card className="p-8 hover:shadow-lg transition-all duration-300">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#0A3D91]">Project Structure</h3>
                            <div className="text-3xl md:text-4xl font-bold text-[#0A3D91]">PPA Driven</div>
                            <p className="text-[#0A3D91]/70">Build Own Operate</p>
                        </div>
                    </Card>

                    <Card className="p-8 hover:shadow-lg transition-all duration-300">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#0A3D91]">Investment Model</h3>
                            <div className="text-3xl md:text-4xl font-bold text-[#0A3D91]">30/70</div>
                            <p className="text-[#0A3D91]/70">Equity / Debt Ratio</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default BusinessCaseInfoSection;