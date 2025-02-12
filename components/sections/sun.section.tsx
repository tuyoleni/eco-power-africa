import Image from "next/image";

export default function SunSection() {
    return (
        <section className="relative w-full min-h-screen bg-white text-[#0A3D91] overflow-hidden">
            {/* Header with Title */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-wide">SUN - reliable power since 4 billion years</h1>
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
                    {/* God's Energy Message */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-8">God sends no bill for his inexhaustible energy source</h2>
                    </div>

                    {/* Solar Power Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Solar Panel Output */}
                        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">Sun delivers per Square Meter in One Year</h3>
                            <div className="relative w-full h-64">
                                <Image
                                    src="/solar-panel-desert.jpg"
                                    alt="Solar Panel in Desert"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Diesel Equivalent */}
                        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">The energy equivalent of</h3>
                            <div className="flex flex-col items-center">
                                <div className="relative w-48 h-64 mb-4">
                                    <Image
                                        src="/diesel-barrel.jpg"
                                        alt="120 Litre Diesel Barrel"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-3xl font-bold">120 litre Diesel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}