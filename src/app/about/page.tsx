import React from 'react'
import { ProfileCardList } from '~/components/elements/ProfileCard'
import Header from '~/components/elements/Header'
import AboutProfile from '~/components/about/AboutProfile'
import Footer from '~/components/elements/Footer'

export default function page() {
    return (
        <div className='page-wrapper content'>
            <Header />
            <ProfileCardList />
            <AboutProfile />
            <Footer />
        </div>
    )
}
