import React from 'react';
import Map from '../map';
import { LatLngTuple } from 'leaflet';

export const WorldSolarPlantSection = () => {
    const center: LatLngTuple = [35.3880, -120.0726];
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Topaz Solar Farm
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            Exploring the impact of utility-scale solar power generation
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Map */}
                        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                            <Map
                                center={center}
                                zoom={13}
                                height="100%"
                                width="100%"
                                polygonOptions={{
                                    color: '#003366',
                                    weight: 2,
                                    fillOpacity: 0.1
                                }}
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                                <p className="text-base text-[#003366]/70">
                                    The Topaz Solar Farm represents a milestone in solar energy infrastructure, showcasing how large-scale
                                    solar installations can effectively contribute to sustainable power generation.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-12 py-6">
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">550 MW</div>
                                    <p className="text-sm text-[#003366]/50">Generation Capacity</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">25.6 km²</div>
                                    <p className="text-sm text-[#003366]/50">Installation Area</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-xl font-medium mb-3">Setting New Standards</h4>
                                <p className="text-base text-[#003366]/70">
                                    With its strategic location and vast array of solar panels, it serves as a blueprint for future
                                    renewable energy projects worldwide, demonstrating the viability of utility-scale solar power generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldSolarPlantSection;