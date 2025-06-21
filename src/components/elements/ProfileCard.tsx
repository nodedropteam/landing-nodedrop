import Image from 'next/image'
import Wrapper from './Wrapper'
import { allDocs } from 'contentlayer/generated'
import { Button } from '../ui/button'
import Link from 'next/link'

const TeamMembers = [
    {
        name: "Chilufya Mutale",
        headshot: "/headshot_chilu.jpg",
        role: "",
        bio: ""
    },
    {
        name: "Tatenda Chimbindi",
        headshot: "/headshot_chilu.jpg",
        role: "",
        bio: ""
    },
    {
        name: "Tatho Mathebe",
        headshot: "/headshot_chilu.jpg",
        role: "",
        bio: ""
    },
]


export default function ProfileCard() {
    return (
        <div>
            <Wrapper className='py-12'>
                <div className='flex gap-4 items-start flex-wrap'>
                    <Image alt='headshot' src={`/headshot_chilu.jpg`} width={200} height={200} className='rounded-full' />
                    <div className="body space-y-2 pt-4">
                        <h3 className='font-bold text-lg'>Chilufya Mutale</h3>
                        <p>Founder & Lead Developer</p>
                        <p>@chilumm</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export function ProfileCards() {
    return (
        <div className='flex gap-4 flex-wrap'>
            {TeamMembers.map((member, index) => (
                <div key={index} className='flex gap-4 items-start flex-wrap'>
                    <Image alt='headshot' src={member.headshot} width={200} height={200} className='rounded-full' />
                    <div className="body space-y-2 pt-4">
                        <h3 className='font-bold text-lg'>{member.name}</h3>
                        <p>{member.role}</p>
                        <p>{member.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function ProfileCardList() {
    const docs = allDocs;

    return (
        <div>
            <Wrapper variant='hero' className='space-y-4'>
                <h3 className='font-bold text-lg'>Meet The Team</h3>
                <div className="flex flex-wrap gap-4">
                {
                    docs.map((doc, idx) => (
                        <div key={idx}>
                            <Link href={doc.url}>
                                <Button>{doc.title}</Button>
                            </Link>
                        </div>
                    ))
                }
                </div>
            </Wrapper>
        </div>
    )
}
