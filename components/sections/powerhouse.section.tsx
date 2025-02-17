import Image from "next/image";
import { powerhouse } from "@/public/assets";

export default function PowerhouseSection() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8 py-20">
                <div className="mt-6 max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">850+ MWp Power House Infrastructure</h2>
                        <p className="text-[#003366]/70 text-xl max-w-3xl">
                            A world-class power distribution facility, delivering reliable and efficient energy solutions
                        </p>
                    </div>

                    {/* Power House Image with overlay */}
                    <div className="relative h-[70vh] w-full rounded-lg overflow-hidden shadow-2xl mb-12">
                        <Image
                            src={powerhouse}
                            alt="850+ MWp Power House Interior View"
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/50 to-transparent" />
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-16 mt-6">
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Advanced Infrastructure</h3>
                            <p className="text-[#003366]/70 text-base leading-relaxed">
                                With over 850 MWp installed capacity, our state-of-the-art power house facility showcases the highest standards in electrical
                                infrastructure. The installation features advanced switchgear and control systems,
                                demonstrating our commitment to reliable and efficient power distribution.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Quality Control</h3>
                            <p className="text-[#003366]/70 text-base leading-relaxed">
                                Managing an 850+ MWp facility requires meticulous maintenance and regular inspections to ensure optimal
                                performance. Our facility meets international safety standards and employs the latest
                                monitoring technology for consistent power delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
