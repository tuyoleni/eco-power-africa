import { Image } from "@heroui/react";
import { Card } from "@/components/ui/card";
import { sunburnspanel, litreDisel } from "@/public/assets"


export default function SunSection() {
    return (
        <section className="relative w-full h-auto bg-white text-[#0A3D91] overflow-hidden flex items-center">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-col mb-12 w-full pt-96">
                    <p className="text-lg md:text-xl text-[#0A3D91]/80">
                        God sends no bill for his inexhaustible energy source
                    </p>
                </div>

                <div className="w-full space-y-12 md:space-y-24">
                    <Card className="p-8 transition-opacity duration-300 hover:opacity-100 border-none shadow-none">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/2">
                                <div className="relative aspect-[4/3] w-full group flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-xl"></div>
                                    <Image
                                        radius="md"
                                        isBlurred={true}
                                        src={sunburnspanel}
                                        alt="Solar Panel in Desert"
                                        className="object-cover relative z-10 w-full h-full"
                                        width={600}
                                        height={450}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 space-y-4 pt-4">
                                <h3 className="text-2xl md:text-3xl font-bold">Sun delivers per Square Meter in One Year</h3>
                                <p className="text-base text-[#0A3D91]/70">
                                    The sun provides an incredible amount of energy to every square meter of Earth's surface annually.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 transition-opacity duration-300 hover:opacity-100 border-none shadow-none">
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                            <div className="md:w-1/2">
                                <div className="relative aspect-[4/3] w-full group flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-xl"></div>
                                    <Image
                                        radius="md"
                                        isBlurred={true}
                                        src={litreDisel}
                                        alt="120 Litre Diesel Barrel"
                                        className="object-contain relative z-10 w-full h-full"
                                        width={600}
                                        height={450}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold">The energy equivalent of</h3>
                                <p className="text-base text-[#0A3D91]/70">
                                    This amount of solar energy equals the power output of 120 litres of diesel fuel.
                                </p>
                                <p className="text-2xl font-bold">120 litre Diesel</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}