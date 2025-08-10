import React from 'react'
import Wrapper from '../elements/Wrapper'

export default function AboutProfile() {
    return (
        <div>
            <Wrapper className='py-12'>
                <div className='max-w-[60ch] space-y-8'>
                    <div className='space-y-4'>
                        <h4 className='font-bold text-lg'>About</h4>
                        <p>
                            {`                            Nodedrop was founded in 2024 with a simple goal: to bridge the gap between functional design and powerful software. We help businesses turn complex ideas into intuitive, scalable digital products—without the overhead of a full in-house team.
`}                            <br />
                            {`                            Whether it's a website, custom app, or internal tool, we craft solutions tailored to real business challenges. Our work is lean, focused, and built to last—so you get thoughtful design and solid engineering, without wasting time or budget.
`}                            <br />
                            {`                            Think of us as your technical partner: nimble, reliable, and just as invested in your success as you are.
`}                        </p>
                    </div>
                    <div className='space-y-4'>
                    </div>
                    <div className='space-y-4'>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
