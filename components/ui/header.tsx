"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigation } from '@/config/site'
import { Button } from "./button"

export default function Header() {
    return (
        <header className="wrapper">
            <div className="max-w-[1180px] mx-auto px-4 lg:px-0 navigation py-8 flex w-full justify-between items-center">
                <div className="logo font-bold text-lg">
                    NodeDrop
                </div>
                <div className="flex gap-10 items-center">
                    <NavigationMenu className="max-sm:hidden">
                        <NavigationMenuList className="">
                            {
                                navigation.map((navItem) => {
                                    if (navItem.subLinks) {
                                        return (
                                            <NavigationMenuItem key={navItem.label}>
                                                <NavigationMenuTrigger>{navItem.label}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                        {navItem.subLinks.map((subLink) => (
                                                            <ListItem
                                                                key={subLink.label}
                                                                title={subLink.label}
                                                                href={subLink.link}
                                                            >
                                                                {subLink.description}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        )
                                    }
                                    return (
                                        <NavigationMenuItem key={navItem.label}>
                                            <Link href={navItem.link} legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    {navItem.label}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    )
                                })
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex gap-4">
                        <Link href={`#`}>
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
