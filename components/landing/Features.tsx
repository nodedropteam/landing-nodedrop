import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
// import { Planet, Clock, Star, Phone } from 'iconoir-react'

const features = [
    {
        icon: '/lamp-charge.svg',
        title: 'We deliver projects efficiently and on time.',
        description: '',
    },
    {
        icon: '/medal-star.svg',
        title: 'We tailor our solutions to your unique business needs.',
        description: '',
    },
    {
        icon: '/bubble.svg',
        title: 'Get expert advice with our free 15-minute consultations.',
        description: '',
    },
]

export default function Features() {
    return (
        <section id="features" className='wrapper relative py-20'>
            <div className="u-container space-y-10">
                <div className="stack space-y-2 max-w-lg">
                    <h2 className='font-bold text-3xl'>
                        We Give a, Personalized Touch.
                    </h2>
                    <p>
                        We take the stress a way from planning and maintaining your projects
                        with a personalized dashboard to manage your website from a birds-eye view.
                    </p>
                </div>
                <div className="card-grid !mt-10">
                    <div className="auto-grid gap-10">
                        {
                            features.map((feature, index) => (
                                <div className="card" key={index}>
                                    <Card key={index} className='bg-inherit border-none text-inherit shadow-none'>
                                        <CardHeader>
                                            <Image
                                                src={feature.icon}
                                                width={44}
                                                height={44}
                                                alt='icon'
                                            />
                                            <CardTitle>{feature.title}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
