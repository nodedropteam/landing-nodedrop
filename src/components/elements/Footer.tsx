import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { Button } from '../ui/button'

const footerMenuContact = [
    {
        name: "chilufya@nodedropp.com",
        url: "mailto:chilufya@nodedropp.com"
    },
    {
        name: "ig: @nodedropwebsites",
        url: "https://www.instagram.com/nodedropwebsites/"
    }
]

export default function Footer() {
    return (
        <div className='py-40 bg-linear-to-t from-background to-transparent full from-60%'>
            <Wrapper className='flex flex-col gap-10 text-center'>
                <div className='flex justify-center'>
                    <Image src={`/NODEDROP.svg`} alt='' width={100} height={100} />
                </div>
                <p className='italic'>
                    Claim your space. Grow your reach.
                </p>
                <div className="menu space-y-2 text-sm">
                    <ul className='flex flex-col md:flex-row items-center justify-center'>
                        {footerMenuContact.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <Button variant={`link`} size={`sm`}>{item.name}</Button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className='text-sm font-bold'>
                    © Copyright 2025. All rights reserved.
                </p>
            </Wrapper>
        </div>
    )
}
