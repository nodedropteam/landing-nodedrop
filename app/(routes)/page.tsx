import Image from 'next/image'
import FadeIn from '@/components/animations/fadein'
import HeroWelcome from '@/app/templates/hero-welcome'
import Header from '@/app/templates/header'
import Faq from '@/app/templates/faq'
import { notebook_whatWeOffer } from '@/app/templates/notebooks/what-we-offer'
import { notebook_ourProcess } from '@/app/templates/notebooks/our-process'
import Footer from '../templates/footer'

export default function page() {
    return (
        <>
            <Header />
            {/* header */}

            <HeroWelcome />
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
                <h2 className='h6 mb-4'>{notebook_ourProcess.heading}</h2>
                <div className="inner flex flex-wrap gap-8">
                    {
                        notebook_ourProcess.process.list.map((step, index) => {
                            return (
                                <div key={index} className="stack w-full md:w-[35%] grow">
                                    <FadeIn whileInView={true}>
                                        <div className='max-w-sm'>
                                            <FadeIn whileInView={true}>
                                                <h2>{step.heading}</h2>
                                                <p>{step.text}</p>
                                            </FadeIn>
                                        </div>
                                    </FadeIn>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* how it works */}

            <section id='what-we-offer' className='py-24'>
                <div className="inner space-y-10">
                    <div className="stack text-center sapce-y-4">
                        <h1 className='drop-shadow-lg'>{notebook_whatWeOffer.heading}</h1>
                        <p className='text-lg'>{notebook_whatWeOffer.text}</p>
                    </div>
                    <div className='flex flex-wrap gap-12 md:gap-24'>
                        {
                            notebook_whatWeOffer.agency_features.list.map((item, index) => (
                                <div key={index} className='w-full md:w-[35%] grow h-full'>
                                    <FadeIn whileInView={true} delay={0}>
                                        <div className="card bg-card rounded-2xl">
                                            <div className="card-header">
                                                <div className='relative w-full h-52  rounded-tl-2xl rounded-tr-2xl'>
                                                    <Image
                                                        src={item.illustration}
                                                        fill
                                                        className='mr-auto'
                                                        alt={item.title} />
                                                </div>
                                            </div>
                                            <div className="card-content pt-2">
                                                <div className='max-w-[50ch] text-center mx-auto'>
                                                    <h4 className='!mb-1 h5'>{item.title}</h4>
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

            <Faq />
            {/* question and answer */}
            <Footer />
        </>
    )
}
