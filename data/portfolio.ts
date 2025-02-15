export interface PortfolioProject {
    id: string;
    title: string;
    description: string;
    location: string;
    capacity: number;
    type: string;
    image: string;
}
import { airport, Gottelborn } from "@/public/assets";


export const portfolioProjects: PortfolioProject[] = [
    {
        id: 'saarbrucken',
        title: 'PV power plant at Saarbrücken',
        description: 'State-of-the-art solar installation at one of Germany\'s key airports, demonstrating the perfect harmony between aviation infrastructure and renewable energy.',
        location: 'Germany',
        capacity: 4,
        type: 'Airport Installation',
        image: airport,
    },
    {
        id: 'gottelborn',
        title: 'PV power plant Göttelborn',
        description: 'Large-scale ground-mounted solar installation showcasing our expertise in utility-scale renewable energy projects.',
        location: 'Germany',
        capacity: 8,
        type: 'Ground Installation',
        image: Gottelborn,
    },
];