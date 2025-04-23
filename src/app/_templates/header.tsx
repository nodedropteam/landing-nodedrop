import FadeDown from '@/components/animations/fadedown'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='full content-grid py-8 w-full'>
            <div className="inner flex items-center justify-between">
                <FadeDown>
                    <div className="logo">
                        <Link
                            href={`/`}
                            className='font-bold text-[24px] underline underline-offset-8 relative'>
                            <span className='z-0'>NodeDrop</span>
                        </Link>
                    </div>
                </FadeDown>
                <div>
                    <Link href={`/start-here`} className='block'>
                        <Button size={`lg`} >Start here</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
