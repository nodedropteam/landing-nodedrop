const processSteps = [
    {
        title: "Audit",
        description: "Get a free 3 minute project audit discussing your project and your options."
    },
    {
        title: "Place order",
        description: "Pick the package that works best for you, sit back and let us handle it."
    },
    {
        title: "Build",
        description: "Receive your design within a few business days on average."
    },
    {
        title: "Enjoy",
        description: "Launch and watch your business out-perform and out-class your competitors."
    }
];

export default function ServiceIndustry() {
    return (
        <section className='full'>
            <div className="nodedrop-section relative flex flex-col text-foreground">
                <div className="noderop-section-background"></div>
                <div className="noderop-section-content grow shrink basis-auto flex flex-auto relaive w-full z-0 py-16">
                    <div className="nodedrop-section-content-background"></div>
                    <div className="nodedrop-section-block-content relative z-10 grow shrink basis-auto content py-16">
                        <h2 className='mb-12 text-heading2 text-center font-bold mx-auto'>
                            We design and develop for service businesses.
                        </h2>
                        <p className="text-center text-xl mb-12 max-w-[60ch] mx-auto">
                            Our process is simple and effective, designed to get you the best results with minimal hassle.
                        </p>

                        <div className="flex flex-row gap-8 justify-center flex-wrap">
                            {processSteps.map((step, index) => (
                                <div key={index} className="basis-[300px] grow-0 shrink-0 aspect-[2/3]">
                                <div key={index} className="w-full py-8 px-6 flex flex-col gap-4 bg-black text-white hover:bg-secondary transition-colors duration-300 h-full">
                                    <h3 className='text-[28px] font-bold'>{step.title}</h3>
                                    <p className='text-sm'>{step.description}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
