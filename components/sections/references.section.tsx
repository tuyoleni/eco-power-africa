import Image from "next/image";

export default function ReferencesSection() {
    return (
        <section className="relative w-full min-h-screen bg-white text-[#0A3D91] overflow-hidden">
            {/* Header with Title */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-wide">REFERENCES - more than 2.5 GWp installed</h1>
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
                    <h2 className="text-3xl font-bold mb-12">IT VARIES: AIRPORT Landing Strips – Rooftop - Facades</h2>

                    {/* Reference Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Saarbrücken Airport Project */}
                        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                            <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src="/saarbrucken-airport.jpg"
                                    alt="PV power plant at Saarbrücken Airport"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">PV power plant at Saarbrücken</h3>
                            <p className="text-xl">(Germany): 4 MWp. Airport</p>
                        </div>

                        {/* Göttelborn Project */}
                        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                            <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src="/gottelborn-plant.jpg"
                                    alt="PV power plant Göttelborn"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">PV power plant Göttelborn</h3>
                            <p className="text-xl">(Germany): 8 MWp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}