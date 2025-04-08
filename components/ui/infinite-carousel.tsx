"use client"

import React, { useEffect } from 'react'
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from 'embla-carousel-react'

export default function InfiniteCarousel({ children }: { children: React.ReactNode }) {
    const [carousel, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ speed: 1, startDelay: 1000, stopOnInteraction: false })
    ])

    useEffect(() => {
        if (!emblaApi) return;

        const autoScroll = emblaApi.plugins().autoScroll;
        if (autoScroll) autoScroll.play();

        return () => {
            if (autoScroll) autoScroll.stop();
        }
    }, [emblaApi]);

    return (
        <div className='embla overflow-hidden' ref={carousel}>
            <div className="embla_container sb h-80 sm:h-[450px] py-4 px-4 flex gap-4">
                {children}
            </div>
        </div>
    )
}
