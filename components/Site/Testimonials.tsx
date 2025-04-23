"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Quote } from 'lucide-react';
import Image from "next/image";

// Testimonials data
const testimonials = [
    {
        text: "Land Tracing helped us navigate a complex tideland property claim in New Jersey. Their certified reports and expert mapping were pivotal in closing our deal with full confidence.",
        name: "Jennifer Morales",
        title: "Real Estate Attorney, NJ",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Jennifer Morales"
    },
    {
        text: "We've used Land Tracing for over a dozen flood zone assessments and property reports. They're fast, accurate, and always willing to go the extra mile to explain the findings.",
        name: "Anthony Reed",
        title: "Urban Planning Consultant",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Anthony Reed"
    },
    {
        text: "Their GIS-based reports are exceptionally detailed and visually clear, helping us make smarter investment decisions in coastal NJ.",
        name: "Priya Desai",
        title: "Commercial Developer",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Priya Desai"
    },
    {
        text: "After working with several vendors, Land Tracing has become our go-to for all property history and boundary research in the region.",
        name: "Leo Chen",
        title: "Project Manager, BuildNorth Group",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Leo Chen"
    },
    {
        text: "Their professionalism, turnaround time, and the depth of analysis in each report are unmatched. I always recommend them to fellow surveyors.",
        name: "Karen Alvarez",
        title: "Licensed Surveyor",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Karen Alvarez"
    },
];

export default function Testimonials() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section id="testimonials" className="mx-auto 2xl:pt-[80px] lg:pt-[70px] sm:pt-[50px] pt-[40px] 2xl:pb-[120px] xl:pb-[100px] lg:pb-[90px] sm:pb-[70px] pb-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <div className="relative">
                    <Carousel setApi={setApi} className="w-full" data-aos="fade-up">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <Card className="bg-white rounded-[20px] border-0 shadow-none sm:p-[30px] p-[20px] h-full">
                                        <CardContent className="flex flex-col p-0 grow">
                                            <div className="flex flex-row gap-4 items-start xl:mb-[56px] lg:mb-[48px] mb-[38px] lg:w-[90%]">
                                                <Quote className="shrink-0 relative top-[6px]" />
                                                <p className="xl:text-[24px] lg:text-[22px] sm:text-[18px] text-base">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-auto">
                                                <figure>
                                                    <Image
                                                        src={testimonial.imageSrc}
                                                        alt={testimonial.imageAlt}
                                                        width={60}
                                                        height={60}
                                                        className="rounded-[10px]"
                                                    />
                                                </figure>
                                                <div>
                                                    <h6 className="font-semibold lg:text-[18px] text-sm">
                                                        {testimonial.name}
                                                    </h6>
                                                    <span className="lg:text-sm text-[12px]">
                                                        {testimonial.title}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex items-center justify-center gap-2 sm:absolute sm:right-[30px] sm:bottom-[30px] sm:mt-0 mt-4">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={cn("h-[8px] w-[28px] rounded-[4px] bg-[#eeede6]", {
                                    "bg-[#882ee0]": current === index + 1,
                                })}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
