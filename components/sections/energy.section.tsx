import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Image } from "@heroui/react";

import { earthInCar, KhalidAlFalih } from "@/public/assets"

const carouselItems = [
    {
        image: earthInCar,
        title: "Environmental Impact",
        quote: "There&apos;s no backup planet&mdash;sustainable energy is the only way forward. Join us in securing a greener future for Africa.",
        description: "Our projects offset thousands of tons of CO₂ annually&mdash;equivalent to removing thousands of cars from the road.",
    },
    {
        image: KhalidAlFalih,
        title: "Global Investment",
        quote: "Saudi Arabia will launch a renewable energy program in coming weeks that is expected to involve investment of between $30 billion and $50 billion by 2023",
        author: "Energy Minister Khalid al-Falih",
        description: "Global investments in renewable energy are rapidly increasing, with major economies committing to sustainable power generation.",
    },
];

export default function EnergySection() {
    return (
        <section className="relative w-full py-20 bg-white text-[#0A3D91] overflow-hidden flex items-center">
            <div className="container mx-auto px-6 flex flex-col items-center justify-between">
                <div className="flex flex-col mb-24 w-full">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Powering a Sustainable Future</h1>
                    <p className="text-lg md:text-xl text-[#0A3D91]/80">
                        Leading Africa&apos;s transition to clean energy through innovative solar solutions and strategic partnerships
                    </p>
                </div>

                <div className="relative w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            slidesToScroll: 1,
                            startIndex: 0,
                        }}
                        className="w-full"
                    >
                        <div className="hidden md:flex absolute right-0 -top-32 gap-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                        <div className="md:hidden absolute -top-8 flex gap-2">
                            <div className="text-sm text-[#0A3D91]/60">
                                Swipe to explore →
                            </div>
                        </div>
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {carouselItems.map((item, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-3/4 md:pr-16">
                                    <Card className="p-8 transition-opacity duration-300 hover:opacity-100 border-none shadow-none h-full">
                                        <div className="flex flex-col gap-12 h-full">
                                            <div className="flex flex-col md:flex-row gap-12 items-start flex-1">
                                                <div className="md:w-1/2">
                                                    <div className="relative aspect-[4/3] w-full group">
                                                        <div className="absolute inset-0 rounded-xl"></div>
                                                        <Image
                                                            radius="md"
                                                            isBlurred={true}
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="object-contain relative z-10 w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-base text-[#0A3D91]/70 text-left">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="md:w-1/2 space-y-4">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-left">{item.title}</h3>
                                                    {item.quote && (
                                                        <blockquote className="text-lg md:text-xl font-medium text-left">
                                                            &ldquo;{item.quote}&rdquo;
                                                            {item.author && (
                                                                <footer className="text-sm mt-2 text-[#0A3D91]/60">
                                                                    - {item.author}
                                                                </footer>
                                                            )}
                                                        </blockquote>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}