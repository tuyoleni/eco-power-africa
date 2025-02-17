import React from 'react';
import Map from '../map';
import { LatLngExpression } from 'leaflet';

export const TrekkopjeMineralRightsSection = () => {
    const trekkopjeCoordinates: LatLngExpression[] = [
        [-22.1484, 14.7769],
        [-22.1650, 14.7935],
        [-22.1817, 14.7769],
        [-22.1650, 14.7602],
        [-22.1484, 14.7769],
    ];

    const mapCenter: LatLngExpression = [-22.1650, 14.7769];

    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Trekkopje Development Site
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            Strategic 3,500-hectare development area with secured long-term lease agreement
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Map */}
                        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                            <Map
                                center={mapCenter}
                                polygonPoints={trekkopjeCoordinates}
                                zoom={13}
                                height="100%"
                                width="100%"
                                polygonOptions={{
                                    color: '#003366',
                                    weight: 3,
                                    fillOpacity: 0.15,
                                    dashArray: '5, 5'
                                }}
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                                <p className="text-base text-[#003366]/70">
                                    The Trekkopje site represents a significant development opportunity with its
                                    strategic location and secured long-term lease agreement.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-12 py-6">
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">3,500 ha</div>
                                    <p className="text-sm text-[#003366]/50">Total Area</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">Erongo</div>
                                    <p className="text-sm text-[#003366]/50">Region</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-xl font-medium mb-3">Strategic Development Location</h4>
                                <p className="text-base text-[#003366]/70">
                                    The 3,500-hectare area offers excellent infrastructure access and development
                                    potential for sustainable energy projects, backed by a secure long-term lease agreement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrekkopjeMineralRightsSection;