import React from 'react'
import PortableTextBody from '../PortableTextBody'
import { myPortableTextComponents } from '../PortableTextComponents'
import BentoGrid from '../ui/bento-grid'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'

const services = [
    {
        title: 'Design',
        description: 'Tailored designs that reflect your brand identity and solve specific business challenges.',
        image: '/media__44.jpg',
    },
    {
        title: 'Development',
        description: 'We build custom solutions, on any platform specific to your business needs.',
        image: '/media__42.jpg',
    },
    {
        title: 'Brand identity & Concept design',
        description: 'We help you stand out and reach your audience with your message, and personality.',
        image: '',
    },
    {
        title: 'Maintenance & Hosting',
        description: 'We build software that is fast, secure, and scalable.',
        image: '',
    }
]

export default function Services() {
    // console.log(section)
    return (
        <section id="services" className={`relative bg-foreground text-background`}>
            <div className="u-container">
                <div className="stack space-y-5">
                    <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-screen-sm'>
                        Comprehensive solutions to meet your website needs.
                    </h2>
                    {
                        services && (
                            <BentoGrid classNames='grid plandscape:grid-cols-2 gap-5'>
                                {
                                    services.map((card: any, index: number) => (
                                        <Card key={index}
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
                                                            src={card.image}
                                                            alt={card.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )
                                                }
                                            </div>
                                            <CardHeader className='relative z-0'>
                                                {/* {
                                                    card.icon && (
                                                        <div className="card-icon">
                                                            <img
                                                                src={urlForImage(card.icon)?.url()}
                                                                alt={card.title}
                                                                className="laptop:size-12 size-6 object-fill"
                                                            />
                                                        </div>
                                                    )
                                                } */}

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
                                                            {card.description}
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

