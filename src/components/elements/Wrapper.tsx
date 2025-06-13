import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    variant?: string;
}

export default function Wrapper({ children, className }: Props) {
    const variants = {
        "base": "",
        "wide": "feature",
        "full": "full"
    }

    const classString = `${className} ${variants}`.trim()

    return (
        <div className={`mx-auto relative ${classString}`}>
            {children}
        </div>
    )
}
