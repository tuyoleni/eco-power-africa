import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { solar, sunburnspanel, panelicon } from "@/public/assets";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen bg-white text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={solar}
                    alt="Solar Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute w-full h-full inset-0 bg-black/10"></div>
            </div>

            {/* Hero Content */}
            <div className="relative flex flex-col justify-between min-h-screen container mx-auto px-4 md:px-6 py-8 md:py-16">
                {/* Main Content */}
                <div className="max-w-3xl mx-auto text-center mt-8 md:mt-16 space-y-4">
                    <h1 className="text-5xl font-bold mb-8">ECO POWER AFRICA</h1>
                    <p className="text-2xl mb-10">Empowering Namibia with clean, cost-effective, and scalable solar energy pioneering Africa&apos;s renewable revolution</p>
                    <Button
                        className="bg-white text-black px-2 py-6 text-lg hover:bg-white/90 rounded-full"
                        onClick={() => window.location.href = '/vision'}
                    >
                        <span className="ml-4">Our Vision</span>
                        <span className="ml-2 bg-black/10 p-2 rounded-full">
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </Button>
                </div>

                {/* Info Cards */}
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-8 md:mb-16 mt-16 md:mt-0">
                    {/* Sun Power Card */}
                    <Card className="p-4 bg-white/40 backdrop-blur-2xl border-white/20 flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-gray-900 text-lg">Sustainable Power Generation</h3>
                                <p className="text-base text-gray-700">Harnessing solar power effectively means replacing 120 liters of diesel per square meter annually, providing a cleaner and more cost-effective energy solution</p>
                            </div>
                            <div className="relative h-[200px] md:h-full">
                                <Image
                                    src={sunburnspanel}
                                    alt="Solar Panel in Desert"
                                    fill
                                    priority
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Experience Card */}
                    <Card className="p-4 bg-white/40 backdrop-blur-2xl border-white/20 flex-1">
                        <div className="flex flex-col gap-3">
                            <div className="relative w-20 h-20">
                                <Image
                                    src={panelicon}
                                    alt="Project References"
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-gray-900 text-lg">Global Impact</h3>
                                <p className="text-base text-gray-700">Proven success: Over 2.5 GWp installed globally, accelerating Africa&apos;s transition to renewable energy</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}