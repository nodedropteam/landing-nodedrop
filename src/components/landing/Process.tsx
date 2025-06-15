import React from 'react'
import Wrapper from '../elements/Wrapper'
import { Button } from '../ui/button';

const processSteps = [
  {
    title: "Submit",
    description: "We did reinvented the wheel and also just design"
  },
  {
    title: "Refine",
    description: "Receive your design within a few business days on average."
  },
  {
    title: "Build",
    description: "Receive your design within a few business days on average."
  },
  {
    title: "Enjoy",
    description: "Receive your design within a few business days on average."
  }
];


export default function Process() {
  return (
    <section>
      <Wrapper className='py-24'>
        <h2 className='font-medium text-3xl max-w-[480px] mb-16'>
          We did reinvented the wheel and also just design
        </h2>

        <div className="card-grid flex flex-wrap gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className='w-full sm:w-[35%] lg:w-[20%] grow'>
            <div className="card">
              <div className="card-header pb-3">
                <Button size={`icon`} variant={`default`} className='mb-8 rounded-sm'>
                  {""}{index + 1}
                </Button>
                <h3 className="card-header-title font-bold text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="card-description">
                {step.description}
              </p>
            </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
