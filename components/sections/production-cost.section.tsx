import React from 'react';
import Image from 'next/image';
import { LineChart } from "@/components/ui/line-chart";
import type { ChartData, ChartOptions } from 'chart.js';

export const ProductionCostSection = () => {
    // Chart data representing the cost decline from 1980 to 2010
    const chartData: ChartData<'line'> = {
        labels: ['1980', '1985', '1990', '1995', '2000', '2005', '2010'],
        datasets: [
            {
                label: 'Production Cost',
                data: [76, 30, 15, 10, 8, 6, 5],
                borderColor: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 0,
                fill: true,
            }
        ]
    };

    const chartOptions: ChartOptions<'line'> = {
        scales: {
            y: {
                beginAtZero: true,
                max: 80,
                grid: {
                    color: '#E5E7EB',
                },
                ticks: {
                    callback: function (value) {
                        return `$${value}`;
                    },
                    font: {
                        size: 12,
                    },
                },
                title: {
                    display: true,
                    text: 'US cents per kWh',
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
                enabled: true,
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (context) {
                        return `$${context.parsed.y} cents/kWh`;
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
        <section className="relative w-full bg-white p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#003366] text-2xl font-bold">
                    WORLD SOLAR PV POWER PLANT MARKET
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-lg">ECO POWER AFRICA</span>
                    <span className="text-sm text-gray-600">NAMIBIA INVEST CC</span>
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/eco-power-logo.png"
                            alt="Eco Power Africa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-[#003366] text-3xl font-bold mb-8">
                DEVELOPMENT OF PRODUCTION COST per kWh
            </h3>

            {/* Subtitle */}
            <h4 className="text-2xl font-bold mb-6">
                ECONOMY OF SCALE MADE IT HAPPEN
            </h4>

            {/* Chart Container */}
            <div className="relative">
                {/* Chart Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="h-[400px]">
                        <LineChart
                            data={chartData}
                            options={chartOptions}
                        />
                    </div>
                </div>

                {/* Current and Future Costs Box */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-yellow-400 p-6 rounded-xl shadow-lg">
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-bold">1,5</div>
                        <div className="text-xl font-medium">US- cents</div>
                        <div className="text-xl">today</div>
                        <div className="mt-4 text-2xl font-bold">2030</div>
                        <div className="text-xl">below</div>
                        <div className="text-4xl font-bold">1</div>
                        <div className="text-xl">US cent</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionCostSection; 