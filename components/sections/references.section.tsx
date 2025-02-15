import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";

export default function ReferencesSection() {
    return (
        <section className="w-full">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mb-24">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0A3D91] leading-tight mb-4">
                        Our Portfolio
                    </h3>
                    <p className="text-lg text-[#0A3D91]/70 leading-relaxed">
                        2.5+ GWp installed worldwide - From Airports to Rooftops
                    </p>
                </div>

                <div className="space-y-20">
                    {portfolioProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 md:gap-12`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 space-y-4 md:py-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="bg-blue-100 text-[#0A3D91] px-3 py-1 rounded-full text-sm font-medium">
                                        {project.type}
                                    </span>
                                    <div className="bg-[#0A3D91] text-white px-3 py-1 rounded">
                                        <span className="text-xl font-bold">{project.capacity}</span>
                                        <span className="text-sm ml-1">MWp</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#0A3D91]">{project.title}</h3>
                                <p className="text-[#0A3D91]/70 leading-relaxed">{project.description}</p>

                                <p className="text-[#0A3D91]/70 flex items-center pt-2">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}