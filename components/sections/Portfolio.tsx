import React from 'react'
import MediaScroller from '../ui/media-scroller'
import PortableTextBody from '../PortableTextBody'
import { myPortableTextComponents } from '../PortableTextComponents'

export default function Portfolio({ section }: any) {
    return (
        <section id={section.sectionName} className='relative bg-foreground text-background'>
            <div className="u-container pt-32 pr-0">
                <div className="stack space-y-10">
                    <h3 className='text-3xl sm:text-4xl w-full max-w-[640px]'>
                        <PortableTextBody body={section.subtitle} components={myPortableTextComponents} />
                    </h3>
                    <MediaScroller classNames='plandscape:auto-cols-[47%] laptop:auto-cols-[33%]'>
                        {
                            section.images && section.images.map((item: any, index: number) => {
                                return (
                                    <div key={index} className="image-wrapper h-[300px] 
                                                w-full bg-primary rounded-3xl mb-3">
                                    </div>
                                )
                            })
                        }
                    </MediaScroller>
                </div>
            </div>
        </section>

    )
}
