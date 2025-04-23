import React from 'react'
import Image from "next/image";
import Logo from '@/public/images/logo.png'
import Link from "next/link";
import Newsletter from "@/components/Site/Newsletter";
const footerLinks = [
    {
        links: [
            { label: "Home", href: "#" },
            { label: "About Us", href: "#" },
            { label: "Case studies", href: "#" },

        ],
    },
    {
        links: [
            { label: "Flexyloans", href: "#" },
            { label: "Small bussiness", href: "#"},
            { label: "Partners", href: "#"},
        ],
    },
    {
        links: [
            { label: "Api for developeers", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Terms os use", href: "#" },
        ],
    },
    {
        links: [
            { label: "Jobs", href: "#" },
            { label: "Legal", href: "#" },
            { label: "Privacy", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--primary)] 2xl:py-[90px] lg:py-[70px] md:py-[60px] py-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                    <div className="text-center xl:mb-[70px] mb-[50px]">
                        <Link href="/" className="flex items-center justify-center md:mb-[35px] mb-[25px]" prefetch={false}>
                            <Image src={Logo} quality={100} height={40} width={148} className="invert-bright" alt='Aminu Logo' />
                        </Link>
                        <Newsletter/>
                    </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-white sm:text-base text-sm">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer