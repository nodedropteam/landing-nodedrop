import React from 'react'
import Wrapper from '../elements/Wrapper'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function AboutProfile() {
    return (
        <div>
            <Wrapper className='py-12'>
                <div className='max-w-[60ch] space-y-8'>
                    <div className='space-y-4'>
                        <h4 className='font-bold'>About</h4>
                        <p>
                            I graduated with a degree in Computer Science and I now work as a
                            Full Stack Developer. I design and develop for the complete project life-cycle
                            from front-end to back-end. I focus on building effecient and hollistic
                            solutions that are scalable, maintainable, and easy to use.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-bold'>Contact</h4>
                        <ul>
                            <li>
                                <Link href={`mailto:cmutalem@gmail.com`}>
                                    <Button className='px-0' variant={`link`}>cmutalem@gmail.com</Button></Link>
                            </li>
                            <li>
                                <Link href={`https://www.github.com/cmmutale`} target='_blank'>
                                    <Button className='px-0' variant={`link`}>github: cmmutale</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={`https://www.linkedin.com/in/chilufya-mutale`} target='_blank'>
                                    <Button className='px-0' variant={`link`}>LinkedIn: Chilufya Mutale</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
