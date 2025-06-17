import React from 'react'
import { allDocs } from 'contentlayer/generated'
import Wrapper from '~/components/elements/Wrapper'
import Header from '~/components/elements/Header'
import Footer from '~/components/elements/Footer'
import Image from 'next/image'
import type { Doc } from 'contentlayer/generated'

export const generateStaticParams = async () => allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }))

// export const generateMetadata = ()

function ProfileCard({ headshot, title, role, social }: Partial<Doc>) {
    return (
        <div>
            <Wrapper className='py-12'>
                <div className='flex gap-4 items-start flex-wrap'>
                    {
                        headshot && (
                            <Image alt='headshot' src={headshot} width={200} height={200} className='rounded-full' />
                        )
                    }
                    <div className="body space-y-2 pt-4">
                        <h3 className='font-bold text-lg'>{title}</h3>
                        <p>{role}</p>
                        <p>{social}</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug)
    if (!doc) throw new Error(`Doc not found for slug: ${slug}`)
    return (
        <div className='page-wrapper content'>
            <Header />
            <div>
                <Wrapper variant='hero'>
                    <ProfileCard headshot={doc.headshot} title={doc.title} role={doc.role} social={doc.social} />
                    <article className="w-full max-w-[60ch] py-8">
                        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 contentlayer-md" dangerouslySetInnerHTML={{ __html: doc.body.html }} />
                    </article>
                </Wrapper>
            </div>
            <Footer />
        </div>
    )
}
