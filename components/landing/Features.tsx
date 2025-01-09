import React from 'react'
// import { Planet, Clock, Star, Phone } from 'iconoir-react'

const features = [
    {
        icon: '',
        title: 'Our global team ensures 24/7 availability.',
        description: '',
    },
    {
        icon: '',
        title: 'We deliver projects efficiently and on time.',
        description: '',
    },
    {
        icon: '',
        title: 'We tailor our solutions to your unique business needs.',
        description: '',
    },
    {
        icon: '',
        title: 'Get expert advice with our free 15-minute consultations.',
        description: '',
    },
]

export default function Features() {
    return (
        <section id="feaures" className='relative'>
            <div className="u-container">
                <div className="stack space-y-5">
                    <h2 className='font-bold text-3xl sm:text-5xl max-w-screen-sm'>
                        We Give a, Personalized Touch.
                    </h2>
                    <p className='max-w-screen-sm'>
                        We take the stress a way from planning and maintaining your projects
                        with a personalized dashboard to manage your website from a birds-eye view.
                    </p>

                    <div className="card-grid !mt-10">
                        <div className="auto-grid gap-10">
                            {
                                features.map((feature, index) => (
                                    <div className="card" key={index}>
                                        <div className="card-body space-y-3">
                                            <div className="icon text-primary">
                                                {feature.icon}
                                            </div>
                                            <h3 className='text-xl sm:text-2xl'>
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
