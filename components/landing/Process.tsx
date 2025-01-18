import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
// import {PhoneIncome, Page, MacOsWindow} from 'iconoir-react'

const process = [
    {
        icon: '/user-search.svg',
        title: 'Discovery Call',
        description: 'We start with a free 15-minute consultation to understand your needs, goals, and challenges.',
    },
    {
        icon: '/map.svg',
        title: 'Strategy & Proposal',
        description: 'Based on our discussion, we create a tailored plan outlining the timeline, pricing, and project details.',
    },
    {
        icon: '/links.svg',
        title: 'Design & Development',
        description: 'Our team designs a visually stunning website and builds it with the latest technologies to ensure functionality and responsiveness.',
    },
]

export default function Process() {
    return (
        <section id="process" className='relative'>
            <div className="u-container">
                <div className="stack space-y-10">
                    <h2 className='font-bold text-3xl sm:text-5xl max-w-screen-sm'>
                        Our Process, Step By Step</h2>

                    <div className="card-grid">
                        <div className="card-content auto-grid gap-5">
                            {
                                process.map((item, index) => (
                                        <Card key={index} className='bg-secondary text-secondary-foreground rounded-3xl border-none'>
                                            <CardHeader>
                                                <Image
                                                    src={item.icon}
                                                    width={56}
                                                    height={56}
                                                    alt='icon'
                                                />
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardDescription>{item.description}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
