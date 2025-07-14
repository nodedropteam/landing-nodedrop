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
        <section className='bg full'>
            <Wrapper variant='hero' className=''>
                {
                    projects.map((project, index) => {
                        return (
                            <div className={`mx-auto ${project.theme} py-12`}>
                                <h2 className='text-center mb-4 font-bold text-3xl md:text-4xl hover:underline'>
                                    <Link href={project.link} target='_blank'>{project.name}</Link>
                                </h2>
                                <Image src={project.image} width={800} height={1000} alt='hello' className='mx-auto object-contain hidden md:block border-black border-8 rounded-sm' />
                                <Image src={project.mobile} width={250} height={1000} alt='hello' className='mx-auto object-contain md:hidden border-black border-4 rounded-sm' />
                            </div>
                        )
                    })
                }
            </Wrapper>
        </section>
    )
}
