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
        <div className="flex items-center justify-between">
            <div>
                <h3 className="text-white text-[36px] font-medium">{title}</h3>
            </div>
            <div>
                <Link href={linkHref} className={buttonVariants({ variant: "secondary" })}>{linkTitle}</Link>
            </div>
        </div>
    );
};

export default GenericHeading;
