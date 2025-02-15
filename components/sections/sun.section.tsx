import Image from "next/image";
import { sunburnspanel } from "@/public/assets";

export default function SunSection() {
    return (
        <section className="w-full">
            <div className="container mx-auto px-4 py-20">
                <div className="overflow-hidden">
                    <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-12 p-8">
                        {/* Image Container */}
                        <div className="w-full md:w-1/3">
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src={sunburnspanel}
                                    alt="Solar Panel Installation"
                                    fill
                                    className="rounded-lg object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="w-full md:w-[50%] space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A3D91] leading-tight max-w-2xl">
                                Solar Power Comparison
                            </h3>
                            <p className="text-lg text-[#0A3D91]/70 leading-relaxed max-w-2xl">
                                In just one year, a single square meter of solar panel can generate the same amount of energy as burning 120 litres of diesel fuel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}