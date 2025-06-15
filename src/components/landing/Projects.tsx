import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'

export default function Projects() {
  return (
    <section>
      <Wrapper className='py-24 space-y-24'>
        <div className="copy mb-8">
          <h2 className='font-bold text-2xl md:text-4xl max-w-[480px] mb-16'>
            Check out some free resources.
          </h2>
        </div>

        <Button variant={`secondary`}>See all our work</Button>

        <div className="card-grid grid grid-cols-3">
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              [image here]
              <CardDescription>2025</CardDescription>
              <div>
                <span>Figma/</span>
                Design Development
              </div>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  )
}
