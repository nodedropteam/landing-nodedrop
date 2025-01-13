import React from 'react'
import PortableTextBody from '../PortableTextBody'
import { myPortableTextComponents } from '../PortableTextComponents'
import BentoGrid from '../ui/bento-grid'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { urlForImage } from '@/lib/urlForImage'

export default function Services({ section, classNames }:
    { section: any, classNames?: string }) {
    // console.log(section)
    return (
        <section id="services" className={`relative bg-foreground text-background`}>
            <div className="u-container">
                <div className="stack space-y-5">
                    <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-screen-sm'>
                        {section.title}
                    </h2>
                    {
                        section.subtitle && <p>{section.subtitle}</p>
                    }
                    {
                        section.cards && (
                            <BentoGrid classNames='grid plandscape:grid-cols-2 gap-5'>
                                {
                                    section.cards.map((card: any, index: number) => (
                                        <Card key={card._key}
                                            className={`
                                                bento-card bg-black text-secondary-foreground overflow-hidden
                                                ${index === 0 ? 'min-h-[320px]' : ''}
                                                ${index === 1 ? 'min-h-[400px]' : ''}
                                                ${index === 2 ? '' : ''}
                                                ${index === 3 ? '' : ''}
                                        `}>
                                            <div className="card-background absolute top-0 left-0 w-full h-full -z-0">
                                                {
                                                    card.image && (
                                                        <img
                                                            src={urlForImage(card.image)?.url()}
                                                            alt={card.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )
                                                }
                                            </div>
                                            <CardHeader className='relative z-0'>
                                                {
                                                    card.icon && (
                                                        <div className="card-icon">
                                                            <img
                                                                src={urlForImage(card.icon)?.url()}
                                                                alt={card.title}
                                                                className="laptop:size-12 size-6 object-fill"
                                                            />
                                                        </div>
                                                    )
                                                }

                                                {
                                                    card.title && (
                                                        <CardTitle
                                                            className={`text-xl tablet:text-3xl
                                                            ${(index === 2 || index === 3) && 'text-xl tablet:text-2xl'}`}
                                                        >
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
                                            <CardContent className='relative z-0'>
                                                {
                                                    card.body && (
                                                        <PortableTextBody
                                                            body={card.body}
                                                            components={myPortableTextComponents} />
                                                    )
                                                }
                                            </CardContent>
                                            {
                                                card.link && (
                                                    <CardFooter>
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

