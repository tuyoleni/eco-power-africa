import dynamic from 'next/dynamic';
import Image from 'next/image';
import { spain } from '@/public/assets';

const Map = dynamic(() => import('../map'), { ssr: false });

export default function BreakthroughSection() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#0A3D91] overflow-hidden">
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Break-through Project
                        </h2>
                        <p className="text-xl text-[#0A3D91]/70 ">
                            First 20MWp PV-Park Worldwide - Spain
                        </p>
                    </div>

                    {/* Combined Map and Image Container */}
                    <div className="relative flex flex-col lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
                        <div className="flex flex-col lg:flex-row lg:h-full">
                            {/* Map Section */}
                            <div className="relative h-[400px] lg:h-full lg:w-[60%] w-full">
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
                                        color: '#0A3D91',
                                        weight: 2,
                                        fillOpacity: 0.1
                                    }}
                                    dragging={true}
                                    scrollWheelZoom={true}
                                    height="100%"
                                    width="100%"
                                />
                            </div>
                            {/* Image Section */}
                            <div className="relative h-[300px] lg:h-full lg:w-[40%] w-full">
                                <Image
                                    src={spain}
                                    alt="Solar Power Plant in Spain"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Area Information Overlay - Now at container level */}
                        <div className="absolute bottom-4 left-4 bg-white/60 p-6 rounded-xl shadow-lg backdrop-blur-md z-[999] transition-all hover:bg-white/80">
                            <h3 className="text-xl font-bold text-[#0A3D91] mb-2">
                                PS20 Solar Power Plant
                            </h3>
                            <div className="text-2xl font-bold text-[#0A3D91] mb-1">
                                20 MWp
                            </div>
                            <div className="text-sm text-[#0A3D91]/70">
                                Sanlúcar la Mayor, Seville
                            </div>
                        </div>
                    </div>

                    {/* Project Description - Left Aligned */}
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-semibold mb-6">
                            Pioneering Solar Innovation
                        </h3>
                        <p className="text-lg leading-relaxed text-[#0A3D91]/80 mb-6">
                            This groundbreaking project represents a significant milestone in solar energy development,
                            being the first 20MWp photovoltaic park worldwide. The installation showcases the
                            innovative integration of solar panels within agricultural land, demonstrating the
                            successful coexistence of renewable energy generation and land utilization.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-sm font-medium bg-blue-100 text-[#0A3D91] px-3 py-1 rounded-full">
                                20MWp Capacity
                            </span>
                            <span className="text-sm font-medium bg-blue-100 text-[#0A3D91] px-3 py-1 rounded-full">
                                Agricultural Integration
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}