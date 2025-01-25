import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { CheckCircle, CheckCircle2 } from 'lucide-react'
import { Separator } from '../ui/separator'

const pricingTiers = [
    {
        name: 'One-Time',
        description: 'Perfect for when you need something amazing delivered, fast.',
        whatYouGet: 'A high-quality product delivered quickly and effortlessly—whether it\’s a website, logo, or content.',
        benefits: [
            'Full ownership of the final product, no recurring costs',
            'High-quality, tailored deliveraables that align with your brand',
            'A straight forward process that ensures fast turnaround times',
            'Daily updates until project completion',
        ],
        steps: [
            'Share your vision',
            'We\'ll create it',
            'You get a finished product that\'s 100% yours',
        ]
    },
    {
        name: 'On-Demand',
        description: 'Your remote IT department, on call whenever you need it.',
        whatYouGet: 'Unlimited access to our expertise in design, development, copywriting, and more—all for one flat monthly fee.',
        benefits: [
            'Effortless updates and maintenance for your digital assets',
            'A flexible and relaiable partner for your growing business',
            'Priority turnaround times to ensure your requests are handled quickly and efficiently',
        ],
        steps: [
            'Subscribe',
            'Request what you need',
            'Watch us deliver, again and again',
        ]
    },
]

export default function Pricing() {
    return (
        <section id='pricing' className="relative">
            <div className="u-container">
                <div className="bg-white text-background rounded-lg p-[20px] space-y-[40px]">
                    <div className="stack textbox max-w-[640px]">
                        <h2 className='text-3xl sm:text-5xl font-semibold'>Essential servicing, your best investment</h2>
                    </div>
                    <div className="row grid tablet:grid-cols-2 gap-10">
                        {
                            pricingTiers && pricingTiers.map((tier, index) =>
                                <Card key={index} className='shadow-none bg-foreground text-background rounded-3xl'>
                                    <CardHeader>
                                        <CardTitle>{tier.name}</CardTitle>
                                        {
                                            tier.description && (
                                                <CardDescription className='text-secondary'>{tier.description}</CardDescription>
                                            )
                                        }
                                    </CardHeader>
                                    <Separator />
                                    <CardContent className='space-y-10 pt-5'>
                                        {
                                            tier.whatYouGet && (
                                                <div className="stack space-y-2">
                                                    <Badge variant={`secondary`}>What you get</Badge>
                                                    <p>{tier.whatYouGet}</p>
                                                </div>
                                            )
                                        }
                                        <Separator />
                                        <div className='stack space-y-2'>
                                            <Badge variant={`secondary`}>Benefits</Badge>
                                            <ul>
                                                {
                                                    tier.benefits && tier.benefits.map((feature, index) =>
                                                        <li key={index} className='py-[5px] flex items-start gap-2'>
                                                            <CheckCircle2 className='size-5 shrink-0' />
                                                            <div className="pill">{feature}</div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <Separator />
                                    </CardContent>
                                    <CardFooter>
                                        <div className='stack space-y-2'>
                                            <Badge variant={`secondary`}>How it works</Badge>
                                            <ul>
                                                {
                                                    tier.steps && tier.steps.map((step, index) =>
                                                        <li key={index} className='py-[5px]'>
                                                            <div className="pill">{step}</div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </CardFooter>
                                </Card>
                            )
                        }
                    </div>
                    <div className="button-row max-sm:[&>*]:w-full max-sm:[&>*>*]:w-full flex flex-col sm:flex-row gap-5">
                        <Link href={process.env.DISCOVERY_CALL_LINK as string || '#'} passHref target='_blank'>
                            <Button>Secure your Feb Spot</Button>
                        </Link>
                        <Link href={process.env.PRICING_CHART as string || '#'} passHref target='_blank'>
                            <Button variant={`secondary`}>or, See pricing chart</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
