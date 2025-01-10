import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// const query = '*[_type == "home"]'

// const options = { next: { revalidate: 30 } };

export default async function page() {
    // const sections = await client.fetch<SanityDocument[]>(query, {}, options);

    return (
        <section>
            <div className="u-container u-container--tall items-center">
                <div className="stack space-y-10">
                    <h1 className='text-4xl plandscape:text-6xl font-bold text-center'>We're Improving Your Experience!</h1>
                    <p className='text-base text-center mx-auto'>
                        Our website is currently undergoing maintenance, but we're still
                        here for you! Stay connected and reach out to us through our
                        social media platforms. Click the icons below to get in touch—we'd
                        love to hear from you!
                    </p>
                </div>
            </div>
            <div className="u-container py-[20px] fixed bottom-0 left-0 w-full">
                <footer>
                    <div className="inner flex flex-col md:flex-row gap-5 justify-between items-center">
                        <p>Built by <Link href={`/`} className='underline'>nodedrop</Link>.</p>
                        <p className='text-sm'>© 2025 nodedrop. All rights reserved.</p>
                        <nav className='space-x-5'>
                            <Link href={`/#home`} passHref>
                                <Button variant={`link`}>Twitter</Button>
                            </Link>
                            <Link href={`/#portfolio`} passHref>
                                <Button variant={`link`}>Instagram</Button>
                            </Link>
                        </nav>
                    </div>
                </footer>
            </div>
        </section>

    )
}
