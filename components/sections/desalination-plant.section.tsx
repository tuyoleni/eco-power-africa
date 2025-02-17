import React from 'react';
import Image from 'next/image';
import { Droplet, Zap, Factory, ArrowUpCircle } from 'lucide-react';
import { interior, exterior } from '@/public/assets';

export const DesalinationPlantSection = () => {
    return (
        <section className="container mx-auto relative w-full bg-white py-12 md:py-20">
            {/* Header */}
            <div className="px-4 md:px-8 mb-16 md:mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
                    Desalination Infrastructure
                </h2>
                <p className="text-[#003366]/70 mt-6 max-w-3xl">
                    Advanced water treatment facility integrated with renewable energy systems,
                    providing sustainable water solutions for hydrogen production and industrial processes.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Process Components */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-24">
                    {/* Component 1 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Droplet className="w-4 h-4" />
                            Component 01
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Water Treatment</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">20M L/day</div>
                        <p className="text-[#003366]/70 mt-3">Advanced desalination and purification systems</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Multi-stage filtration</li>
                            <li>• Reverse osmosis technology</li>
                            <li>• Quality monitoring systems</li>
                        </ul>
                    </div>

                    {/* Component 2 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Component 02
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Energy Integration</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">100%</div>
                        <p className="text-[#003366]/70 mt-3">Renewable energy powered operations</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Solar power integration</li>
                            <li>• Energy efficiency systems</li>
                            <li>• Smart grid connection</li>
                        </ul>
                    </div>

                    {/* Component 3 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Factory className="w-4 h-4" />
                            Component 03
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Distribution Network</h3>
                        <div className="text-4xl font-light text-[#003366] mt-4">24/7</div>
                        <p className="text-[#003366]/70 mt-3">Continuous supply infrastructure</p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Automated distribution</li>
                            <li>• Real-time monitoring</li>
                            <li>• Maintenance protocols</li>
                        </ul>
                    </div>
                </div>

                {/* Technical Details */}
                <div className="bg-[#003366] rounded-lg p-4 md:p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6 md:mb-8">Facility Overview</h3>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="pb-8 md:pb-0 md:pr-12">
                            <h4 className="text-xl font-medium mb-4">Plant Infrastructure</h4>
                            <div className="space-y-4 text-white/80">
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={interior}
                                        alt="Desalination Plant Interior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium mb-2">Processing Systems</p>
                                    <p className="text-sm leading-relaxed">
                                        State-of-the-art machinery and piping systems designed for optimal efficiency
                                        and reliability in water treatment processes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 md:pt-0 md:pl-12">
                            <h4 className="text-xl font-medium mb-4">Operational Metrics</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-white/80 mb-2">Daily Production Capacity</p>
                                    <p className="text-3xl font-light flex items-center gap-2">
                                        <ArrowUpCircle className="w-8 h-8 text-white/80" />
                                        20M Liters
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-white/80 mb-2">Energy Efficiency Rating</p>
                                    <p className="text-3xl font-light flex items-center gap-2">
                                        <ArrowUpCircle className="w-8 h-8 text-white/80" />
                                        95%
                                    </p>
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden mt-6">
                                    <Image
                                        src={exterior}
                                        alt="Desalination Plant Exterior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesalinationPlantSection;
