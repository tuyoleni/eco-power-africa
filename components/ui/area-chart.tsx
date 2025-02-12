"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartOptions,
    ChartData,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface AreaChartProps {
    data: ChartData<'line'>;
    options?: ChartOptions<'line'>;
}

export function AreaChart({ data, options }: AreaChartProps) {
    const defaultOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <Line
            data={data}
            options={{
                ...defaultOptions,
                ...options,
            }}
        />
    );
} 