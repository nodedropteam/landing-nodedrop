import React from 'react'
import { client } from "@/sanity/client"
import { type SanityDocument } from 'next-sanity'
import Hero from '@/components/sections/Hero'

const query = '*[_type == "home"]'

const options = { next: { revalidate: 30 } };

export default async function page() {
    const sections = await client.fetch<SanityDocument[]>(query, {}, options);

    return (
        <div>
            {sections[0].sections.map((section: any) => {
                switch (section._type) {
                    case 'hero':
                        return <Hero key={section._key} section={section} />
                    default:
                        return null
                }
            })}
        </div>
    )
}
