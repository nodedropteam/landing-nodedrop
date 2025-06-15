import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button';
import { Check, ArrowRight } from 'lucide-react';


const services = [
    { name: "Websites" },
    { name: "Mobile Apps" },
    { name: "Logos & branding" },
    { name: "Design systems" },
    { name: "SAAS" },
    { name: "Wireframes" },
    { name: "Stationary" },
    { name: "Pitch decks" },
    { name: "Slide decks" },
    { name: "Direct mail" },
    { name: "Infographics" },
    { name: "Brochures" },
    { name: "Signage" },
    { name: "Brand guides" },
    { name: "Social media graphics" },
    { name: "Billboards" },
    { name: "Trade show banners" },
    { name: "Email graphics" },
    { name: "Resumes" },
    { name: "Business cards" },
    { name: "Packaging" },
    { name: "Blog graphics" },
    { name: "Digital ads" },
    { name: "Icons" }
];

const featured = [
    {name: "Design Systems"},
    {name: "Web Design"},
    {name: "Web Development"},
]


export default function Services() {
    return (
        <section>
            <Wrapper className='py-24 space-y-8' scrollName='services'>
                <h2 className='font-bold text-2xl md:text-4xl max-w-[480px] mb-16'>
                    Pick and choose your perfect service.
                </h2>

                <Button variant={`secondary`}>Learn more about our services</Button>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div className=''>
                            <Button size={`default`} variant={`link`} className='px-0'>
                                <Check strokeWidth={3} />{" "}{service.name}
                            </Button>
                        </div>
                    ))}
                </div> */}
                <div className='border-t'>
                    {featured.map((service, index) => (
                        <div className='border-b py-3 w-full flex justify-between items-center'>
                            <p className='font-medium'>{service.name}</p>
                            <ArrowRight />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}
