import React from 'react';
import MediaScroller from '../ui/media-scroller';
import PortableTextBody from '../PortableTextBody';
import { myPortableTextComponents } from '../PortableTextComponents';
import Image from 'next/image';
import { urlForImage } from '@/lib/urlForImage';

export default function Portfolio({ section }: any) {
    return (
        <section id={section.sectionName} className="relative bg-foreground text-background">
            <div className="u-container pt-32 pr-0">
                <div className="stack space-y-10">
                    <h3 className="text-3xl sm:text-4xl w-full max-w-[640px]">
                        <PortableTextBody body={section.subtitle} components={myPortableTextComponents} />
                    </h3>
                    <MediaScroller classNames="plandscape:auto-cols-[47%] laptop:auto-cols-[33%]">
                        {section.portfolioItems &&
                            section.portfolioItems.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl 
                                    bg-white border-[6px] border-primary/20 duration-300 h-[300px] mb-5"
                                >
                                    {item.image && (
                                        <Image
                                            fill
                                            src={urlForImage(item.image).url()}
                                            alt={item.alt || 'Portfolio item'}
                                            className="w-full object-cover group-hover:scale-100 transition-transform duration-300"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white text-lg font-semibold">{item.title || 'Project Title'}</h3>
                                        {/* <p className="text-white text-sm">{item.description || 'Brief description of the project.'}</p> */}
                                    </div>
                                </div>
                            ))}
                    </MediaScroller>
                </div>
            </div>
        </section>
    );
}
