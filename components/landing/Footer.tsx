import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
// import {Twitter, Instagram} from 'iconoir-react'

export default function Footer() {
    return (
        <section id="contact" className='relative'>
            <div className="u-container u-container--tall flex flex-col justify-between">
                <div className="stack space-y-10 u-container">
                    <h2 className='text-4xl sm:text-5xl lg:text-5xl font-bold text-center'>Let's Build Something Amazing!</h2>
                    <div className="button-row max-sm:[&>*]:w-full max-sm:[&>*>*]:w-full flex flex-col sm:flex-row gap-5 justify-center">
                        <Link href={`https://cal.com/nodedrop-meet/discovery`} passHref target='_blank'>
                            <Button>Book a 15 min Consultation</Button>
                        </Link>
                        <Link href={`/#portfolio`} passHref className=''>
                            <Button variant={`secondary`}>or, See Our Work</Button>
                        </Link>
                    </div>
                </div>
                <footer>
                    <div className="inner flex flex-col md:flex-row gap-5 justify-between items-center">
                        <p>Built by <Link href={`/`} className='underline'>nodedrop</Link>.</p>
                        <p className='text-sm'>© 2025 nodedrop. All rights reserved.</p>
                        <nav className='space-x-5'>
                            <Link href={`/#home`} passHref>
                                <Button variant={`link`}>Twitter</Button>
                            </Link>
                            <Link href={`/#portfolio`} passHref>
                                <Button variant={`link`}>Instagram</Button>
                            </Link>
                        </nav>
                    </div>
                </footer>
            </div>
        </section>
    )
}