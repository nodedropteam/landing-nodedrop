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
                        <h4 className='font-bold text-lg'>About</h4>
                        <p>
                            {`                            I'm Chilufya Mutale—Full Stack Developer, designer, and
                            founder of this studio. With a background in Computer
                            Science and years of experience building digital products,
                            I specialize in creating clean, scalable, and user-friendly software.
`}                            <br />
                            {`                            From front-end design to back-end architecture, I build web
                            experiences that are fast, intuitive, and built to last.
                            I care about performance, usability, and the small details that make big impacts.
`}                            <br />
                            {`                            This work isn’t just about code—it’s about helping people
                            bring ideas to life with clarity, craft, and confidence.
`}                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-bold text-lg'>How I can help.</h4>
                        <ul className='space-y-2 list-disc'>
                            <li>
                                <span className='font-bold block'>Custom Web Design and Development</span>
                                <p>
                                    Fast, responsive websites with a focus on usability, performance, and visual impact.
                                </p>
                            </li>
                            <li>
                                <span className='font-bold block'>Web Apps & MVPs</span>
                                <p>
                                    Scalable, production-ready tools and apps tailored to your business logic.
                                </p>
                            </li>
                            <li>
                                <span className='font-bold block'>CMS Integrations (Sanity, WordPress, etc.)</span>
                                <p>
                                    Dynamic content management for marketing sites or editorial teams.
                                </p>
                            </li>
                            <li>
                                <span className='font-bold block'>UI/UX Design Systems</span>
                                <p>
                                    From Figma to frontend—design systems that stay consistent and scale.
                                </p>
                            </li>
                            <li>
                                <span className='font-bold block'>Technical Consulting</span>
                                <p>
                                    Architecture planning, audits, and strategic guidance for digital projects.
                                </p>
                            </li>
                        </ul>

                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-bold text-lg'>Contact</h4>
                        <ul>
                            <li>
                                <Link href={`mailto:cmutalem@gmail.com`}>
                                    <Button className='px-0' size={`sm`} variant={`link`}>cmutalem@gmail.com</Button></Link>
                            </li>
                            <li>
                                <Link href={`https://www.github.com/cmmutale`} target='_blank'>
                                    <Button className='px-0' size={`sm`} variant={`link`}>github: cmmutale</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={`https://www.linkedin.com/in/chilufya-mutale`} target='_blank'>
                                    <Button className='px-0' size={`sm`} variant={`link`}>LinkedIn: Chilufya Mutale</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
