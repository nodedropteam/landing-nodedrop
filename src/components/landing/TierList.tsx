import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button'

const service_tiers = [
    {
        name: "Express",
        description: "Launch quickly with a clean, one-page site",
        price: "$",
        features: [
            "Custom one-page website design",
            "Responsive desktop & mobile layouts",
            "Basic animations & interactions",
            "Figma file delivery",
            "Live website deployment",
            "1 revision round",
            "Launch video walkthrough"
        ]
    },
    {
        name: "Standard",
        description: "A refined one-page site with more features and polish",
        price: "$$",
        features: [
            "Enhanced one-page website design",
            "Advanced layout sections (e.g., FAQ, testimonials)",
            "Smooth animations & micro-interactions",
            "Figma file with style guide",
            "Live site deployment + SEO basics",
            "3 revision rounds",
            "Training & handover support"
        ]
    },
    {
        name: "Advanced",
        description: "A full website experience for growing businesses",
        price: "$$$",
        features: [
            "Multi-page website design",
            "Custom design for each page (up to 5 pages)",
            "Advanced animations & transitions",
            "Figma design system",
            "Live site with SEO, speed & accessibility optimizations",
            "5 revision rounds",
            "Post-launch support (2 weeks)"
        ]
    }
];


export default function ServiceTierList() {
    return (
        <section>
            <Wrapper scrollName='pricing' className='py-24'>
                <div className="copy text-center space-y-4 mb-8">
                    <h2 className='text-4xl font-bold text-center mb-8 max-w-[640px] mx-auto'>
                        Service package for any budget.
                    </h2>
                    <p className=''>
                        {"Pick the package that's right for you."}
                    </p>
                </div>
                <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        service_tiers.map((tier, index) => {
                            return (
                                <div className="card bg-card space-y-6 p-3 border rounded-lg" key={index}>
                                    <h3 className='text-lg font-medium italic'>{tier.name}</h3>
                                    <p className='text-3xl font-semibold'>{tier.price}</p>
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
