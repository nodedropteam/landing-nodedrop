import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "~/components/ui/tooltip"

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

const platforms = [
    "wordpress logo.svg",
    "hostinger logo.svg",
    "Bluehost logo.svg",
    "webflow logo.svg",
    "aws logo.svg",
    "azure logo.svg",
    "figma logo.svg",
    "Google Cloud logo.svg",
    "framer logo.svg",
]

export default function Platforms() {
    return (
        <section className='full'>
            <div className="nodedrop-section relative flex flex-col text-foreground">
                <div className="noderop-section-background"></div>
                <div className="noderop-section-content grow shrink basis-auto flex flex-auto relaive w-full z-0">
                    <div className="nodedrop-section-content-background"></div>
                    <div className="nodedrop-section-block-content relative z-10 grow shrink basis-auto content py-16">
                        <h2 className='mb-8 text-heading5'>We build on several platforms:</h2>
                        <div className="flex flex-wrap gap-12 justify-between">
                            {platforms.map((platform) => (
                                <Tooltip key={platform}>
                                    <TooltipTrigger className="flex">
                                        <img src={`/logos/${platform}`} alt={platform.replace(' logo.svg', '')} className="max-h-12 object-contain" />
                                    </TooltipTrigger>
                                    <TooltipContent className="text-sm">
                                        <p>{platform.replace(' logo.svg', '').replace(/-/g, ' ')}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
