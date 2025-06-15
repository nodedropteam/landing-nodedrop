import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '~/components/elements/Wrapper'
import { Button } from '~/components/ui/button'

export default function NotFound() {
    return (
        <div className="page-wrapper content">
            <section>
                <Wrapper className='min-h-screen pt-36 sm:pt-54'>
                    <div className="copy space-y-4 mb-8">
                        <div className='flex justify-center mb-8'>
                            <Image src={`/NODEDROP.svg`} width={100} height={100} alt='nodedrop logo' />
                        </div>
                        <h1 className='text-5xl md:text-7xl lg:text-8xl text-center font-bold'>
                            {"Sorry, that page doesn't exist."}
                        </h1>
                        <p className='text-xl sm:text-2xl text-center text-muted-foreground'>
                        </p>
                    </div>

                    <div className="cta-row flex flex-wrap justify-center gap-4 mx-auto w-fit">
                        <Link className='block' href="/">
                            <Button size={`lg`} variant={`link`}>
                                Back home
                            </Button>
                        </Link>
                    </div>
                </Wrapper>
            </section>
        </div>
    )
}
