import React from 'react'
import CaseStudy from '~/components/elements/CaseStudy'
import Footer from '~/components/elements/Footer'
import Header from '~/components/elements/Header'
import Benefits from '~/components/landing/Benefits'
import CallToAction from '~/components/landing/CallToAction'
import Hero from '~/components/landing/Hero'
import Process from '~/components/landing/Process'
import Projects from '~/components/landing/Projects'
import ServiceIndustry from '~/components/landing/ServiceIndustry'
import Services from '~/components/landing/Services'
import Testimonials from '~/components/landing/Testimonials'
import ServiceTierList from '~/components/landing/TierList'

export default function HomePage() {
    return (
        <>
            <div className="page-wrapper content">
                <Header />
                <Hero />
                {/* <Process /> */}
                <ServiceIndustry />
                <CaseStudy />
                {/* <Testimonials /> */}
                <ServiceTierList />
                <Services />
                {/* <Projects /> */}
                {/* <Benefits /> */}
                <CallToAction />
                <Footer />
            </div>
        </>
    )
}
