import Image from "next/image";

export default function EnergySection() {
    return (
        <section className="relative w-full min-h-screen bg-white text-[#0A3D91] overflow-hidden">
            {/* Header with Title */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-wide">Energy - key issue of mankind</h1>
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
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Saudi Arabia Announcement */}
                    <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                        <blockquote className="text-2xl font-medium">
                            "Saudi Arabia will launch a renewable energy program in coming weeks that is expected to involve investment of between $30 billion and $50 billion by 2023"
                            <footer className="mt-4 text-lg">
                                - Energy Minister Khalid al-Falih
                            </footer>
                        </blockquote>
                    </div>

                    {/* Environmental Message */}
                    <div className="flex flex-col justify-center items-center bg-white/90 p-8 rounded-lg shadow-lg">
                        <div className="relative w-48 h-48 mb-8">
                            <Image
                                src="/globe.svg"
                                alt="Globe in Car Trunk"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-3xl font-bold text-center">
                            "We don't have a second PLANET in the trunk."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}