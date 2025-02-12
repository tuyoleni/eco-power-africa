import Image from "next/image";

export default function BusinessCaseSection() {
    return (
        <section className="relative w-full min-h-screen bg-white text-[#0A3D91] overflow-hidden">
            {/* Header with Title */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-wide">BUSINESS CASE - Built Own Operate</h1>
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
                <div className="mt-20 space-y-12">
                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Project Specifications */}
                        <div className="space-y-8">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">IPP License</h3>
                                <p className="text-3xl font-bold text-[#0A3D91]">2,000 MWp</p>
                            </div>

                            <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">Project Phases</h3>
                                <p className="text-3xl font-bold text-[#0A3D91]">PHASE 1 of 10</p>
                                <p className="text-2xl mt-2">200 MWp</p>
                            </div>
                        </div>

                        {/* Right Column - Solar Plant Image */}
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/solar-plant.jpg"
                                alt="Solar Power Plant"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Income Information */}
                    <div className="bg-yellow-400 p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">INCOME</h3>
                        <p className="text-4xl font-bold">30 MILLION USD</p>
                        <p className="text-xl mt-2">per month</p>
                    </div>

                    {/* Economics Reference */}
                    <div className="text-right">
                        <p className="text-xl font-medium">See the attached ECONOMICS</p>
                    </div>
                </div>
            </div>
        </section>
    );
}