import LinearProgressWithLabelDemo from "@/components/Site/LinearProgressWithLabelDemo";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Banner_img from "@/public/images/banner-img.jpg";
import Image from "next/image";
import Link from "next/link";

const data = {
    badge: "Precision You Can Trust",
    heading: "Expert Mapping Searches & Reports",
    description: `Land Tracing sets the benchmark in accurate, reliable, and certified mapping reports. Our dedicated team combines cutting-edge technology with industry-leading expertise to provide detailed public records searches swiftly and dependably, ensuring your decisions are always informed and secure.`,
    buttons: {
        primary: {
            label: "Start Your Search",
            href: "/get-started",
        },
        secondary: {
            label: "Contact Our Experts",
            href: "/contact",
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
                        <Badge className="md:mb-[20px] mb-[14px]" data-aos="fade-up">{data.badge}</Badge>
                        <h1 data-aos="fade-up" className="font-semibold 2xl:text-[52px] xl:text-[48px] lg:text-[42px] md:text-[38px] sm:text-[34px] text-[28px]
                        2xl:leading-[64px] xl:leading-[60px] lg:leading-[52px] md:leading-[48px] leading-[40px] xl:mb-[30px] md:mb-[20px] sm:mb-[16px] mb-[12px]">{data.heading}</h1>
                        <p data-aos="fade-up" className="md:text-base text-sm md:leading-7 leading-6 xl:mb-[40px] lg:mb-[30px] mb-[24px]">{data.description}</p>
                        <div className="flex sm:gap-4 gap-2 lg:justify-start justify-center">
                            <Link data-aos="fade-up" href={data.buttons.primary.href} className={buttonVariants({ variant: "default" })}>
                                {data.buttons.primary.label}
                            </Link>
                            <Link data-aos="fade-up" href={data.buttons.secondary.href} className={buttonVariants({ variant: "secondary" })}>
                                {data.buttons.secondary.label}
                            </Link>
                        </div>

                    </div>
                    <div className="relative">
                        {/*<Progress.Line />*/}
                        <LinearProgressWithLabelDemo />
                        <figure
    className="mb-0 relative w-full h-[480px] max-w-[480px] mx-auto rounded-[20px] overflow-hidden"
    data-aos="fade-up"
>
    <Image
        src={Banner_img}
        alt="Banner_img"
        fill
        className="object-cover rounded-[20px]"
        priority
    />
</figure>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero