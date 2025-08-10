import React from 'react'
import CaseStudy from '~/components/elements/CaseStudy'
import Footer from '~/components/elements/Footer'
import Header from '~/components/elements/Header'
import CallToAction from '~/components/landing/CallToAction'
import Hero from '~/components/landing/Hero'
import ServiceIndustry from '~/components/landing/ServiceIndustry'
import Services from '~/components/landing/Services'
import ServiceTierList from '~/components/landing/TierList'
import Platforms from '~/components/landing/Platforms'
import Projects from '~/components/landing/Projects'

export default function HomePage() {
    return (
            <div className="page-wrapper content">
                <Header />
                <Hero />
                <Platforms />
                <ServiceIndustry />
                <Projects />
                <CaseStudy />
                <ServiceTierList />
                <Services />
                <Footer />
            </div>
    )
}
