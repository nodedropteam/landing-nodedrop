import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'

const notebook = {
    heading: `Got Questions?`,
    text: ``,
    questions: {
        list: [
            {
                question: "Who is this service for?",
                answer: "We serve small to medium size businesses that need website redesigns and custom software solutions such as form collection systems."
            },
            {
                question: "How long does a project take?",
                answer: "We deliver project proposals and initial drafts of work within 72hours from the first meeting. We then offer revisions and constant communication from design to development which may take up to 2 weeks."
            },
            {
                question: "What platforms do you develop in?",
                answer: "We are able to develop in any platform of your choice, however we specialize in framer, webflow, and ReactJS."
            },
        ]
    }
}

export default function Faq() {
    return (
        <section id='what-we-offer' className='py-24'>
            <div className="inner space-y-8">
                <div className="stack">
                    <h1>{notebook.heading}</h1>
                    <p>{notebook.text}</p>
                </div>
                <Accordion collapsible type='single' className='gap-4'>
                    {
                        notebook.questions.list.map((q: any, index: any) => {
                            return (
                                <AccordionItem
                                    value={q.question}
                                    key={index}
                                    className='w-full flex items-start gap-2 relative'>
                                    <div className='grow'>
                                        <AccordionTrigger>
                                            <p className='h5'>{q.question}</p>
                                        </AccordionTrigger>
                                        <AccordionContent className='text-lg'>{q.answer}</AccordionContent>
                                    </div>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </section>
    )
}
