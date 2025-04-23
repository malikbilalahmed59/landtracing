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
        <footer className="w-full bg-[var(--primary)] py-[90px]">
            <div className="container mx-auto">
                    <div className="text-center mb-[70px]">
                        <Link href="/" className="flex items-center justify-center mb-[35px]" prefetch={false}>
                            <Image src={Logo} quality={100} height={40} width={148} className="invert-bright" alt='Aminu Logo' />
                        </Link>
                        <Newsletter/>
                    </div>
                <div className="grid grid-cols-4 gap-4">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-white text-base">
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