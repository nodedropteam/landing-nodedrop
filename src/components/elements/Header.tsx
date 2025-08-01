"use client";

import { Button } from "~/components/ui/button";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const navigationItems = [
        {
            title: "Our Work",
            href: "/portfolio",
            description: "",
        },
        {
            title: "Pricing",
            description: "Managing a small business today is already tough.",
            href: "/#pricing"
        },
        {
            title: "About",
            description: "Managing a small business today is already tough.",
            href: "/about"
        },
        // {
        //     title: "Services",
        //     description: "Managing a small business today is already tough.",
        //     items: [
        //         {
        //             title: "Web Design",
        //             href: "/web-design",
        //         },
        //         {
        //             title: "Web Development",
        //             href: "/web-development",
        //         },
        //     ],
        // },

    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background content">
            <div className="mx-auto w-full min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row" id="menu-desktop">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink>
                                                <Link href={item.href}>
                                                    <Button variant="ghost">{item.title}</Button>
                                                </Link>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            {/* <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10">
                                                            Book a call today
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent> */}
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <Link href={`/`} id="home-logo">
                        <Image src={`/NODEDROP.svg`} alt='' width={100} height={100} />
                    </Link>
                </div>

                <div className="flex justify-end w-full gap-4">
                    {/* <Button variant="ghost" className="hidden md:inline">
                        Book a demo
                    </Button> */}
                    {/* <div className="border-r hidden md:inline"></div> */}
                    <Link href={`https://calendly.com/cmutalem-business/30min`}>
                        <Button className="hidden sm:inline">Get FREE Website Audit</Button>
                    </Link>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end" id="menu-mobile">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full left-0 bg-background shadow-lg py-4 gap-8 content">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                {/* <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" /> */}
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
// {item.items &&
//                                             item.items.map((subItem) => (
//                                                 <Link
//                                                     key={subItem.title}
//                                                     href={subItem.href}
//                                                     className="flex justify-between items-center"
//                                                 >
//                                                     <span className="text-muted-foreground">
//                                                         {subItem.title}
//                                                     </span>
//                                                     {/* <MoveRight className="w-4 h-4 stroke-1" /> */}
//                                                 </Link>
//                                             ))}