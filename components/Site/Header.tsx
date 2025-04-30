import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/public/images/logo.svg"; // SVG logo in /public/images/
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { SVGProps } from "react";

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#trust", label: "Tidelands" },
    { href: "#contact", label: "Contact" }, // should link to footer/contact section
];

const Header = () => {
    return (
        <header className="w-full absolute md:top-[50px] top-[30px]">
            <div className="container 2xl:px-0 px-[30px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image
                        src={Logo}
                        alt="Land Tracing Logo"
                        width={148}
                        height={40}
                        className="w-auto h-[40px] max-xsm:w-[120px]"
                        priority
                    />
                </Link>
                <nav className="hidden items-center 2xl:gap-[40px] gap-[25px] lg:flex">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium text-[var(--primary)] nav-hover hover:text-[#882ee0]"
                            prefetch={false}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center lg:gap-0 gap-2">
                    <Link
                        href="https://app.landtracing.com/"
                        className="max-xsm:hidden bg-white inline-block font-semibold rounded-[10px]
                        2xl:p-[11px_46px] lg:p-[11px_36px] sm:p-[9px_26px] p-[9px_26px] xl:text-base sm:text-sm text-[12px]
                        hover:bg-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-[5px]"
                    >
                        Sign in
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full lg:hidden p-0">
                                <MenuIcon className="!h-[30px] !w-[30px] text-primary" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="lg:hidden !border-0 bg-[var(--cyan-blue)] p-5">
                            <div className="grid gap-4 p-4">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-base font-medium text-white footer-hover"
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;

function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}
