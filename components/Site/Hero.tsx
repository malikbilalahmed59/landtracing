import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button,buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import Banner_img from "@/public/images/banner-img.jpg";
import LinearProgressWithLabelDemo from "@/components/Site/LinearProgressWithLabelDemo";

const data = {
    badge: "Your Success, Our Priority",
    heading: "Transform Your Business with Expert Accounting Services",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    buttons: {
        primary: {
            label: "Get started",
            href: "",
        },
        secondary: {
            label: "Get in touch",
            href: "",
        },
    },
};

const Hero = () => {
    return (
        <section className="bg-[var(--light-color)]  m-[20px] rounded-[20px] pt-[168px] pb-[120px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-[43%_38%] justify-between">
                    <div className="">
                        <Badge className="mb-[20px]">{data.badge}</Badge>
                        <h1 className="font-semibold text-[52px] leading-[64px] mb-[30px]">{data.heading}</h1>
                        <p className="text-base leading-7 mb-[40px]">{data.description}</p>
                        <div className="flex gap-4">
                            <Link href={data.buttons.primary.href} className={buttonVariants({ variant: "default" })}>
                                {data.buttons.primary.label}
                            </Link>
                            <Link href={data.buttons.secondary.href} className={buttonVariants({ variant: "secondary" })}>
                                {data.buttons.secondary.label}
                            </Link>
                        </div>

                    </div>
                    <div className="relative">
                        {/*<Progress.Line />*/}
                       <LinearProgressWithLabelDemo/>
                        <figure className="mb-0">
                            <Image src={Banner_img} width={480} height={480} alt="Banner_img" className="rounded-[20px]"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero