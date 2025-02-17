import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../map'), { ssr: false });

export const BusinessCaseDevelopmentSection = () => {
    return (
        <section className="relative container mx-auto w-full bg-white px-8 py-20">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl mb-8">
                <Map
                    center={[-22.2372, 15.0324]}
                    zoom={15}
                    polygonPoints={[
                        [-22.2272, 15.0224],
                        [-22.2372, 15.0324],
                        [-22.2472, 15.0424],
                        [-22.2372, 15.0524],
                        [-22.2272, 15.0224],
                    ]}
                    polygonOptions={{
                        color: '#003366',
                        weight: 2,
                        fillOpacity: 0.1
                    }}
                />

                {/* Area Information */}
                <div className="absolute bottom-4 left-4 bg-white/60 p-8 rounded-lg shadow-lg backdrop-blur-md z-[999] transition-all hover:bg-white/80">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">
                        TREKKOPJE
                    </h3>
                    <div className="text-2xl font-bold text-[#003366] mb-2">
                        2.500 ha
                    </div>
                    <div className="text-sm text-[#003366]/70">
                        overlapping interests
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mt-6">
                <p className="text-[#003366]/70 text-base leading-relaxed">
                    Situated in the heart of Namibia&apos;s Erongo Region, the Trekkopje site presents a strategic opportunity for renewable energy development. With 2,500 hectares of available land and key infrastructure points already identified, this location offers optimal conditions for solar power installation and sustainable energy generation.
                </p>
            </div>
        </section>
    );
};

export default BusinessCaseDevelopmentSection;