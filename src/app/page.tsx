import React from 'react'
import QuestionnaireButton from '~/components/QuestionnaireButton'
import { Asterisk } from 'lucide-react'
import ImageGallery from '~/components/ImageGallery'

export default function () {
    return (
        <div className='page-wrapper full relative'>
            <div className="page-content">
                <section className="h-screen flex">
                    <div className="relative w-full p-4">
                        <h1 className="font-bold text-[clamp(3.5rem,10vw,10rem)] leading-[100%]">
                            websites and digital tools that are unique like your business.
                        </h1>
                        <QuestionnaireButton />
                    </div>
                </section>

                <section className='content py-24'>
                    <div className="inner">
                        <div className="stack space-y-8">
                            <p className='text-2xl md:text-4xl font-semibold leading-6'>
                                We design and develop custom software to help start-ups
                                businesses run smarter. Whether it’s a website, portal,
                                or app—we create tools that work for your business.
                            </p>
                            <ul className='space-y-4 text-lg md:text-2xl pl-6'>
                                <li className='flex gap-2 items-center'><Asterisk strokeWidth={3} className='float-left' /> Custom websites for small businesses</li>
                                <li className='flex gap-2 items-center'><Asterisk strokeWidth={3} className='float-left' /> Business portals to streamline operations</li>
                                <li className='flex gap-2 items-center'><Asterisk strokeWidth={3} className='float-left' /> UI/UX design with human-first approach</li>
                                <li className='flex gap-2 items-center'><Asterisk strokeWidth={3} className='float-left' /> Ongoing support and future-proof architecture</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="full">
                    <div className="inner">
                        <ImageGallery />
                    </div>
                </section>
            </div>
        </div>
    )
}
