import React from 'react';
import Map from '../map';
import { LatLngTuple } from 'leaflet';

export const GolmudChinaSection = () => {
    const center: LatLngTuple = [36.4159, 95.2802];

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#0A3D91] overflow-hidden">
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Large-Scale Solar Plants
                        </h2>
                        <p className="text-xl text-[#0A3D91]/70">
                            Exploring China's massive solar power infrastructure
                        </p>
                    </div>

                    {/* Map Container */}
                    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
                        <Map
                            center={center}
                            zoom={13}
                            height="100%"
                            width="100%"
                            dragging={true}
                            scrollWheelZoom={true}
                            polygonOptions={{
                                color: '#0A3D91',
                                weight: 2,
                                fillOpacity: 0.1
                            }}
                        />

                        {/* Area Information Overlay */}
                        <div className="absolute bottom-4 left-4 bg-white/60 p-6 rounded-xl shadow-lg backdrop-blur-md z-[999] transition-all hover:bg-white/80">
                            <h3 className="text-xl font-bold text-[#0A3D91] mb-2">
                                Golmud Solar Park
                            </h3>
                            <div className="text-2xl font-bold text-[#0A3D91] mb-1">
                                2,800 MW
                            </div>
                            <div className="text-sm text-[#0A3D91]/70">
                                60 km² | Golmud, Qinghai Province, China
                            </div>
                        </div>
                    </div>

                    {/* Project Description - Left Aligned */}
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-semibold mb-6">
                            Leading Solar Innovation
                        </h3>
                        <p className="text-lg leading-relaxed text-[#0A3D91]/80 mb-6">
                            The Golmud Solar Park represents China's commitment to renewable energy,
                            featuring extensive arrays of solar panels across the desert landscape.
                            This massive installation demonstrates how large-scale solar projects can
                            be effectively implemented in challenging environments.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-sm font-medium bg-blue-100 text-[#0A3D91] px-3 py-1 rounded-full">
                                2,800MW Capacity
                            </span>
                            <span className="text-sm font-medium bg-blue-100 text-[#0A3D91] px-3 py-1 rounded-full">
                                60 km² Area
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GolmudChinaSection;