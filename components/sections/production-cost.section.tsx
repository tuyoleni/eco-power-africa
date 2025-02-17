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
                backgroundColor: 'rgba(0, 51, 102, 0.2)',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#003366',
                fill: true,
            }
        ]
    };

    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
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
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-white/10 text-[#003366]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-8 md:mb-16 p-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                            Solar Energy Cost Development
                        </h2>
                        <p className="text-lg md:text-xl text-[#003366]/70">
                            From an expensive alternative to the world&apos;s most affordable energy source
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                        {/* Left Column - Chart */}
                        <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-sm">
                            <LineChart
                                data={chartData}
                                options={chartOptions}
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-4 md:space-y-6 p-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3">Cost Evolution</h3>
                                <p className="text-base text-[#003366]/70">
                                    Solar power costs have dropped by over 90% since 1990 and are projected
                                    to fall below 1 US cent per kWh by 2030, making it the most economical
                                    choice for sustainable power generation.
                                </p>
                            </div>

                            {/* Key Statistics */}
                            <div className="grid grid-cols-2 gap-4 md:gap-8 py-4">
                                <div>
                                    <div className="text-xl md:text-2xl font-bold text-[#003366]">1.5¢</div>
                                    <p className="text-sm text-[#003366]/50">Current Cost per kWh</p>
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl font-bold text-[#003366]">1.0¢</div>
                                    <p className="text-sm text-[#003366]/50">Projected 2030 Cost</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h4 className="text-lg md:text-xl font-medium mb-2">Economic Impact</h4>
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