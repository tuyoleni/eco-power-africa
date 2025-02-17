import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../map'), { ssr: false });

export default function BreakthroughSection() {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Spain Power Plant
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            First 20MWp PV-Park Worldwide - Spain
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Map & Image */}
                        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 flex">
                                <div className="w-full h-full relative">
                                    <Map
                                        center={[39.96066485, -5.69695]}
                                        zoom={15}
                                        polygonPoints={[
                                            [39.964957746086846, -5.70199314668425],
                                            [39.96604317103385, -5.700405708591534],
                                            [39.965319556317304, -5.698818270498818],
                                            [39.96347759338715, -5.698432136908717],
                                            [39.96410255065787, -5.696758891351526],
                                            [39.96318155900189, -5.694570801007533],
                                            [39.96163558083184, -5.692082384537872],
                                            [39.96087902558458, -5.691996577073418],
                                            [39.959464573754964, -5.69281174798589],
                                            [39.95857641462922, -5.6950427420621095],
                                            [39.95538552556865, -5.696072431635775],
                                            [39.95528683590457, -5.699376019017889],
                                            [39.9597606242334, -5.700448612323762],
                                            [39.962260554939604, -5.700620227252709],
                                            [39.964957746086846, -5.70199314668425],
                                        ]}
                                        polygonOptions={{
                                            color: '#003366',
                                            weight: 2,
                                            fillOpacity: 0.1
                                        }}
                                        height="100%"
                                        width="100%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                                <p className="text-base text-[#003366]/70">
                                    This groundbreaking project represents a significant milestone in solar energy development,
                                    being the first 20MWp photovoltaic park worldwide.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-12 py-6">
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">20 MWp</div>
                                    <p className="text-sm text-[#003366]/50">Generation Capacity</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">Seville</div>
                                    <p className="text-sm text-[#003366]/50">Location</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-xl font-medium mb-3">Pioneering Solar Innovation</h4>
                                <p className="text-base text-[#003366]/70">
                                    The installation showcases the innovative integration of solar panels within agricultural land,
                                    demonstrating the successful coexistence of renewable energy generation and land utilization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}