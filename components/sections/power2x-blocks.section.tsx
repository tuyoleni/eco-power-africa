import React from 'react';
import { ArrowUpCircle, Zap, Database, Factory, Truck } from 'lucide-react';

export const Power2XBlocksSection = () => {
    return (
        <section className="container mx-auto relative w-full bg-white py-20">
            {/* Header */}
            <div className="px-8 mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
                    Power2X Process
                </h2>
                <p className="text-[#003366]/70 mt-6 max-w-3xl">
                    Our innovative process transforms solar energy into green hydrogen fuel through
                    a four-stage system. Each stage is optimized for efficiency and sustainability,
                    with costs measured in USC (US Cents) per kilowatt-hour.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Step 1 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Stage 01
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Power Production</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">1.6 USC</div>
                        <p className="text-[#003366]/70 mt-3">Solar-powered energy generation using advanced photovoltaic technology</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• High-efficiency solar arrays</li>
                            <li>• Sustainable energy source</li>
                            <li>• Zero emission generation</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Database className="w-4 h-4" />
                            Stage 02
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Power Storage</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">4.1 USC</div>
                        <p className="text-[#003366]/70 mt-3">Advanced energy storage systems for consistent supply</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Grid-scale storage solutions</li>
                            <li>• Stable power output</li>
                            <li>• Optimized capacity management</li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Factory className="w-4 h-4" />
                            Stage 03
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Power2X Refinery</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">8.1 USC</div>
                        <p className="text-[#003366]/70 mt-3">Converting electrical power to hydrogen fuel</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Electrolysis process</li>
                            <li>• High conversion efficiency</li>
                            <li>• Quality control systems</li>
                        </ul>
                    </div>

                    {/* Step 4 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Truck className="w-4 h-4" />
                            Stage 04
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Storage & Transport</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">9.1 USC</div>
                        <p className="text-[#003366]/70 mt-3">Safe storage and efficient distribution network</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Compressed hydrogen storage</li>
                            <li>• Distribution infrastructure</li>
                            <li>• Safety protocols</li>
                        </ul>
                    </div>
                </div>

                {/* Engineering Notes */}
                <div className="bg-[#003366] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-8">Technical Specifications & Targets</h3>

                    <div className="grid md:grid-cols-2 gap-12 divide-x divide-white/10">
                        <div className="pr-12">
                            <h4 className="text-xl font-medium mb-4">Development Status</h4>
                            <div className="space-y-4 text-white/80">
                                <div>
                                    <p className="font-medium mb-2">Technology Selection</p>
                                    <p className="text-sm leading-relaxed">Currently evaluating optimal technology stack including
                                        Hypride solution feasibility for maximum efficiency and sustainability.</p>
                                </div>
                                <div>
                                    <p className="font-medium mb-2">Storage Infrastructure</p>
                                    <p className="text-sm leading-relaxed">Engineering analysis ongoing to determine optimal storage
                                        capacity based on production volume and market demand.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pl-12">
                            <h4 className="text-xl font-medium mb-4">Economic Targets</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-white/80 mb-2">Green Hydrogen-Fuel FOB Price Target</p>
                                    <p className="text-3xl font-light flex items-center gap-2">
                                        <ArrowUpCircle className="w-8 h-8 text-white/80" />
                                        2.41 USD/kg
                                    </p>
                                    <p className="text-sm text-white/80 mt-2">Free On Board pricing for bulk transport</p>
                                </div>
                                <div>
                                    <p className="text-sm text-white/80 mb-2">Final Green Hydrogen-Fuel Price Target</p>
                                    <p className="text-3xl font-light flex items-center gap-2">
                                        <ArrowUpCircle className="w-8 h-8 text-white/80" />
                                        2.73 USD/kg
                                    </p>
                                    <p className="text-sm text-white/80 mt-2">End-user delivery price point</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-sm text-white/80">
                            <span className="font-medium">Important Note:</span> All power production and processing costs are
                            expressed in USC (US Cents) per kilowatt-hour. Final pricing excludes applicable subsidies and
                            Carbon Credits, which may further reduce end-user costs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Power2XBlocksSection;