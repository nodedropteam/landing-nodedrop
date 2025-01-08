import React from 'react'
import {PhoneIncome, Page, MacOsWindow} from 'iconoir-react'

const process = [
    {
        icon: <PhoneIncome className='size-10'/>,
        title: 'Discovery Call',
        description: 'We start with a free 15-minute consultation to understand your needs, goals, and challenges.',
    },
    {
        icon: <Page className='size-10'/>,
        title: 'Strategy & Proposal',
        description: 'Based on our discussion, we create a tailored plan outlining the timeline, pricing, and project details.',
    },
    {
        icon: <MacOsWindow className='size-10'/>,
        title: 'Design & Development',
        description: 'Our team designs a visually stunning website and builds it with the latest technologies to ensure functionality and responsiveness.',
    },
]

export default function Process() {
    return (
        <section id="process" className='relative'>
            <div className="u-container">
                <div className="stack space-y-10">
                    <h2 className='font-bold text-3xl sm:text-5xl max-w-screen-sm'>
                        Our Process, Step By Step</h2>

                    <div className="card-grid">
                        <div className="card-content auto-grid gap-5">
                            {
                                process.map((item, index) => {
                                    return (
                                        <div className="card bg-secondary text-secondary-foreground rounded-3xl" key={index}>
                                            <div className="card-body space-y-3 p-5">
                                                <div className="text-primary">
                                                    {item.icon}
                                                </div>
                                                <h3 className='font-bold text-xl sm:text-4xl'>{item.title}</h3>
                                                <p className=''>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
