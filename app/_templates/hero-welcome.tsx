import React from 'react'
import InfiniteCarousel from '@/components/ui/infinite-carousel'
import FadeIn from '@/components/animations/fadein'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowDownLeft } from 'lucide-react'
import Image from 'next/image'
import FadeUp from '@/components/animations/fadeup'

const notebook = {
    heading: `We help startups and service businesses grow with lightning-fast, conversion-focused websites.`,
    p: `From branding to launch, we build conversion-focused websites that 
    help 
    small businesses grow faster — without the agency price tag.`,
    showcase: [
        "/images/UrbanEdge Realty.png",
        "/images/VeroWealth Management.png",
        "/images/Grandiose Steakhouse.png",
        "/images/home_and_energy.png",
        "/images/dance_studio.png",
        "/images/museum_studio.png"
    ]
}

export default function HeroWelcome() {
    return (
        <section id='hero' className="masthead full content-grid items-center py-6">
            <div className='inner full'>
                <div className="content-grid">
                    <div className='flex justify-between items-end flex-wrap gap-4'>
                        <div className="stack max-w-xl space-y-3">
                            <FadeIn>
                                <h1 className='h4 font-semibold'>{notebook.heading}</h1>
                                <p className='text-muted-foreground'>{notebook.p}</p>
                            </FadeIn>
                        </div>
                        <FadeIn delay={0.2}>
                            <div className="cta flex gap-2 items-center group">
                                <Button size={`icon`} className='size-14 rounded-full group-hover:-rotate-12 transition-transform duration-300' >
                                    <ArrowDownLeft className='!size-6' />
                                </Button>
                                <Link href={`#`} className='text-sm font-semibold underline underline-offset-4'>Check out our projects</Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="carousel full mt-12">
                    <FadeUp>
                        <InfiniteCarousel>
                            {
                                notebook.showcase.map((item, index) => {
                                    return (
                                        <div key={index} className='embla_side p-1 rounded-2xl bg-background shadow-sm border grow-0 shrink-0 basis-[600px]  max-w-[90%] min-w-0'>
                                            <div className='img relative rounded-xl h-full overflow-hidden border shadow-sm bg-primary'>
                                                <Image
                                                    src={item}
                                                    alt=''
                                                    fill
                                                    className='object-cover' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </InfiniteCarousel>
                    </FadeUp>
                </div>
            </div>
        </section>
    )
}
