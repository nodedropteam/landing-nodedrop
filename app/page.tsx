"use client"

import Link from 'next/link'
import React from 'react'
import { ArrowDownLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FileInput } from 'lucide-react'
import Image from 'next/image'
import FadeIn from '@/components/animations/fadein'
import FadeDown from '@/components/animations/fadedown'
import FadeUp from '@/components/animations/fadeup'
import useEmblaCarousel from 'embla-carousel-react'
import { faq, showcase, whatWeOffer } from '@/data'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function page() {
    const [carousel] = useEmblaCarousel();

    return (
        <>
            <header className='full content-grid py-8  w-full'>
                <div className="inner">
                    <FadeDown>
                        <div className="logo">
                            <Link
                                href={`/`}
                                className='font-bold text-[24px] underline underline-offset-8 relative'>
                                <span className='z-0'>NodeDrop</span>
                            </Link>
                        </div>
                    </FadeDown>
                </div>
            </header>
            {/* header */}

            <section id='hero' className="masthead full content-grid items-center py-6">
                <div className='inner full'>
                    <div className="content-grid">
                        <div className='flex justify-between items-end flex-wrap gap-4'>
                            <div className="stack max-w-xl space-y-3">
                                <FadeIn>
                                    <h1 className='h4 font-semibold'>
                                        Website design and development that produces results for your business.
                                    </h1>
                                    <p className='text-muted-foreground'>
                                        We create and develop innovative software solutions that help businesses scale
                                        and become productive acheiveing growth and business goals.
                                    </p>
                                </FadeIn>
                            </div>
                            <FadeIn delay={0.2}>
                                <div className="cta flex gap-2 items-center group">
                                    <Button size={`icon`} className='size-14 rounded-full group-hover:-rotate-12 transition-transform duration-300' >
                                        <ArrowDownLeft className='!size-6' />
                                    </Button>
                                    <Link href={`/contact`} className='text-sm font-semibold underline underline-offset-4'>Check out our projects</Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                    <div className="carousel full mt-12">
                        <FadeUp>
                            <div className='embla overflow-hidden' ref={carousel}>
                                <div className="embla_container sb h-80 sm:h-[450px] py-4 px-4 flex gap-4">
                                    {
                                        showcase.map((item, index) => {
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
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
            {/* hero */}

            <section id="about" className='py-24'>
                <div className="inner flex flex-wrap gap-12 md:gap-0">
                    <div className="stack w-full md:w-[35%] grow">
                        <FadeIn whileInView={true}>
                            <div className="max-w-sm">
                                <h2 className='h1'>Design</h2>
                                <p>
                                    We create custom designs that work to communicate, inform and inspire action
                                    for your business. Convey your intentions to your audience and meet their needs.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="stack w-full md:w-[35%] grow">
                        <FadeIn whileInView={true} delay={0.2}>
                            <div className="max-w-sm">
                                <h2 className='h1'>Develop</h2>
                                <p>
                                    We put together your vision and make it come to life at cost-effective
                                    measures, while achieving and surpassing results.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            {/* about */}

            {/* <section id='case-study-1' className="full full-width-split-screen items-end py-40">
                <div className="img-box bg-secondary h-[600px]">
                </div>
                <div className="content pt-8 lg:pl-4">
                    <h3 className='font-medium'>Banking and Commerce</h3>
                    <Button size={`lg`} className='rounded-full'>See live</Button>
                </div>
            </section> */}
            {/* case study */}

            <section id="how-it-works" className='py-40'>
                <h2 className='h6'>How it works</h2>
                <div className="inner flex flex-wrap gap-8">
                    <div className="stack w-full md:w-[35%] grow">
                        <FadeIn whileInView={true}>
                            <div className='max-w-sm'>
                                <FadeIn whileInView={true}>
                                    <h2>1.Strategize</h2>
                                    <p>
                                        We research your brand and understand the challenges
                                        you face and how we can overcome them.
                                    </p>
                                </FadeIn>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="stack w-full md:w-[35%] grow">
                        <FadeIn whileInView={true} delay={0.2}>
                            <div className='max-w-sm'>
                                <FadeIn whileInView={true} delay={0.2}>
                                    <h2>2.Concept</h2>
                                    <p>
                                        We put together a concept pitch deck, an mvp, a
                                        proposal. Something to bring your project to life and
                                        make sure we are on the right trajectory.
                                    </p>
                                </FadeIn>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="stack w-full md:w-[35%] grow">
                        <FadeIn whileInView={true} delay={0.4}>
                            <div className='max-w-sm'>
                                <FadeIn whileInView={true} delay={0.4}>
                                    <h2>3.Development</h2>
                                    <p>
                                        We build your solution, updating you every step of
                                        the way, ensuring that you get what you want and need
                                    </p>
                                </FadeIn>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="stack w-full md:w-[35%] grow">
                        <FadeIn whileInView={true} delay={0.6}>
                            <div className='max-w-sm'>
                                <FadeIn whileInView={true} delay={0.6}>
                                    <h2>4.Launch</h2>
                                    <p>
                                        We go live, handing the finished product to you. Should you
                                        choose, we offer maintenance and support.
                                    </p>
                                </FadeIn>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            {/* how it works */}

            <section id='what-we-offer' className='py-24'>
                <div className="inner space-y-8">
                    <div className="stack">
                        <h1 className='drop-shadow-lg'>Set yourself apart</h1>
                    </div>
                    <div className='flex flex-wrap gap-12'>
                        {
                            whatWeOffer.map((item, index) => (
                                <div key={index} className='w-full md:w-[35%] grow h-full'>
                                    <FadeIn whileInView={true} delay={0}>
                                        <div className="card bg-card border rounded-2xl shadow">
                                            <div className="card-header p-2">
                                                <div className='w-auto h-auto custom-inner-shadow'>
                                                    <Image
                                                        src={item.illustration}
                                                        width={450}
                                                        height={150}
                                                        alt={item.title} />
                                                </div>
                                            </div>
                                            <div className="card-content py-4 px-4 pt-8">
                                                <div className='max-w-lg'>
                                                    <h4 className='!mb-1 h6'>{item.title}</h4>
                                                    <p className='text-muted-foreground'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* what we offer */}

            <section id='what-we-offer' className='py-24'>
                <div className="inner space-y-8">
                    <div className="stack">
                        <h1>Got Questions?</h1>
                    </div>
                    <Accordion collapsible type='single' className='flex flex-col gap-8'>
                        {
                            faq.map((q: any, index: any) => {
                                return (
                                    <AccordionItem
                                        value={q.question}
                                        key={index}
                                        className='w-full flex items-start gap-2 relative'>
                                        <Button className='rounded-full shrink-0 sm:mt-2' size={`icon`}>
                                            {index + 1}
                                        </Button>
                                        <div className='grow'>
                                            <AccordionTrigger>
                                                <p className='h5'>{q.question}</p>
                                            </AccordionTrigger>
                                            <AccordionContent className='text-lg'>{q.answer}</AccordionContent>
                                        </div>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </section>
            {/* question and answer */}

            <footer id='contact' className='full relative py-40'>
                <div className="inner content-grid space-y-8">
                    <div className="stack">
                        <h2 className='h1'>Enough chit-chat...</h2>
                        <p>Fill out a form, or schedule a meeting with our team.</p>
                    </div>
                    <div className="button-row flex flex-wrap gap-4">
                        <Link className='block' href={process.env.CAL_COM_LINK as string || "#"} target='_blank'>
                            <Button className="cta !h-auto rounded-full !px-2 !pr-4">
                                <div className="img size-10 sm:size-14 bg-pink-500 rounded-full relative overflow-hidden">
                                    <Image
                                        src='/media_07.png'
                                        alt=''
                                        fill />
                                </div>
                                <span className='text-sm font-semibold'>Schedule a meeting</span>
                            </Button>
                        </Link>
                        <Link href={process.env.QUOTE_FLYER as string || "#"} target='_blank'>
                            <Button variant={`outline`} className="cta !h-auto rounded-full !px-2 !pr-4">
                                <div className="img size-10 sm:size-14 rounded-full 
                                flex items-center bg-background justify-center border">
                                    <FileInput strokeWidth={1.25} className='!size-5 md:!size-6' />
                                </div>
                                <span className='text-sm font-semibold'>Get a quote</span>
                            </Button>
                        </Link>
                        {/* <Link href={`/#`}>
                            <Button variant={`outline`} className="cta !h-auto rounded-full !px-2 !pr-4">
                                <div className="img size-10 sm:size-14 rounded-full 
                                flex items-center bg-background justify-center border">
                                    <MonitorDown strokeWidth={1.25} className='!size-5 md:!size-6' />
                                </div>
                                <span className='text-sm font-semibold'>Download a free template</span>
                            </Button>
                        </Link> */}
                    </div>
                </div>
            </footer>
        </>
    )
}
