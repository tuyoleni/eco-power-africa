import Image from "next/image";

export default function QualitySection() {
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
                    {/* Title */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center border-2 border-yellow-400 py-4 px-8 inline-block">
                            HIGH QUALITY FOR LIFE-CYCLE COSTING BENEFITS
                        </h2>
                    </div>

                    {/* Quality Points */}
                    <div className="space-y-12 max-w-4xl mx-auto">
                        {/* Transformers */}
                        <div className="flex items-start gap-8">
                            <div className="w-1/3 relative h-48">
                                <Image
                                    src="/transformers.jpg"
                                    alt="Dry-type transformers"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-4">Transformers</h3>
                                <p className="text-lg">Reliability and ease of sustaining of dry-type transformers justify higher investment costs</p>
                            </div>
                        </div>

                        {/* Support Frame */}
                        <div className="flex items-start gap-8">
                            <div className="w-1/3 relative h-48">
                                <Image
                                    src="/inverter.jpg"
                                    alt="Support frame and inverter"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-4">Support Frame</h3>
                                <p className="text-lg">Innovative construction saves material and especially assembly costs</p>
                            </div>
                        </div>

                        {/* Long-term Service */}
                        <div className="flex items-start gap-8">
                            <div className="w-1/3 relative h-48">
                                <Image
                                    src="/rack-system.jpg"
                                    alt="6.4 km custom designed rack system"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-4">Long-term Service</h3>
                                <p className="text-lg">Long-term service contracts and a PV plant design targeted at longevity give investors a high degree of security.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}