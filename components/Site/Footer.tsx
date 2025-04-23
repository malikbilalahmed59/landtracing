import React from 'react'
import Image from "next/image";
import Logo from '@/public/images/logo.svg'
import Link from "next/link";
import Newsletter from "@/components/Site/Newsletter";

const footerLinks = [
    {
        links: [
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
        ],
    },
    {
        links: [
            { label: "Tidelands", href: "#trust" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        links: [
            { label: "Careers", href: "#" },
            { label: "Legal", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--primary)] 2xl:py-[90px] lg:py-[70px] md:py-[60px] py-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                {/* Optional Newsletter and Logo */}
                {/* <div className="text-center xl:mb-[70px] mb-[50px]">
                    <Link href="/" className="flex items-center justify-center md:mb-[35px] mb-[25px]" prefetch={false}>
                        <Image src={Logo} quality={100} height={40} width={148} className="invert-bright" alt='Land Tracing Logo' />
                    </Link>
                    <Newsletter />
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-10">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-white sm:text-base text-sm footer-hover">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div> */}

                {/* Wrapped Contact Info */}
                <section id="contact">
                    <div className="text-center text-white text-sm space-y-2">
                        <p>Email: <a href="mailto:info@landtracing.com" className="underline">info@landtracing.com</a> | <a href="mailto:orders@landtracing.com" className="underline">orders@landtracing.com</a></p>
                        <p>Address: 1154 50th Street, Brooklyn, NY 11219</p>
                        <p>Phone: <a href="tel:3476338871" className="underline">347-633-8871</a></p>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
