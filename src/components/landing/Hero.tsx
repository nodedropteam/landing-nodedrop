import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className='full bg-brand'>
            <div className="nodedropp-section-full relative flex flex-col min-h-screen text-white">
                <div className="nodedrop-section-background"></div>
                <div className="nodedrop-section-content grow shrink basis-auto flex flex-col relative w-full z-0">
                    <div className="nodedrop-section-background absolute h-full w-full top-0 left-0 select-none pointer-events-none overflow-hidden z-[-1]">
                        {/* Desktop / Tablet version */}
                        <Image
                            src="/hero-background.png"
                            fill
                            alt="woman holding up a laptop with website content on it"
                            className="hidden md:block object-cover"
                        />

                        {/* Mobile version */}
                        <Image
                            src="/mobile_hero-background.png"
                            fill
                            alt="woman holding up a laptop with website content on it (mobile)"
                            className="block md:hidden object-cover scale-105 opacity-30"
                        />
                    </div>
                    <div className="nodedropp-section-block-content relative z-10 grow shrink basis-auto content pt-[100px]">
                        <div className='w-full'>
                        <div className="max-w-[60ch]">
                            <div className='space-y-4'>
                                <h1 className='text-heading1 font-bold mb-4'>
                                    Real Websites Show Up Online
                                </h1>
                                <p className='text-lg md:text-xl lg:text-2xl max-w-[30ch]'>
                                    We build fast, conversion-focused websites that help small businesses grow.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
