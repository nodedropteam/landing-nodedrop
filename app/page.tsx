import React from 'react'
import Header from '@/components/ui/header';
import Hero from '@/components/landing/Hero';
import Portfolio from '@/components/landing/Portfolio';
import Services from '@/components/landing/Services';
import Features from '@/components/landing/Features';
import Process from '@/components/landing/Process';
import Footer from '@/components/landing/Footer';

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Features />
      <Process />
      <Footer />
    </>
  )
}
