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
        <section className="bg-[var(--light-color)]  sm:mx-[20px] mx-[15px] sm:mt-[20px] mt-[15px] rounded-[20px] sm:pt-[168px] pt-[148px] lg:pb-[120px] sm:pb-[80px] pb-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <div className="grid xl:grid-cols-[43%_38%] lg:grid-cols-[46%_41%]
                grid-cols-1 justify-between lg:text-left text-center lg:gap-0 gap-6">
                    <div className="">
                        <Badge className="md:mb-[20px] mb-[14px]">{data.badge}</Badge>
                        <h1 className="font-semibold 2xl:text-[52px] xl:text-[48px] lg:text-[42px] md:text-[38px] sm:text-[34px] text-[28px]
                        2xl:leading-[64px] xl:leading-[60px] lg:leading-[52px] md:leading-[48px] leading-[40px] xl:mb-[30px] md:mb-[20px] sm:mb-[16px] mb-[12px]">{data.heading}</h1>
                        <p className="md:text-base text-sm md:leading-7 leading-6 xl:mb-[40px] lg:mb-[30px] mb-[24px]">{data.description}</p>
                        <div className="flex sm:gap-4 gap-2 lg:justify-start justify-center">
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
                            <Image src={Banner_img} width={480} height={480} alt="Banner_img" className="rounded-[20px] lg:m-0 mx-auto md:w-auto md:h-auto w-[400px] h-auto"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero