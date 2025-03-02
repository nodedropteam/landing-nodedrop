import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <section id="home" className='wrapper'>
            <div className="container max-w-[1180px] mx-auto px-4 lg:px-0 py-10">
                <div className="stack space-y-5 max-w-2xl">
                    <h1 className='text-4xl font-bold'>
                        Website Design and Development that drives results for businesses</h1>
                    <p>
                        We create stunning websites that help you attract customers,
                        build brand awareness, and achieve your business goals.
                    </p>
                    <div className="flex gap-2">
                        <Link href={process.env.DISCOVERY_CALL_LINK as string || '#'} passHref target='_blank'>
                            <Button>Reserve a call</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
