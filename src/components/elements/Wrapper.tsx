import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    variant?: string;
    scrollName?: string;
}

export default function Wrapper({ children, className, scrollName }: Props) {
    const variants = {
        "base": "",
        "wide": "feature",
        "full": "full"
    }

    const classString = `${className} ${variants}`.trim()

    return (
        <div className={`mx-auto relative ${classString}`} id={scrollName}>
            {children}
        </div>
    )
}
