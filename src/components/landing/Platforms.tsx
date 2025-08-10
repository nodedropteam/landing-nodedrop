import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "~/components/ui/tooltip"
import Image from "next/image"

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
                                        <Image 
                                        src={`/logos/${platform}`} 
                                        alt={platform.replace(' logo.svg', '')} 
                                        height={48}
                                        width={48}
                                        className="object-contain" />
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
