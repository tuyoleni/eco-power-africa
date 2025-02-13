import Image from "next/image";
import { ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { solar, sunburnspanel, panelicon } from "@/public/assets";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[140vh] md:h-[110vh] bg-white text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={solar}
                    alt="Solar Background"
                    fill
                    priority
                />
            </div>
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto h-full px-6 flex flex-col justify-between items-center py-16">
                {/* Main Content */}
                <div className="max-w-3xl text-center mt-56">
                    <h1 className="text-5xl font-bold mb-6">ECO POWER AFRICA</h1>
                    <p className="text-2xl mb-8">Powering Namibia's sustainable future with innovative solar solutions</p>
                    <Button className="bg-white text-black px-2 py-6 text-lg hover:bg-white/90 rounded-full">
                        <span className="ml-4">Explore Solutions</span>
                        <span className="ml-2 bg-black/10 p-2 rounded-full">
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </Button>
                </div>

                {/* Info Cards */}
                <div className="flex flex-col md:flex-row gap-6 w-full md:justify-center">
                    {/* Sun Power Card */}
                    <Card className="p-4 bg-white/40 backdrop-blur-2xl border-white/20 min-w-[400px] md:w-[450px] shrink-0">
                        <div className="flex flex-row items-center gap-4 h-full">
                            <div className="relative w-48 h-full">
                                <Image
                                    src={sunburnspanel}
                                    alt="Solar Panel in Desert"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-semibold mb-2 text-gray-900 text-lg">Endless Solar Power</h3>
                                <p className="text-base text-gray-700">Sun delivers per Square Meter in One Year the energy equivalent of 120 Litre Diesel</p>
                            </div>
                        </div>
                    </Card>

                    {/* Project Scale Card */}
                    <Card className="p-4 bg-white/40 backdrop-blur-2xl border-white/20 min-w-[300px] md:w-[300px] shrink-0">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="bg-white/20 p-3 rounded-full mb-2">
                                <DollarSign className="w-10 h-10 text-gray-900" />
                            </div>
                            <span className="text-3xl font-bold mb-1 text-gray-900">200 MWp</span>
                            <p className="text-base text-gray-700">Phase 1 Solar Power Plant</p>
                        </div>
                    </Card>

                    {/* Experience Card */}
                    <Card className="p-4 bg-white/40 backdrop-blur-2xl border-white/20 min-w-[300px] md:w-[350px] shrink-0">
                        <div className="flex flex-col gap-3 h-full">
                            <div className="relative w-20 h-20">
                                <Image
                                    src={panelicon}
                                    alt="Project References"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold mb-1 text-gray-900 text-lg">Proven Track Record</h3>
                                <p className="text-base text-gray-700">Over 2.5 GWp installed across various projects worldwide</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}