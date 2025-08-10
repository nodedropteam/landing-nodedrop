const projectPosters = [
    {
        src: 'dynamic kidz zone.png',
        alt: 'Dynamic Kidz Zone',
        title: 'Dynamic Kidz Zone',
    },
    {
        src: 'emmahlubi.png',
        alt: 'Emmahlubi',
        title: 'Emmahlubi',
    }
]

export default function Projects() {
    return (
        <section className='full bg-brand text-background'>
            <div className="nodedrop-section flex flex-col relative">
                <div className="nodedrop-section-background"></div>
                <div className="nodedrop-section-block grow shrink basis-auto content py-16 relative">
                    <div className="noderop-section-content relative z-10">
                        <div className="nodedrop-section-block-background"></div>
                        <div className="nodedrop-section-block-content">
                            <h2 className='mb-12 text-heading2 text-center font-bold mx-auto'>
                                Our Projects
                            </h2>

                            <div className="flex flex-row flex-wrap gap-8">
                                {projectPosters.map((poster, index) => (
                                    <div key={index} className="basis-[400px] grow-0 shrink h-[500px] relative overflow-hidden">
                                        <img
                                            src={`/posters/${poster.src}`}
                                            alt={`Project ${index + 1}`} className="w-full h-auto object-cover" />
                                        <div className="card-content absolute left-0 top-0 w-full h-full flex flex-col gap-4 justify-end">
                                            <div className="header bg-accent text-accent-foreground">
                                                <h3 className='text-[24px] font-bold p-6 w-full'>{poster.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
