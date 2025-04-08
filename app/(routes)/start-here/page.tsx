import StartHereQuestionnaire from '@/app/_templates/start-here-questionnaire'
import Calendar from '@/components/calcom/calendar'
import React from 'react'

const notebook = {
    heading: `Start talking to Us`,
    text: ``,
    image: ``
}

export default function page() {
    return (
        <>
            <section className='wrapper py-24'>
                <div className="inner space-y-10">
                    <div className="stack text-center">
                        <h1>{notebook.heading}</h1>
                    </div>

                    <Calendar />

                    <div className='max-w-xl mx-auto'>
                        <h2 className='text-center'>Not ready for a call?</h2>
                        <StartHereQuestionnaire />
                    </div>
                </div>
            </section>
        </>
    )
}
