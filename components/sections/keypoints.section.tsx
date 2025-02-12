import Image from "next/image";

export default function KeypointsSection() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0A3D91] to-[#1E5FC1] text-white overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-wide">KEYPOINTS</h1>
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

                {/* Key Points List */}
                <div className="mt-20 space-y-12">
                    <div className="flex items-start gap-6">
                        <div className="w-6 h-6 mt-1 flex-shrink-0">
                            <Image
                                src="/arrow-right.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-2xl">ENERGY - key issue of mankind</p>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-6 h-6 mt-1 flex-shrink-0">
                            <Image
                                src="/arrow-right.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-2xl font-bold underline">SUN - ENDLESS POWER since 3 billion years</p>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-6 h-6 mt-1 flex-shrink-0">
                            <Image
                                src="/arrow-right.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-2xl">REFERENCES - a partner to trust in</p>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-6 h-6 mt-1 flex-shrink-0">
                            <Image
                                src="/arrow-right.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-2xl">WORLD SOLAR PV POWER PLANT MARKET</p>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-6 h-6 mt-1 flex-shrink-0">
                            <Image
                                src="/arrow-right.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-2xl">BASIC BUSINESS CASES</p>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-6 h-6 mt-1 flex-shrink-0">
                            <Image
                                src="/arrow-right.svg"
                                alt="Arrow"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-2xl">Possible BUSINESS CASE with ORANO <span className="bg-yellow-400 text-blue-900 px-2">DISCUSSION</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}