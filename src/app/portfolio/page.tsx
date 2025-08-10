import React from 'react'
import Header from '~/components/elements/Header'
import Footer from '~/components/elements/Footer'
import PortfolioGrid from '~/components/portfolio/portfolio-grid'

export default function PortfolioPage() {
    return (
        <div className="page-wrapper content bg-primary text-primary-foreground">
            <Header />
            <PortfolioGrid />
            <Footer />
        </div>
    )
}
