import Wrapper from '~/components/elements/Wrapper'
import { Button } from '~/components/ui/button';

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
        <section>
            <Wrapper className='py-24 flex flex-wrap gap-4' scrollName='about'>
                <div className="copy w-full md:w-1/5 grow">
                    <h2 className='font-bold text-2xl md:text-4xl max-w-[480px] mb-16'>
                        We design and develop for service businesses.
                    </h2>
                </div>

                <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-4/6">
                    {processSteps.map((step, index) => (
                        <div key={index} className='w-full'>
                            <div className="card bg-card p-2 border rounded-md h-full" key={index}>
                                <div className="card-header pb-3">
                                    <Button size={`icon`} variant={`default`} className='mb-8 rounded-sm'>
                                        {""}{index + 1}
                                    </Button>
                                    <h3 className="card-header-title font-bold text-lg">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="card-description">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}
