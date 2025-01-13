import React from 'react'
import PortableTextBody from '../PortableTextBody'
import { myPortableTextComponents } from '../PortableTextComponents'
import BentoGrid from '../ui/bento-grid'
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from '../ui/card'
import { urlForImage } from '@/lib/urlForImage'

export default function Process({ section, classNames }:
    { section: any, classNames?: string }) {
    // console.log(section)
    return (
        <section id="services" className={`relative bg-background text-foreground`}>
            <div className="u-container">
                <div className="stack space-y-5 mx-auto max-w-screen-tablet:max-w-[400px]">
                    <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-screen-sm'>
                        {section.title}
                    </h2>
                    {
                        section.subtitle && <p>{section.subtitle}</p>
                    }
                    {
                        section.cards && (
                            <BentoGrid classNames='grid tablet:grid-cols-3 gap-5'>
                                {
                                    section.cards.map((card: any, index: number) => (
                                        <Card key={index}
                                            className="bento-card bg-secondary 
                                        mx-auto text-secondary-foreground p-5 space-y-3 rounded-2xl">
                                            <CardHeader>
                                                {
                                                    card.icon && (
                                                        <div>
                                                            <img
                                                                src={urlForImage(card.icon)?.url()}
                                                                alt={card.title}
                                                                className='laptop:size-16 size-12' />
                                                        </div>
                                                    )
                                                }
                                                {
                                                    card.title && (
                                                        <CardTitle className='font-bold text-xl tablet:text-3xl'>
                                                            {card.title}
                                                        </CardTitle>
                                                    )
                                                }
                                                {
                                                    card.description && (
                                                        <CardDescription>
                                                            <PortableTextBody
                                                                body={card.description}
                                                                components={myPortableTextComponents} />
                                                        </CardDescription>
                                                    )
                                                }
                                            </CardHeader>
                                            <CardContent>
                                                {
                                                    card.body && (
                                                        <div>
                                                            <PortableTextBody
                                                                body={card.body}
                                                                components={myPortableTextComponents} />
                                                        </div>
                                                    )
                                                }
                                            </CardContent>
                                            {
                                                card.link && (
                                                    <CardFooter>
                                                        <a href={card.link} className='btn btn-primary'>
                                                            {card.linkText}
                                                        </a>
                                                    </CardFooter>
                                                )
                                            }
                                        </Card>
                                    ))
                                }
                            </BentoGrid>
                        )
                    }

                </div>
            </div>
        </section>
    )
}

