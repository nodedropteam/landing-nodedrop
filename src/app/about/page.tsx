import React from 'react'
import Header from '~/components/elements/Header'
import Footer from '~/components/elements/Footer'

export default function page() {
    return (
        <div className='page-wrapper content bg-primary text-primary-foreground'>
            <Header />
            {/* <ProfileCardList />
            <AboutProfile /> */}
            <div className='py-40'>
                <p className='text-large text-center mx-auto max-w-[30ch] font-bold !leading-[175%]'>
                    {"Hi, we're Nodedrop, and we build enterprise software and platforms for small to medium sized businesses."}

                    {`With professionals scattered accross the globe, across the timezones, we deliver 
                    the best products and services for our clients, understanding and meeting their needs
                    wherever they are.`}</p>

            </div>
            <Footer />
        </div>
    )
}
