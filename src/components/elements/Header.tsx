import React from 'react'
import Wrapper from './Wrapper'
import { Button } from '../ui/button'
import Image from 'next/image'

export const mainMenu = [
    {
        name: "Our work",
        url: "#projects"
    },
    {
        name: "Services",
        url: "#services"
    },
    {
        name: "Web Design",
        url: "/web-design"
    },
    {
        name: "Web Development",
        url: "/web-development"
    },
    {
        name: "Pricing",
        url: "#pricing"
    }
]

export default function Header() {
    return (
        <div className="header-nav fixed top-0 left-0 w-full py-8 bg-background z-50 content">
            <Wrapper>
                {/* <div className='flex justify-center mb-2'>
                    <Image src={`/NODEDROP.svg`} width={80} height={100} alt='nodedrop logo' />
                </div> */}

                <div className="nav-bar">
                    <div className="menu">
                        <ul className='flex gap-6 items-center'>
                            {mainMenu.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url}>
                                        <Button variant={`link`} size={`sm`}>{item.name}</Button>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="logo"></div>
            </Wrapper>
        </div>
    )
}
