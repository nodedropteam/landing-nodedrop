import React from 'react'

export default function BentoGrid({ children, classNames }:
    { children: React.ReactNode, classNames?: string }) {
    return (
        <div>
            <div className={`${classNames}`}>
                {children}
            </div>
        </div>
    )
}
