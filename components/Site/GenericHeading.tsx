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
            <div className="lg:w-full sm:w-[60%] w-full">
                <h3 className="text-white xl:text-[36px] lg:text-[32px] sm:text-[28px] text-[26px] lg:leading-[44px] leading-[36px] font-semibold sm:text-left text-center">{title}</h3>
            </div>
            <div>
                <Link href={linkHref} className={buttonVariants({ variant: "secondary" })}>{linkTitle}</Link>
            </div>
        </div>
    );
};

export default GenericHeading;
