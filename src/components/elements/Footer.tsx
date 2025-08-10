import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Instagram } from "lucide-react";

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
        <footer className='full'>
            <div className="nodedrop-section-footer min-h-screen flex flex-col relative">
                <div className="section-background"></div>
                <div className="section-content grow shrink basis-auto content relative py-24 bg-accent text-accent-foreground">
                    <div className="section-content-wrapper">
                        <div className="section-content-background"></div>
                        <div className="section-inner-content">
                            <div className='space-y-8'>
                                <Image src={`/NODEDROP.svg`} width={200} height={100} alt='nodedrop logo' />
                                <p className='text-xl text-left font-medium'>
                                    Claim your space. Grow your reach.
                                </p>

                                <div className='space-y-4'>
                                    <Link className='block' href={`mailto:chilufya@noderopp.com`}>
                                        <Button>Leave Us A Message</Button>
                                    </Link>
                                    <Link className='block' href={`https://calendly.com/cmutalem-business/30min`}>
                                        <Button>Get A Free Website Audit</Button>
                                    </Link>
                                </div>

                                <div className='space-y-4'>
                                    <Link className='block' href={`https://www.instagram.com/nodedropwebsites/`} target='_blank'>
                                        <Button size={`icon`} className='rounded-full !bg-white'>
                                            <Instagram className='size-6' />
                                        </Button>
                                    </Link>
                                    <Link className='block font-medium underline text-xl' href={`mailto:chilufya@noderopp.com`}>
                                        chilufya@nodedropp.com
                                    </Link>
                                </div>
                                <div>
                                    <p>Copyright 2025 Nodedrop All Rights Reserved</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
