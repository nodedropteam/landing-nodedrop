import React from 'react'

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
        title: "Personalized Service",
        description: "We take the time to understand your unique needs and tailor our services accordingly."
    }
];

export default function CaseStudy() {
    return (
        <section className='full'>
            <div className="nodedrop-section flex flex-col relative">
                <div className="noderop-section-background"></div>
                <div className="nodedrop-section-content grow shrink basis-auto relative content">
                    <div className="noderop-section-block flex flex-col relative py-16">
                        <div className="noderop-section-block-background"></div>
                        <div className="nodedrop-section-block-content grow shrink basis-auto">
                            <h2 className='text-heading2 font-bold mb-12 text-center'>What makes us different?</h2>
                            <div className="flex flex-row gap-8 justify-center flex-wrap">
                                {features.map((feature, index) => (
                                    <div key={index} className='basis-[300px] grow-0 shrink-0 aspect-[2/3]'>
                                        <div className="py-8 px-6 flex flex-col gap-4 w-full h-full bg-foreground text-background">
                                            <h3 className='text-[28px] font-bold'>{feature.title}</h3>
                                            <p className='text-sm'>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
