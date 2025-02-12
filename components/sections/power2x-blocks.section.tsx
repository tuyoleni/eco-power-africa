import React from 'react';
import Image from 'next/image';

export const Power2XBlocksSection = () => {
    return (
        <section className="relative w-full bg-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#003366] text-2xl font-bold">
                    ON EYELEVEL WITH BLACK HYDROGEN...
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-lg">ECO POWER AFRICA</span>
                    <span className="text-sm text-gray-600">NAMIBIA INVEST CC</span>
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/eco-power-logo.png"
                            alt="Eco Power Africa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-[#003366] text-3xl font-bold mb-8">
                POWER2X - functional blocks
            </h3>

            {/* Functional Blocks Diagram */}
            <div className="relative w-full min-h-[500px] p-4">
                {/* Power Production Block */}
                <div className="absolute left-0 top-0 flex items-center gap-4">
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-lg border-l-4 border-yellow-400">
                        <div className="font-bold">POWER PRODUCTION</div>
                        <div className="text-2xl font-bold text-[#003366]">1.6 usc</div>
                    </div>
                    <Image
                        src="/solar-array.jpg"
                        alt="Solar Array"
                        width={200}
                        height={150}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Power Storage Block */}
                <div className="absolute left-[20%] top-[30%] flex items-center gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-lg border-l-4 border-blue-400">
                        <div className="font-bold">POWER STORAGE</div>
                        <div className="text-2xl font-bold text-[#003366]">4.1 usc</div>
                    </div>
                    <Image
                        src="/powerline.jpg"
                        alt="Own dedicated powerline"
                        width={150}
                        height={100}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Power2X Refinery Block */}
                <div className="absolute left-[40%] top-[50%]">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-lg border-l-4 border-blue-400">
                        <div className="font-bold">POWER2X REFINERY</div>
                        <div className="text-2xl font-bold text-[#003366]">8.1 usc</div>
                    </div>
                </div>

                {/* Storage & Transport Block */}
                <div className="absolute left-[60%] top-[70%]">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-lg border-l-4 border-blue-400">
                        <div className="font-bold">STORAGE & TRANSPORT</div>
                        <div className="text-2xl font-bold text-[#003366]">9.1u sc</div>
                    </div>
                </div>

                {/* Engineering Notes */}
                <div className="absolute right-0 top-[20%] max-w-sm space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-[#003366] font-medium">
                            Further engineering will determine technology and whether a Hypride solution or not
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-[#003366] font-medium">
                            Further engineering will determine if size of storage
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-[#003366] font-medium">
                            resulting in a Green Hydrogen-Fuel FOB price below 2.41 usd/kg
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-[#003366] font-medium">
                            resulting in a Green Hydrogen-Fuel price below 2.73 usd/kg
                        </p>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="absolute bottom-0 left-0 text-sm text-gray-600">
                    all figures per kWh, without deduction of subsidies and Carbon Credits
                </div>
            </div>
        </section>
    );
};

export default Power2XBlocksSection; 