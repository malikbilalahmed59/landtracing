"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Quote } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
    {
        text: "When we needed funding to initiate a new project, their team provided us with excellent options and guided us through the loan process seamlessly. The personalized attention and tailored financial solutions were exactly what we were looking for.",
        name: "David Lee",
        title: "Founder of GrowthVista Startups",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of David Lee"
    },
    {
        text: "The support we received was exceptional. They took the time to understand our needs and offered solutions that truly worked for our situation.",
        name: "Sarah Khan",
        title: "CEO of BrightFuture Inc.",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Sarah Khan"
    },
    {
        text: "Their expertise and customer service set them apart from other financial institutions. We couldn’t be happier with our experience.",
        name: "Miguel Santos",
        title: "Managing Director at InnovateNow",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Miguel Santos"
    },
    {
        text: "From start to finish, the process was smooth, and their team was always available to assist us. Highly recommended!",
        name: "Emily Carter",
        title: "Operations Lead at TechSpring",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of Emily Carter"
    },
    {
        text: "We were thoroughly impressed with their professionalism and commitment to our success. It made all the difference.",
        name: "James Park",
        title: "Co-Founder of AgileWorks",
        imageSrc: "/images/client-img.jpg",
        imageAlt: "Photo of James Park"
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
        <div className="mx-auto 2xl:pt-[80px] lg:pt-[70px] sm:pt-[50px] pt-[40px] 2xl:pb-[120px] xl:pb-[100px] lg:pb-[90px] sm:pb-[70px] pb-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <div className="relative">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="">
                                    <Card className="bg-white rounded-[20px] border-0 shadow-none sm:p-[30px] p-[20px] h-full">
                                        <CardContent className="flex flex-col p-0 grow">
                                            <div className="flex flex-row gap-4 items-start xl:mb-[56px] lg:mb-[48px] mb-[38px] lg:w-[90%]">
                                                <Quote className="shrink-0 relative top-[6px]" />
                                                <p className="xl:text-[24px] lg:text-[22px] sm:text-[18px] text-base">{testimonial.text}</p>
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
                                                    <h6 className="font-semibold lg:text-[18px] text-sm">{testimonial.name}</h6>
                                                    <span className="lg:text-sm text-[12px]">{testimonial.title}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex items-center justify-center gap-2 sm:absolute  sm:right-[30px] sm:bottom-[30px] sm:mt-0 mt-4">
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
        </div>
    );
}
