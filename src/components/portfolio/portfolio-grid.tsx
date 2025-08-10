import React from 'react'
import Wrapper from '../elements/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        name: 'Dynamic Kidz Zone',
        image: '/dkz_fullscreen.svg',
        mobile: '/dkz_fullscreen_mobile.png',
        link: 'https://beige-swan-461391.hostingersite.com/',
        theme: 'bg-[#C5FFB3]'
    },
    {
        name: 'Emmahlubi',
        image: '/emmahlubi_fullscreen.png',
        mobile: '/emmahlubi_fullscreen_mobile.png',
        link: 'https://emmahlubi.co.za',
        theme: 'bg-[#B3D1FF]'
    },
]

export default function PortfolioGrid() {
    return (
        <section className='full'>
            <Wrapper variant='hero' className=''>
                {
                    projects.map((project, index) => {
                        return (
                            <div className={`mx-auto py-12`} key={index}>
                                <h2 className='text-center mb-8 text-primary-foreground font-bold text-heading3 hover:underline'>
                                    <Link href={project.link} target='_blank'>{project.name}</Link>
                                </h2>
                                <Image src={project.image} width={800} height={1000} alt='hello' className='mx-auto object-contain hidden md:block  rounded-sm' />
                                <Image src={project.mobile} width={250} height={1000} alt='hello' className='mx-auto object-contain md:hidden  rounded-sm' />
                            </div>
                        )
                    })
                }
            </Wrapper>
        </section>
    )
}
