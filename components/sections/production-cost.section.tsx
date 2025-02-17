import React from 'react';
import { LineChart } from "@/components/ui/line-chart";
import type { ChartData, ChartOptions } from 'chart.js';

export const ProductionCostSection = () => {

    const chartData: ChartData<'line'> = {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025', '2030'],
        datasets: [
            {
                label: 'Production Cost',
                data: [0.762, 0.651, 0.448, 0.378, 0.223, 0.157, 0.048, 0.036, 0.024],
                borderColor: '#003366',
                backgroundColor: 'rgba(0, 51, 102, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#003366',
                fill: true,
            }
        ]
    };

    const chartOptions: ChartOptions<'line'> = {
        scales: {
            y: {
                beginAtZero: true,
                max: 0.8,
                grid: {
                    color: '#E5E7EB',
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                title: {
                    display: true,
                    text: 'US dollars per kWh',
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            },
            x: {
                grid: {
                    color: '#E5E7EB',
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context: { parsed: { y: number } }) {
                        return `${(context.parsed.y * 100).toFixed(1)} cents/kWh`;
                    }
                }
            }
        }
    };

    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Solar Energy Cost Development
                        </h2>
                        <p className="text-xl text-[#003366]/70">
                            From an expensive alternative to the world&apos;s most affordable energy source
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Chart */}
                        <div className="relative aspect-[4/3] w-full bg-white p-8">
                            <LineChart
                                data={chartData}
                                options={chartOptions}
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Cost Evolution</h3>
                                <p className="text-base text-[#003366]/70">
                                    Solar power costs have dropped by over 90% since 1990 and are projected
                                    to fall below 1 US cent per kWh by 2030, making it the most economical
                                    choice for sustainable power generation.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-12 py-6">
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">1.5¢</div>
                                    <p className="text-sm text-[#003366]/50">Current Cost per kWh</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#003366]">1.0¢</div>
                                    <p className="text-sm text-[#003366]/50">Projected 2030 Cost</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-xl font-medium mb-3">Economic Impact</h4>
                                <p className="text-base text-[#003366]/70">
                                    This significant cost reduction makes solar power increasingly competitive
                                    with traditional energy sources, driving the global transition to
                                    sustainable energy solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionCostSection;