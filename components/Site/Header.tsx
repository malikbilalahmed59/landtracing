import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "Small business" },
    { href: "#services", label: "Partners" },
    { href: "#contact", label: "About us" },
    { href: "#contact", label: "Case studies" },
];

const Header = () => {
    return (
        <header className="w-full absolute top-[50px]">
            <div className="container px-[0] max-2lg:px-[1.875rem] max-sm:px-[20px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image src={Logo} quality={100} height={40} width={148} className="max-xsm:w-[120px]" alt='Aminu Logo' />
                </Link>
                <nav className="hidden items-center gap-[40px] md:flex">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium text-[var(--primary)]"
                            prefetch={false}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="">
                    <Link href="#contact" className=" max-xsm:hidden bg-white inline-block font-semibold rounded-[10px] p-[11px_46px]">Sign in</Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                                <MenuIcon className="!h-[30px] !w-[30px] text-primary" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="md:hidden">
                            <div className="grid gap-4 p-4">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-base font-medium text-[var(--primary)]"
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
    )
}

export default Header
function MenuIcon(props) {
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
    )
}