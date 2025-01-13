import Link from 'next/link'
import React from 'react'
import PortableTextBody from '../PortableTextBody';
import { myPortableTextComponents } from '../PortableTextComponents';
import { Button } from '../ui/button';


interface CallToAction {
    _key: string;
    _type: string;
    newPage?: string;
    buttonVariant?: 'default' | 'secondary';
    label: string;
    url: string;
}

interface HeroSection {
    _key: string;
    title: string;
    sectionName: string;
    _type: 'hero';
    subtitle: string;
    cta?: CallToAction[];
}

interface HeroProps {
    section: HeroSection;
}

export default function Hero({ section }: HeroProps) {
    // console.log(section)
    return (
        <section id="home">
            <div className="u-container pt-10 flex flex-col justify-center">
                <div className="stack space-y-10">
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>
                        {section.title}
                    </h1>
                    <div className='sm:text-xl'>
                        <PortableTextBody body={section.subtitle} components={myPortableTextComponents} />
                    </div>
                    {section.cta && section.cta.length > 0 && (
                        <div className="button-row max-sm:[&>*]:w-full max-sm:[&>*>*]:w-full flex flex-col sm:flex-row gap-5">
                            {section.cta.map((action) => (
                                <Link
                                    key={action._key}
                                    href={action.url}
                                    passHref
                                    target={(action.newPage === 'yes') ? '_blank' : undefined}
                                >
                                    <Button variant={action.buttonVariant}>
                                        {action.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
