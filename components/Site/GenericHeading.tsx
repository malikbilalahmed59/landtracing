import React from 'react'
import {buttonVariants } from "@/components/ui/button"
import Link from "next/link";
interface Props {
    title: string,
    linkTitle: string,
    linkHref:string
}
const GenericHeading = ({ title, linkTitle, linkHref }: Props) => {
    return (
        <div className="flex items-center justify-between sm:flex-row flex-col gap-4">
            <div className="lg:w-full md:w-[60%] w-full">
                <h3 data-aos="fade-up" className="text-white xl:text-[36px] lg:text-[32px] sm:text-[24px] text-[22px] lg:leading-[44px] md:leading-[36px] leading-[30px] font-semibold sm:text-left text-center">{title}</h3>
            </div>
            <div>
                <Link data-aos="fade-up" href={linkHref} className={buttonVariants({ variant: "secondary" })}>{linkTitle}</Link>
            </div>
        </div>
    );
};

export default GenericHeading;
