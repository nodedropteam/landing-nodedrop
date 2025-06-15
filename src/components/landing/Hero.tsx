import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
    return (
        <section>
            <Wrapper className='min-h-screen pt-54'>
                <div className="copy space-y-4 mb-8">
                    <div className='flex justify-center mb-8'>
                    <Image src={`/NODEDROP.svg`} width={100} height={100} alt='nodedrop logo' />
                    </div>
                    <h1 className='text-5xl md:text-7xl lg:text-8xl text-center font-bold'>
                        REAL BUSINESSES SHOW UP ONLINE.
                    </h1>
                    <p className='text-2xl text-center text-muted-foreground'>
                        A design agency without a twist
                    </p>
                </div>

                <div className="cta-row flex flex-wrap gap-4 mx-auto w-fit">
                    <Button size={`lg`}>
                        Schedule Project Audit
                    </Button>
                    <Button size={`lg`} variant={`outline`}>
                        See Our work
                    </Button>
                </div>
            </Wrapper>
        </section>
    )
}
