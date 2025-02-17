import React from 'react';
import Image from 'next/image';
import { spain } from '@/public/assets';

export const GolmudChinaSection = () => {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Golmud, China
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            Pioneering large-scale solar power generation in Asia&apos;s renewable energy landscape
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Image */}
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={spain}
                                alt="Golmud Solar Installation"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                                <p className="text-base text-[#003366]/70">
                                    The Golmud solar installation stands as a testament to China&apos;s commitment to renewable energy,
                                    showcasing advanced solar technology and efficient power generation at scale.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-12 py-6">
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">200 MW</div>
                                    <p className="text-sm text-[#003366]/50">Generation Capacity</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">850 ha</div>
                                    <p className="text-sm text-[#003366]/50">Installation Area</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-xl font-medium mb-3">Technical Excellence</h4>
                                <p className="text-base text-[#003366]/70">
                                    Utilizing cutting-edge solar technology and innovative installation techniques,
                                    the project demonstrates the viability of large-scale solar power generation
                                    in diverse geographical conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GolmudChinaSection;
