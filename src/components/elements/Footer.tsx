import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { mainMenu } from './Header'
import { Button } from '../ui/button'

export default function Footer() {
    return (
        <div className='py-40'>
            <Wrapper className='flex flex-col gap-10 text-center'>
                <div className='flex justify-center'>
                    <Image src={`/NODEDROP.svg`} alt='' width={100} height={100} />
                </div>
                <p className='italic'>
                    Find your space, find your audience.
                </p>
                <div className="menu">
                    <ul className='flex items-center justify-center'>
                        {mainMenu.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>
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
