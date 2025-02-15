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
        <section className="relative w-full bg-white px-6 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-left">
                        Solar Energy Cost Development
                    </h2>
                    <p className="text-lg text-[#003366]/70 leading-relaxed text-left mb-8">
                        From an expensive alternative to the world&apos;s most affordable energy source—solar power costs have dropped by over 90% since 1990 and are projected to fall below 1 US cent per kWh by 2030, making it the most economical choice for sustainable power generation.
                    </p>
                </div>

                <div className="mt-12">
                    <div className="bg-white">
                        <div className="h-[500px]">
                            <LineChart
                                data={chartData}
                                options={chartOptions}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-12 max-w-3xl">
                    <div className="grid grid-cols-2 gap-16">
                        <div className="flex items-start gap-4">
                            <div className="text-6xl font-bold text-[#003366]">1.5</div>
                            <div className="mt-2">
                                <div className="text-2xl text-[#003366]/80">US cents</div>
                                <div className="text-xl text-[#003366]/70">Current Production Cost</div>
                                <p className="text-base text-[#003366]/60 mt-1">
                                    Already competitive with traditional energy sources
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-6xl font-bold text-[#003366]">1</div>
                            <div className="mt-2">
                                <div className="text-2xl text-[#003366]/80">US cent</div>
                                <div className="text-xl text-[#003366]/70">by 2030</div>
                                <p className="text-base text-[#003366]/60 mt-1">
                                    Making it the most economical energy source
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