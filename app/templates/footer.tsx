import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileInput } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer id='contact' className='full relative py-40'>
                <div className="inner content-grid space-y-8">
                    <div className="stack">
                        <h2 className='h1'>Enough chit-chat...</h2>
                        <p>Fill out a form, or schedule a meeting with our team.</p>
                    </div>
                    <div className="button-row flex flex-wrap gap-4">
                        <Link className='block' href={process.env.CAL_COM_LINK as string || "#"} target='_blank'>
                            <Button className="cta !h-auto rounded-full !px-2 !pr-4">
                                <div className="img size-10 sm:size-14 bg-pink-500 rounded-full relative overflow-hidden">
                                    <Image
                                        src='/media_07.png'
                                        alt=''
                                        fill />
                                </div>
                                <span className='text-sm font-semibold'>Schedule a meeting</span>
                            </Button>
                        </Link>
                        <Link href={process.env.QUOTE_FLYER as string || "#"} target='_blank'>
                            <Button variant={`outline`} className="cta !h-auto rounded-full !px-2 !pr-4">
                                <div className="img size-10 sm:size-14 rounded-full 
                        flex items-center bg-background justify-center border">
                                    <FileInput strokeWidth={1.25} className='!size-5 md:!size-6' />
                                </div>
                                <span className='text-sm font-semibold'>Get a quote</span>
                            </Button>
                        </Link>
                        {/* <Link href={`/#`}>
                    <Button variant={`outline`} className="cta !h-auto rounded-full !px-2 !pr-4">
                        <div className="img size-10 sm:size-14 rounded-full 
                        flex items-center bg-background justify-center border">
                            <MonitorDown strokeWidth={1.25} className='!size-5 md:!size-6' />
                        </div>
                        <span className='text-sm font-semibold'>Download a free template</span>
                    </Button>
                </Link> */}
                    </div>
                </div>
            </footer>
        </>
    )
}
