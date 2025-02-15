import React, { useState } from 'react';
import Map from '../map';
import { LatLngExpression } from 'leaflet';

export const TrekkopjeMineralRightsSection = () => {
    const [showFarmInfo, setShowFarmInfo] = useState(true);

    // Actual coordinates for Trekkopje Area based on Google Earth data
    const trekkopjeCoordinates: LatLngExpression[] = [
        [-22.1484, 14.7769], // Northwest corner near Arandis
        [-22.1650, 14.7935], // Northeast corner
        [-22.1817, 14.7769], // Southeast corner
        [-22.1650, 14.7602], // Southwest corner
        [-22.1484, 14.7769], // Back to start to close the polygon
    ];

    // Center coordinates from Google Earth (22°09'54.12"S 14°46'36.81"E)
    const mapCenter: LatLngExpression = [-22.1650, 14.7769];

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Trekkopje Development Site
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            Strategic 3,500-hectare development area with secured long-term lease agreement
                        </p>
                    </div>

                    {/* Map Container */}
                    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
                        <Map
                            center={mapCenter}
                            polygonPoints={trekkopjeCoordinates}
                            zoom={13}
                            height="100%"
                            width="100%"
                            dragging={true}
                            scrollWheelZoom={true}
                            polygonOptions={{
                                color: '#003366',
                                weight: 3,
                                fillOpacity: 0.15,
                                dashArray: '5, 5'
                            }}
                        />

                        {/* Site Information Overlay */}
                        <div className="absolute bottom-4 left-4 bg-white/60 p-6 rounded-xl shadow-lg backdrop-blur-md z-[999] transition-all hover:bg-white/80">
                            <h3 className="text-xl font-bold text-[#003366] mb-2">
                                Trekkopje Site
                            </h3>
                            <div className="text-2xl font-bold text-[#003366] mb-1">
                                3,500 ha
                            </div>
                            <div className="text-sm text-[#003366]/70">
                                Secured Long-term Lease | Erongo Region
                            </div>
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-semibold mb-6">
                            Strategic Development Location
                        </h3>
                        <p className="text-lg leading-relaxed text-[#003366]/80 mb-6">
                            The Trekkopje site represents a significant development opportunity with its
                            strategic location and secured long-term lease agreement. The 3,500-hectare area
                            offers excellent infrastructure access and development potential for sustainable
                            energy projects.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm font-medium bg-blue-100 text-[#003366] px-3 py-1 rounded-full">
                                3,500 ha Area
                            </span>
                            <span className="text-sm font-medium bg-blue-100 text-[#003366] px-3 py-1 rounded-full">
                                Long-term Lease
                            </span>
                            <span className="text-sm font-medium bg-blue-100 text-[#003366] px-3 py-1 rounded-full">
                                Infrastructure Ready
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrekkopjeMineralRightsSection;