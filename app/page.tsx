import React from 'react'
import Hero from '@/components/landing/Hero'
import Header from '@/components/ui/header'
import Footer from '@/components/landing/Footer'
import Services from '@/components/landing/Services'
import Features from '@/components/landing/Features'
import Process from '@/components/landing/Process'
import Pricing from '@/components/landing/Pricing'
import Carousel from '@/components/ui/carousel'
import Portfolio from '@/components/landing/Portfolio'

export default function page() {
    return (
        <>
            <Header />
            <Hero />
            <Portfolio />
            {/* <Carousel /> */}
            <Services />
            <Features />
            <Process />
            <Pricing />
            <Footer />
        </>
    )
}
