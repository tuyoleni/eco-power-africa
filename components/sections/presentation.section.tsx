import Image from "next/image";

export default function PresentationSection() {
    return (
        <section className="relative w-full min-h-screen bg-white text-[#0A3D91] overflow-hidden">
            {/* Background Image with Curved Lines Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    {/* Solar Panel Background */}
                    <div className="absolute inset-0 bg-[url('/solar-panels.jpg')] bg-cover bg-center opacity-80" />

                    {/* Curved Lines Overlay */}
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/curved-lines.svg')] bg-contain bg-right-top bg-no-repeat" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col justify-between h-screen">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">ECO POWER AFRICA</h1>
                        <h2 className="text-2xl">NAMIBIA INVEST CC</h2>
                    </div>
                    <div className="w-24 h-24 relative">
                        <Image
                            src="/logo.svg"
                            alt="Eco Power Africa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-end text-right mt-auto">
                    <h3 className="text-3xl font-bold mb-8">
                        GERMAN HEART & LOCAL CONTENT
                    </h3>

                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold">PROJECT PRESENTATION</h4>
                        <div className="text-xl">
                            <p className="mb-2">TO</p>
                            <p className="font-bold mb-1">Energy Utilities Partners</p>
                            <p className="mb-4">CEO - Henk van der Merwe</p>
                            <p>WINDHOEK - JANUARY 21st 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}