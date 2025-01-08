import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <section id="home">
            <div className="u-container pt-10 flex flex-col justify-center">
                <div className="stack space-y-10">
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>
                        Website Design And Development That Drives Results For Businesses</h1>
                    <p className='sm:text-xl'>
                        We create stunning websites that help you attract customers, 
                        build brand awareness, and achieve your business goals.
                    </p>
                    <div className="button-row max-sm:[&>*]:w-full max-sm:[&>*>*]:w-full flex flex-col sm:flex-row gap-5">
                        <Link href={`https://cal.com/nodedrop-meet/discovery`} passHref target='_blank'>
                            <Button>Book a 15 min Consultation</Button>
                        </Link>
                        <Link href={`/#portfolio`} passHref>
                            <Button variant={`secondary`}>or, See Our Work</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
