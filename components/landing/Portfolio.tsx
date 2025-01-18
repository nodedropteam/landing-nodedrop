import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'

const posts: any[] = [
    {
        title: "Restaurant Steakhouse",
        image: '/restaurant_steakhouse.jpg'
    },
    {
        title: "Little Horizons",
        image: '/daycare.jpg'
    }
]

export default function Portfolio() {
    return (
        <section id="portfolio" className="relative">
            <div className="u-container bg-foreground text-background space-y-[40px]">
                <div className="stack textbox">
                    <h2 className='font-medium text-3xl plandscape:text-4xl max-w-[640px]'>Our innovative designs help businesses stand out,
                        attract clients, and generate leads effortlessly.</h2>
                </div>
                <div className="grid auto-grid gap-[40px]">
                    {
                        posts && posts.map((post, index) => (
                            <div key={index}>
                                <Card className="relative h-[350px] mx-auto aspect-square rounded-3xl overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className='object-cover object-top'
                                    />
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
