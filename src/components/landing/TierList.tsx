import React from 'react'
import Wrapper from '../elements/Wrapper'
// import { Button } from '../ui/button'

const service_tiers = [
    {
        name: "Simple",
        description: "Launch quickly with a clean, 1-3 page site",
        price: "$",
        features: [
            "Professinally designed template",
            "Responsive desktop & mobile layouts",
            "SEO ready",
            "Accessibility compliant",
            "Up to 1 Anti-Spam Contact form",
            "Website Migration"
        ]
    },
    {
        name: "Standard",
        description: "A refined multi-paged site with more features and polish",
        price: "$$",
        features: [
            "Professinally designed template",
            "Responsive desktop & mobile layouts",
            "SEO Optimization",
            "Easy to use CMS customization",
            "Accessibility compliant",
            "Up to 5 Anti-Spam Contact form",
            "Custom copywriting for conversion",
            "Website Migration"
        ]
    },
    {
        name: "Advanced",
        description: "A full website experience for growing businesses",
        price: "$$$",
        features: [
            "Professinally designed template",
            "Responsive desktop & mobile layouts",
            "SEO Optimization",
            "Easy to use CMS customization",
            "Accessibility compliant",
            "Up to 5 Anti-Spam Contact form",
            "Custom copywriting for conversion",
            "Advanced analytics integration",
            "Lead capture workflows",
            "Website Migration"
        ]
    }
];


export default function ServiceTierList() {
    return (
        <section>
            <Wrapper scrollName='pricing' className='py-24'>
                <div className="copy text-center space-y-4 mb-8">
                    <h2 className='text-heading2 font-bold text-center mb-8 max-w-[30ch] mx-auto'>
                        Service package for any budget.
                    </h2>
                    <p className='text-lg md:text-xl'>
                        {"Pick the package that's right for you."}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {
                        service_tiers.map((tier, index) => {
                            return (
                                <div key={index} className='basis-[320px] grow-0 shrink'>
                                    <div className="card w-full h-full bg-brand text-background pt-8 px-6 flex flex-col" key={index}>
                                        <div className="card-header">
                                            <div className='flex justify-between items-center mb-4'>
                                                <h3 className='card-title font-bold text-[28px]'>{tier.name}</h3>
                                                <p className='text-3xl font-semibold'>{tier.price}</p>
                                            </div>
                                            <p className='text-sm'>{tier.description}</p>
                                        </div>
                                        <div className="card-content pl-8">
                                            <ul className='list-disc mt-4 text-[14px] space-y-2'>
                                                {
                                                    tier.features.map((feature, index) => {
                                                        return (
                                                            <li key={index}>{feature}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="card-footer pt-4 pb-4 justify-self-end grow flex flex-col justify-end">
                                            {/* <Button className='w-full' variant={`secondary`}>Get Details</Button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </section>
    )
}
