import React from 'react'

const services = [
    {
        title: 'Website Design',
        description: 'Tailored designs that reflect your brand identity and solve specific business challenges.',
        image: '', // You can add image URLs here
        priority: 1,
    },
    {
        title: 'Website Development',
        description: 'Custom-built websites with a focus on user experience and functionality.',
        image: '',
        priority: 0,
    },
    {
        title: 'Branding & Pitch Decking',
        description: 'Creating a strong brand identity and compelling presentations to attract investors.',
        image: '',
        priority: 2,
    },
    {
        title: 'Hosting & Maintenance',
        description: 'Reliable and secure hosting solutions with ongoing maintenance and support.',
        image: '',
        priority: 3,
    },
];

export default function Services() {
    return (
        <section id="services" className='relative bg-foreground text-background'>
            <div className="u-container">
                <div className="stack space-y-5">
                    <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-screen-sm'>
                        Comprehensive Solutions, To Meet Your Business Needs
                    </h2>

                    <div className="bento-grid flex flex-col-reverse md:flex-row gap-5">
                        <div className="bento-section w-full md:max-w-sm flex flex-col gap-3">
                            {services.filter((item) => item.priority !== 0).map((item, index) => (
                                <div
                                    key={index}
                                    className={`stack space-y-2 bg-background text-foreground rounded-3xl
                ${item.priority === 1 ? 'md:h-[350px]' : 'grow'}`}
                                >
                                    <div className="card-header p-5 space-y-3">
                                        <h4 className={`font-semibold text-2xl ${item.priority === 1 ? 'sm:text-3xl' : ''}`}>
                                            {item.title}
                                        </h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bento-section bento-card-tall flex w-full">
                            {services.filter((item) => item.priority === 0).map((item, index) => (
                                <div
                                    key={index}
                                    className="stack space-y-2 bg-background text-foreground rounded-3xl w-full"
                                >
                                    <div className="card-header p-5 space-y-3">
                                        <h4 className="font-semibold text-2xl sm:text-3xl">{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
