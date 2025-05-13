import React from 'react'
import { Asterisk } from 'lucide-react'

export default function QuestionnaireButton() {
    return (
        <div className="w-full p-2 py-4 flex gap-12 flex-wrap justify-between sticky top-0">
            <div>
                <a href="http://" className='h-14 px-12 rounded flex items-center justify-center font-semibold bg-black text-white hover:bg-pink-500 hover:text-black duration-300'>See our work</a>
            </div>
            <div className='max-w-80 space-y-4 border w-full h-full p-2 group hover:bg-black duration-300'>
                <a 
                href='' 
                className=' hover:underline group-hover:text-white'>Get started with a <span className='font-bold underline'>questionnaire</span> to find the right solution for you!</a>
                <Asterisk className='stroke-pink-600 animate-spin size-12 ml-auto group-hover:stroke-white' strokeWidth={3} />
            </div>
        </div>
    )
}
