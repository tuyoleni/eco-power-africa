import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";

export default function ReferencesSection() {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Our Portfolio
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            2.5+ GWp installed worldwide - From Airports to Rooftops
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="space-y-24">
                        {portfolioProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="grid md:grid-cols-2 gap-16 items-center"
                            >
                                {/* Left Column - Image */}
                                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Right Column - Content */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-sm font-medium bg-[#003366]/10 text-[#003366] px-4 py-2 rounded-lg">
                                                {project.type}
                                            </span>
                                            <span className="text-sm font-medium bg-[#003366] text-white px-4 py-2 rounded-lg">
                                                {project.capacity} MWp
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                        <p className="text-base text-[#003366]/70">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center text-[#003366]/70">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-base">{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}