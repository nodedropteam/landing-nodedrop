import React from 'react'
import Wrapper from '../elements/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioGrid() {
    return (
        <section className='bg full'>
            <Wrapper variant='hero' className=''>
                <div className='mx-auto bg-[#C5FFB3] py-12'>
                    <h2 className='text-center mb-4 font-bold text-3xl md:text-4xl hover:underline'>
                        <Link href={`https://beige-swan-461391.hostingersite.com/`} target='_blank'>Dynamic Kidz Zone</Link>
                    </h2>
                <Image src={`/dkz_fullscreen.png`} width={800} height={1000} alt='hello' className='mx-auto object-contain hidden md:block'/>
                <Image src={`/dkz_fullscreen_mobile.png`} width={250} height={1000} alt='hello' className='mx-auto object-contain md:hidden'/>
                </div>
            </Wrapper>
        </section>
    )
}
