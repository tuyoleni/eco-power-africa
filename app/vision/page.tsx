import React from 'react';
import { Metadata } from 'next';
import { Target, Leaf, Users, Cpu, HandshakeIcon, Globe, Rocket, LineChart, Building2, Network } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Vision | Eco Power Africa',
    description: 'Empowering Africa through sustainable energy solutions and environmental conservation.',
};

export default function Vision() {
    return (
        <section className="container mx-auto relative w-full bg-white py-20">
            {/* Header */}
            <div className="px-4 md:px-8 mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
                    Our Vision
                </h2>
                <p className="text-[#003366]/70 mt-6 max-w-3xl">
                    Pioneering sustainable energy solutions for a greener, more prosperous Africa.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Vision Blocks */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-24">
                    {/* Block 1 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Vision 01
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Sustainable Energy Future</h3>
                        <p className="text-[#003366]/70 mt-3">
                            We envision an Africa where clean, reliable, and affordable energy is accessible to all.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Clean energy accessibility</li>
                            <li>• Reliable power systems</li>
                            <li>• Affordable solutions</li>
                        </ul>
                    </div>

                    {/* Block 2 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Leaf className="w-4 h-4" />
                            Vision 02
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Environmental Conservation</h3>
                        <p className="text-[#003366]/70 mt-3">
                            Through innovative renewable energy solutions, we aim to reduce carbon emissions.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Carbon reduction</li>
                            <li>• Resource protection</li>
                            <li>• Biodiversity conservation</li>
                        </ul>
                    </div>

                    {/* Block 3 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Vision 03
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Community Empowerment</h3>
                        <p className="text-[#003366]/70 mt-3">
                            Creating opportunities through job creation, skills development, and economic growth.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Job creation</li>
                            <li>• Skills development</li>
                            <li>• Economic growth</li>
                        </ul>
                    </div>

                    {/* Block 4 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            Vision 04
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Technology & Innovation</h3>
                        <p className="text-[#003366]/70 mt-3">
                            Leveraging cutting-edge technology to create smart, sustainable infrastructure.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Smart infrastructure</li>
                            <li>• Innovative solutions</li>
                            <li>• Sustainable technology</li>
                        </ul>
                    </div>

                    {/* Block 5 */}
                    <div>
                        <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2">
                            <HandshakeIcon className="w-4 h-4" />
                            Vision 05
                        </span>
                        <h3 className="text-2xl font-bold text-[#003366] mt-2">Partnerships & Collaboration</h3>
                        <p className="text-[#003366]/70 mt-3">
                            Fostering strong partnerships with governments, organizations, and communities.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-[#003366]/70">
                            <li>• Strategic partnerships</li>
                            <li>• Community engagement</li>
                            <li>• Sustainable development</li>
                        </ul>
                    </div>
                </div>

                {/* Additional Info Box */}
                <div className="bg-[#003366] rounded-lg p-4 md:p-8 text-white">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Globe className="w-6 h-6" />
                        Our Commitment
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:divide-x divide-white/10">
                        <div className="md:pr-12">
                            <h4 className="text-xl font-medium mb-4 flex items-center gap-3">
                                <Rocket className="w-5 h-5" />
                                Impact Goals
                            </h4>
                            <div className="space-y-4 text-white/80">
                                <div>
                                    <p className="font-medium mb-2 flex items-center gap-2">
                                        <Leaf className="w-4 h-4" />
                                        Environmental Impact
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        Committed to reducing carbon emissions and promoting sustainable energy practices across Africa.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium mb-2 flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        Social Development
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        Creating lasting positive impact through community engagement and economic empowerment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:pl-12">
                            <h4 className="text-xl font-medium mb-4 flex items-center gap-3">
                                <LineChart className="w-5 h-5" />
                                Future Outlook
                            </h4>
                            <div className="space-y-4 text-white/80">
                                <div>
                                    <p className="font-medium mb-2 flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        Innovation Pipeline
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        Continuous development of new technologies and solutions for sustainable energy.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium mb-2 flex items-center gap-2">
                                        <Network className="w-4 h-4" />
                                        Growth Strategy
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        Expanding our reach across Africa while maintaining our commitment to sustainability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}