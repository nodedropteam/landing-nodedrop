import React from 'react'
import QuestionnaireButton from '~/components/QuestionnaireButton'
import { Asterisk } from 'lucide-react'
import ImageGallery from '~/components/ImageGallery'

export default function () {
    return (
        <div className='page-wrapper full'>
            <div className="page-content content">

                {/* Section with sticky */}
                <section className="full">
                    <div className="w-full p-4 min-h-screen relative">
                        <h1 className="font-bold text-[clamp(3.5rem,10vw,10rem)] leading-[100%]">
                            websites and digital tools that are unique like your business.
                        </h1>

                        {/* Sticky block */}
                        <QuestionnaireButton />

                        {/* Section with description and bullet list */}
                        <section className='py-24'>
                            <div className="inner content">
                                <div className="stack space-y-8">
                                    <p className='text-2xl md:text-4xl font-semibold leading-6'>
                                        We design and develop custom software to help start-ups
                                        businesses run smarter. Whether it’s a website, portal,
                                        or app—we create tools that work for your business.
                                    </p>
                                    <ul className='space-y-4 text-lg md:text-2xl pl-6'>
                                        <li className='group flex gap-2 items-center cursor-pointer hover:-translate-y-2 duration-150'>
                                            <Asterisk strokeWidth={3} className='float-left group-hover:!fill-pink-500 group-hover:animate-spin' />
                                            Custom websites for small businesses</li>
                                        <li className='group flex gap-2 items-center cursor-pointer hover:-translate-y-2 duration-150'>
                                            <Asterisk strokeWidth={3} className='float-left group-hover:!fill-pink-500 group-hover:animate-spin' />
                                            Business portals to streamline operations</li>
                                        <li className='group flex gap-2 items-center cursor-pointer hover:-translate-y-2 duration-150'>
                                            <Asterisk strokeWidth={3} className='float-left group-hover:!fill-pink-500 group-hover:animate-spin' />
                                            UI/UX design with human-first approach</li>
                                        <li className='group flex gap-2 items-center cursor-pointer hover:-translate-y-2 duration-150'>
                                            <Asterisk strokeWidth={3} className='float-left group-hover:!fill-pink-500 group-hover:animate-spin' />
                                            Ongoing support and future-proof architecture</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Image Gallery */}
                        <section className="full">
                            <div className="inner p-[clamp(1rem,6vw,3rem)]">
                                <ImageGallery />
                            </div>
                        </section>

                        <section className='py-36'>
                            <div className="inner">
                                <div className="stack space-y-4 content">
                                    <div className="">
                                        <h2 className='font-bold text-6xl'>
                                            No Hype. <br />Just Good Work.
                                        </h2>
                                        <p className='text-lg'>
                                            We rely on our simple process
                                        </p>
                                    </div>

                                    <div className='space-y-6 feature pt-12'>
                                        <div className='flex flex-wrap gap-4'>

                                            <div className="card w-full md:w-[25%] grow">
                                                <div className="card-header pb-4">
                                                    <h3 className='text-3xl font-bold'>Listen first</h3>
                                                </div>
                                                <div className="card-content">
                                                    <p>
                                                        In our first meeting, we want to
                                                        learn about your business, your
                                                        customers, and the challenges you’re facing.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="card w-full md:w-[25%] grow">
                                                <div className="card-header pb-4">
                                                    <h3 className='text-3xl font-bold'>Design Solutions</h3>
                                                </div>
                                                <div className="card-content">
                                                    <p>
                                                        Based on our conversation, we develop
                                                        a game plan: structure, design, and
                                                        features that align with your goals.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="card w-full md:w-[25%] grow">
                                                <div className="card-header pb-4">
                                                    <h3 className='text-3xl font-bold'>Build, Launch, Support</h3>
                                                </div>
                                                <div className="card-content">
                                                    <p>
                                                        We build clean, functional, and
                                                        scalable software. We launch with care.
                                                        And we stay available for ongoing support.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

            </div>
        </div>
    )
}
