import React from 'react'
import ProfileCard from '~/components/elements/ProfileCard'
import { ProfileCards } from '~/components/elements/ProfileCard'
import Header from '~/components/elements/Header'
import AboutProfile from '~/components/about/AboutProfile'

export default function page() {
    return (
        <div className='page-wrapper content'>
            <Header />
            <ProfileCard />
            <ProfileCards />
            <AboutProfile />
        </div>
    )
}
