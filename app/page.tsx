import React from 'react'
import Hero from '@/components/landing/Hero'
import Header from '@/components/ui/header'
import Footer from '@/components/landing/Footer'
import Portfolio from '@/components/landing/Portfolio'
import Services from '@/components/landing/Services'
import Features from '@/components/landing/Features'
import Process from '@/components/landing/Process'
import Pricing from '@/components/landing/Pricing'

export default function page() {
    return (
        <>
            <Header />
            <Hero />
            <Portfolio />
            <Services />
            <Features />
            <Process />
            <Pricing />
            <Footer />
        </>
    )
}
