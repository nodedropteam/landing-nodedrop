import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    // NavigationMenuTrigger,
    // NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from './button'


const navItems: Array<{ title: string, href: string }> = [
    {
        title: 'How It Works',
        href: '/#process'
    },
    {
        title: 'Pricing',
        href: '/#about'
    },
    {
        title: 'Work',
        href: '/#services'
    },
]

export default function Header() {
    return (
        <div className='u-header relative w-full h-auto'>
            <nav className='h-full w-full u-container py-[20px] flex items-center justify-between'>
                <div className="logo shrink-0 grow-0">
                    <Link href="/" legacyBehavior passHref>
                        <h1 className='text-[20px] font-bold'>NodeDrop</h1>
                    </Link>
                </div>

                <NavigationMenu className='h-full hidden md:block grow'>
                    <NavigationMenuList>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                )
                            })
                        }
                        <NavigationMenuItem className='!ml-[40px]'>
                            <Link href="https://cal.com/nodedrop-meet/discovery" legacyBehavior passHref target='_blank'>
                                <Button>
                                    Book A Free Consultation
                                </Button>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </div>
    )
}
