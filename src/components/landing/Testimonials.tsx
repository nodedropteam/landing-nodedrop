import React from 'react'
import Wrapper from '../elements/Wrapper'

const features = [
  {
    title: "Totally async",
    description: "Don't like meetings? We don't either; so much so that we've outlawed them."
  },
  {
    title: "Manage with Trello",
    description: "Don't like meetings? We don't either; so much so that we've outlawed them."
  },
  {
    title: "Invite unlimited team members",
    description: "Invite your entire team, so anyone can submit requests and track their progress."
  }
];

export default function Testimonials() {
    return (
        <section>
            <Wrapper className='py-24'>
                <div className='p-12 rounded-2xl bg-accent border text-accent-foreground text-center mb-16 shadow-xl'>
                    <h2 className='text-4xl font-medium text-center mb-8 max-w-[640px] mx-auto'>
                        "Aubergine Studio are a rare breed of designers and developers they understands business needs."
                    </h2>

                    <p className='uppercase text-lg italic font-medium text-muted-foreground'>Gerard Depardieu</p>
                </div>

                <div className="card-grid flex flex-wrap gap-8">
                    {features.map((feature, index) => (
                        <div className='w-full sm:w-[45%] md:w-[25%] grow'>
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
