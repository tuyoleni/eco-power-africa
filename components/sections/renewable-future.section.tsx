import React from 'react';

export const RenewableFutureSection = () => {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 text-[#0A3D91] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Renewable Future
                        </h2>
                        <p className="text-xl text-[#0A3D91]/70">
                            Building a sustainable energy infrastructure for generations to come
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Our Vision</h3>
                            <p className="text-lg text-[#0A3D91]/80">
                                We envision a future where renewable energy powers sustainable development across Africa,
                                creating economic opportunities while preserving our environment for future generations.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Our Commitment</h3>
                            <p className="text-lg text-[#0A3D91]/80">
                                Through innovative technology and strategic partnerships, we&apos;re committed to making clean,
                                reliable energy accessible and affordable across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenewableFutureSection;