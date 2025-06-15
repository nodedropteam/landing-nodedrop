import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button'

const service_tiers = [
    {
        name: "Express",
        description: "Up and running in 2 weeks",
        price: "$1000",
        features: [
            "Unique one-page website design",
            "Figma desktop & mobile designs",
            "Figma file & styleguide",
            "Video guide & overview",
            "Hand-over support",
            "Live one-page website",
            "Fully responsive",
            "Subtle interactions"
        ]
    },
     {
        name: "Standard",
        description: "Up and running in 2 weeks",
        price: "$2500",
        features: [
            "Unique one-page website design",
            "Figma desktop & mobile designs",
            "Figma file & styleguide",
            "Video guide & overview",
            "Hand-over support",
            "Live one-page website",
            "Fully responsive",
            "Subtle interactions"
        ]
    },
     {
        name: "Advanced",
        description: "Up and running in 2 weeks",
        price: "$4000",
        features: [
            "Unique one-page website design",
            "Figma desktop & mobile designs",
            "Figma file & styleguide",
            "Video guide & overview",
            "Hand-over support",
            "Live one-page website",
            "Fully responsive",
            "Subtle interactions"
        ]
    }
]

export default function TierList() {
    return (
        <section>
            <Wrapper scrollName='pricing' className='py-24'>
                <div className="copy text-center space-y-4 mb-8">
                    <h2 className='text-4xl font-bold text-center mb-8 max-w-[640px] mx-auto'>
                        Service tiers for any budget.
                    </h2>
                    <p className=''>
                        Pick the package that's right for you.
                    </p>
                </div>
                <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        service_tiers.map((tier, index) => {
                            return (
                                <div className="card space-y-6 p-3 border rounded-lg" key={index}>
                                    <h3 className='text-lg font-medium'>{tier.name}</h3>
                                    <p className='text-2xl font-medium'>{tier.price}</p>
                                    <p className='text-sm'>{tier.description}</p>
                                    <Button className='w-full' size={`sm`}>Get Details</Button>
                                    <ul className='space-y-4'>
                                        {
                                            tier.features.map((feature, index) => {
                                                return (
                                                    <li key={index}>{feature}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </section>
    )
}
