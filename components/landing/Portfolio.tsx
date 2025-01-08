import React from 'react'

const portfolio: Array<object> = [
    {}, {}, {}, {}
]

export default function Portfolio() {
    return (
        <section id='portfolio' className='relative bg-foreground text-background'>
            <div className="u-container pt-32 pr-0">
                <div className="stack space-y-10">
                    <h3 className='text-3xl sm:text-4xl w-full max-w-screen-sm'>
                        Our innovative designs help businesses stand out, attract clients,
                        and generate leads effortlessly.
                    </h3>
                    <div className="carousel-reel overflow-x-hidden">
                        <div className="carousel-reel-items grid grid-flow-col auto-cols-[100%] 
                        sm:auto-cols-[50%] lg:auto-cols-[33%] gap-5 w-full">
                            {
                                portfolio.map((item, index) => {
                                    return (
                                        <div key={index} className="image-wrapper h-[300px] 
                                        w-full bg-secondary rounded-3xl">
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
