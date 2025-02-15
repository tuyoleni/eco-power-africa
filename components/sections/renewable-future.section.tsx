import React from 'react';
import Image from 'next/image';
import { AreaChart } from "@/components/ui/area-chart";
import type { ChartData, ChartOptions } from 'chart.js';

export const RenewableFutureSection = () => {
    const chartData: ChartData<'line'> = {
        labels: ['2023', '2025', '2027', '2030'],
        datasets: [
            {
                label: 'Solar',
                data: [1.6, 2.5, 3.5, 4.5],
                backgroundColor: '#4B88E5', // Primary Blue
                fill: true,
            },
            {
                label: 'Wind',
                data: [1.0, 1.5, 2.0, 2.5],
                backgroundColor: '#4BE5C9', // Turquoise
                fill: true,
            },
            {
                label: 'Other Renewables',
                data: [1.5, 1.8, 2.1, 2.5],
                backgroundColor: '#E5964B', // Orange
                fill: true,
            },
            {
                label: 'Fossil Fuels',
                data: [4.8, 4.5, 4.2, 3.8],
                backgroundColor: '#E54B4B', // Red-Orange
                fill: true,
            },
        ]
    };

    const chartOptions: ChartOptions<'line'> = {
        scales: {
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Global Power Capacity (TW)',
                    color: '#003366',
                    font: {
                        size: 14,
                    }
                },
                grid: {
                    color: 'rgba(0, 51, 102, 0.1)',
                }
            },
            x: {
                grid: {
                    color: 'rgba(0, 51, 102, 0.1)',
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 12
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
    };

    return (
        <section className="container mx-auto relative w-full py-20 px-8">
            <div className="gap-4 mb-20 max-w-2xl">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">
                    Global Renewable Power Capacity Set to Triple by 2030
                </h2>
                <p className="text-[#003366]/70">
                    According to BloombergNEF, global renewable power capacity is expected to reach approximately
                    10.3 terawatts (TW) by 2030, up from 4.1 TW at the end of 2023, marking a transformative
                    shift in how we generate electricity.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="h-[600px]">
                    <AreaChart
                        data={chartData}
                        options={chartOptions}
                    />
                </div>

                <div className="space-y-6 text-[#003366]/70 leading-relaxed">
                    <div className="space-y-6">
                        <div>
                            <p className="font-semibold text-[#003366] mb-2">
                                1. Solar Prices Continue to Decline
                            </p>
                            <p>
                                The cost of solar power has been decreasing rapidly, making it increasingly
                                competitive with traditional energy sources. BloombergNEF projects that this trend
                                will continue, contributing significantly to the global energy mix by 2030.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-[#003366] mb-2">
                                2. Massive Investments in Renewable Energy
                            </p>
                            <p>
                                BloombergNEF forecasts that achieving the necessary renewable capacity by 2030
                                will require substantial investments, averaging around $1 trillion per year globally.
                                This investment is crucial to meet the net-zero emissions pathway and support the
                                rapid expansion of renewable energy infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenewableFutureSection;