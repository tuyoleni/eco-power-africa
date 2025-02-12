import Image from "next/image";

export default function BreakthroughSection() {
    return (
        <section className="relative w-full min-h-screen bg-white text-[#0A3D91] overflow-hidden">
            {/* Header with Title */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-wide">REFERENCES - more than 850 MWp installed</h1>
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-semibold text-right">
                            ECO POWER AFRICA
                            <span className="block text-lg font-normal">NAMIBIA INVEST CC</span>
                        </h2>
                        <div className="w-16 h-16 relative">
                            <Image
                                src="/logo.svg"
                                alt="Eco Power Africa Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-12">BREAK-THROUGH PROJECT (SPAIN) - FIRST 20MWp PV-PARK WORLWIDE</h2>

                    {/* Project Image */}
                    <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/spain-breakthrough.jpg"
                            alt="First 20MWp PV-Park in Spain"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Project Description */}
                    <div className="mt-8 bg-white/90 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                        <p className="text-xl leading-relaxed">
                            This groundbreaking project represents a significant milestone in solar energy development,
                            being the first 20MWp photovoltaic park worldwide. The installation showcases the
                            innovative integration of solar panels within agricultural land, demonstrating the
                            successful coexistence of renewable energy generation and land utilization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}