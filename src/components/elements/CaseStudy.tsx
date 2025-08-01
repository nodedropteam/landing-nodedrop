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
                <div className="copy mb-8">
                    <h2 className='text-4xl font-medium text-center mb-8 max-w-[640px] mx-auto'>
                        Work our clients get
                    </h2>
                    <p className='text-xl sm:text-2xl text-center text-muted-foreground'>
                        and you will too...
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-96 mb-8'>
                    <div className="img-box relative w-full h-full">
                        <Image src={`/emmahlubi_thumbnail.png`} alt='' fill className='lg:object-cover object-top' />
                    </div>
                    <div className="img-box relative w-full h-full">
                        <Image src={`/dkz_thumbnail.png`} alt='' fill className='lg:object-cover object-top' />
                    </div>
                </div>

                <div className="card-grid flex flex-wrap gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className='w-full sm:w-[45%] md:w-[25%] grow'>
                            <div className="card" key={index}>
                                <div className="card-header mb-2">
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
