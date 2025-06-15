import React from 'react'
import Wrapper from '~/components/elements/Wrapper'
import Image from 'next/image'

const features = [
    {
        title: "Totally async",
        description: "Communicate at your convenience and still get the project done on time!."
    },
    {
        title: "Design deck",
        description: "Delivered with full package of options for you to pick, choose and swap as you like."
    },
    {
        title: "Free Service",
        description: "Get free service and hosting for the first 3 months after launch."
    }
];

export default function CaseStudy() {
    return (
        <section>
            <Wrapper className='py-24' scrollName='projects'>
                <div className="copy">
                    <h2 className='text-4xl font-medium text-center mb-8 max-w-[640px] mx-auto'>
                        Our happy clients
                    </h2>
                </div>
                <div className="img-box relative w-full h-[700px] mb-4">
                    <Image src={`/www.showcase.com.svg`} alt='' fill className='object-cover object-top border-[3px] rounded-[32px] shadow-xl' />
                </div>
                <div className='p-8 rounded-2xl bg-accent border text-accent-foreground text-center mb-16'>
                    <p className='uppercase text-lg italic font-medium text-muted-foreground'>Emmahlubi Inc.</p>
                </div>

                <div className="card-grid flex flex-wrap gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className='w-full sm:w-[45%] md:w-[25%] grow'>
                            <div className="card" key={index}>
                                <div className="card-header mb-4">
                                    <h3 className="card-title text-lg font-semibold text-center">{feature.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-center text-sm">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}
