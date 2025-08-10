import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section>
      <Wrapper className='py-24'>
        <div className="copy max-w-2xl mx-auto mb-8">
          <h2 className='font-medium text-3xl md:text-5xl text-center'>
            {"Get started with a free audit if you're still not sure."}
          </h2>
        </div>

        <div className="cta-row flex flex-wrap md:flex-flex-nowrap justify-center gap-4 mx-auto w-fit">
          <Link className='w-full' href={process.env.CALENDLY_LINK ?? "/not-found"} target='_blank'>
            <Button>
              Schedule Project Audit
            </Button>
          </Link>
          <Link className='w-full' href="/projects">
            <Button variant={`secondary`}>
              See Our work
            </Button>
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}
