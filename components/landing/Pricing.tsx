import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

const pricingTiers = [
    {
        name: 'One-time service',
        description: 'Perfect for one and done ',
        features: [
            'Free Copywriting',
            '1x round of revision',
            'Custom website wireframing',
            'Daily updates until project completion',
            'Responsive design for mobile, tablet and laptop'
        ]
    },
    {
        name: 'On-demand service',
        description: 'Perfect for dynamic websites, that require constant work',
        features: [
            'Full Service',
            'Expert project management',
            'On call developer/ designer',
            'Pitch deck and branding presentation',
            'Unlimited design and development requests',
            'Access to our digital collection; (videos, audio, photos, etc.)',
        ]
    }
]

export default function Pricing() {
    return (
        <section id='pricing' className="relative">
            <div className="u-container">
                <div className="bg-inhance bg-foreground text-background rounded-lg p-[20px] space-y-[40px]">
                    <div className="stack textbox max-w-[640px]">
                        <h2 className='text-3xl sm:text-5xl font-semibold'>Essential servicing, your best investment</h2>
                    </div>
                    <div className="row grid tablet:grid-cols-2">
                        {
                            pricingTiers && pricingTiers.map((tier, index) =>
                                <Card key={index} className='border-none rounded-none bg-inherit shadow-none'>
                                    <CardHeader>
                                        <CardTitle>{tier.name}</CardTitle>
                                        <CardDescription>{tier.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul>
                                            {
                                                tier.features && tier.features.map((feature, index) =>
                                                    <li key={index} className='py-[5px]'>
                                                        <div className="pill">{feature}</div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        }
                    </div>
                    <div className="button-row max-sm:[&>*]:w-full max-sm:[&>*>*]:w-full flex flex-col sm:flex-row gap-5">
                        <Link href={process.env.DISCOVERY_CALL_LINK as string || '#'} passHref target='_blank'>
                            <Button>Secure your Feb Spot</Button>
                        </Link>
                        <Link href={process.env.PRICING_CHART as string || '#'} passHref>
                            <Button variant={`secondary`}>or, See pricing chart</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
