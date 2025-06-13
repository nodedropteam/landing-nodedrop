import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <section>
            <Wrapper className='min-h-screen pt-60'>
                <div className="copy space-y-4 mb-8">
                    <h1 className='text-6xl text-center font-medium'>
                        Web development subscriptions to scale your life and business.
                    </h1>
                    <p className='text-2xl text-center text-muted-foreground'>
                        A design agency without a twist
                    </p>
                </div>

                <div className="cta-row flex flex-wrap gap-4 mx-auto w-fit">
                    <Button size={`lg`}>
                        See all plans
                    </Button>
                    <Button size={`lg`} variant={`outline`}>
                        Our work
                    </Button>
                </div>
            </Wrapper>
        </section>
    )
}
