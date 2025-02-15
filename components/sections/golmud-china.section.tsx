import React from 'react';
import Image from 'next/image';
import { spain } from '@/public/assets';

export const GolmudChinaSection = () => {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 text-[#0A3D91] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Golmud, China
                        </h2>
                        <p className="text-xl text-[#0A3D91]/70">
                            Pioneering large-scale solar power generation in Asia&apos;s renewable energy landscape
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Image */}
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={spain}
                                alt="Golmud Solar Installation"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
                                <p className="text-lg text-[#0A3D91]/80">
                                    The Golmud solar installation stands as a testament to China&apos;s commitment to renewable energy,
                                    showcasing advanced solar technology and efficient power generation at scale.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-6 py-6">
                                <div>
                                    <div className="text-3xl font-bold text-[#0A3D91]">200 MW</div>
                                    <p className="text-sm text-[#0A3D91]/70">Generation Capacity</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#0A3D91]">850 ha</div>
                                    <p className="text-sm text-[#0A3D91]/70">Installation Area</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-xl font-semibold mb-3">Technical Excellence</h4>
                                <p className="text-[#0A3D91]/80">
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