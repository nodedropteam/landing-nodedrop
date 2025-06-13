import React from 'react'
import Benefits from '~/components/landing/Benefits'
import Hero from '~/components/landing/Hero'
import Process from '~/components/landing/Process'
import Projects from '~/components/landing/Projects'
import Services from '~/components/landing/Services'
import Testimonials from '~/components/landing/Testimonials'

export default function HomePage() {
    return (
        <>
        <div className="page-wrapper content">
            <Hero />
            <Process />
            <Testimonials />
            <Services />
            <Projects />
            <Benefits />
        </div>
        </>
    )
}
