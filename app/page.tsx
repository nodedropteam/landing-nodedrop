import React from 'react'
import { client } from "@/sanity/client"
import { type SanityDocument } from 'next-sanity'
import Hero from '@/components/sections/Hero'
import Card from '@/components/sections/Card'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/landing/Footer'
import Header from '@/components/ui/header'

// const query = '*[_type == "homePage"]'

const query = `*[_type == "homePage"] {
    pageBuilder[] {
      ...,
      portfolioItems[]-> { 
        _id,
        title,
        image,
        alt
      }
    }
  }`;

const options = { next: { revalidate: 30 } };

export default async function page() {
  const sections = await client.fetch<SanityDocument[]>(query, {}, options);
  // console.log(sections[0])

  return (
    <div>
      <Header />
      {sections[0].pageBuilder.map((section: any) => {
        switch (section._type) {
          case 'hero':
            return <Hero key={section._key} section={section} />
          case 'cardsSection':
            return <Card key={section._key} section={section} />
          case 'portfolio':
            return <Gallery key={section._key} section={section} />
          case 'gallery':
            return <Gallery key={section._key} section={section} />
          default:
            return null
        }
      })}
      <Footer />
    </div>
  )
}
