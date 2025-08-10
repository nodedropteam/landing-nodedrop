"use client";

import { Button } from "~/components/ui/button";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const navigationItems = [
        { title: "Our Work", href: "/portfolio" },
        { title: "Pricing", href: "/#pricing" },
        { title: "About", href: "/about" },
    ];

    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const updateHeaderStyle = () => {
            setScrolled(window.scrollY > 0);
        };

        // ✅ Run immediately on load to check initial position
        updateHeaderStyle();

        // ✅ Update on scroll
        window.addEventListener("scroll", updateHeaderStyle);
        return () => {
            window.removeEventListener("scroll", updateHeaderStyle);
        };
    }, []);

    return (
        <header
            className={`w-full z-50 fixed top-0 left-0 transition-colors duration-300 ${
                scrolled ? "bg-background text-foreground shadow" : "bg-transparent text-background"
            }`}
        >
            <div className="w-full min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4">
                {/* Desktop Menu */}
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink href={item.href}>
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Logo */}
                <div className="flex lg:justify-center z-50">
                    <Link href={`/`} id="home-logo">
                        <Image
                            src={`/NODEDROP.svg`}
                            alt=""
                            width={150}
                            height={100}
                        />
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="flex justify-end w-full gap-4">
                    <Link href={`https://calendly.com/cmutalem-business/30min`}>
                        <Button className="hidden lg:inline">
                            Get FREE Website Audit
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex w-12 shrink lg:hidden items-end justify-end z-50">
                    <Button size="icon" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </Button>
                </div>
            </div>

            {/* Fullscreen Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-background text-foreground z-40 flex flex-col items-center justify-center gap-8 p-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-2xl font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Link href={`https://calendly.com/cmutalem-business/30min`} onClick={() => setOpen(false)}>
                        <Button size="lg">Get FREE Website Audit</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
