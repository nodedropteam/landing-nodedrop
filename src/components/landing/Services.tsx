import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';


const featured = [
    { name: "Design Systems", description: "Create a cohesive design system for your brand." },
    { name: "Web Design", description: "Craft visually stunning and user-friendly websites." },
    { name: "Web Development", description: "Build robust and scalable web applications." },
    { name: "SEO Optimization", description: "Enhance your website's visibility on search engines." },
    { name: "Content Creation", description: "Produce high-quality content that engages your audience." },
    { name: "Branding & Identity", description: "Develop a strong brand identity that resonates with your audience." },
    { name: "E-commerce Solutions", description: "Create seamless online shopping experiences." },
    { name: "Mobile App Development", description: "Design and develop mobile applications for iOS and Android." },
    { name: "Digital Marketing", description: "Implement effective digital marketing strategies to grow your business." },
    { name: "Consulting & Strategy", description: "Provide expert advice and strategic planning for your projects." },
]


export default function Services() {
    return (
        <section>
            <div className="nodedrop-section flex flex-col relative py-24">
                <div className="nodedrop-section-bg"></div>
                <div className="nodedrop-section-block grow shrink basis-auto relative content">
                    <div className="nodedrop-section-content flex flex-col relative">
                        <div className="nodedrop-section-block-bg"></div>
                        <div className="nodedrop-section-block-content grow shrink basis-auto">
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 max-w-[30ch] mx-auto'>Our Services</h2>
                            <p className='text-xl text-center mx-auto mb-12 max-w-[40ch]'>
                                Browse through our featured services below to find the perfect solution for your needs.
                            </p>
                            <Accordion type='single' collapsible className='w-full max-w-[800px] mx-auto'>
                                {featured.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className='border-t last:border-b  pt-6'>
                                        <AccordionTrigger className='text-large font-bold mb-4 text-center w-full'>{item.name}</AccordionTrigger>
                                        <AccordionContent className='text-lg text-center'>
                                            <p>
                                                {item.description}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
