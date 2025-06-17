import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
    variant?: 'base' | 'wide' | 'full' | 'hero';
    scrollName?: string;
}

export default function Wrapper({ children, className = '', variant = 'base', scrollName }: Props) {
    const variants = {
        base: '',
        wide: 'feature',
        full: 'full',
        hero: 'pt-36',
    };

    const classString = `${className} ${variants[variant]}`.trim();

    return (
        <div className={`mx-auto relative ${classString}`} id={scrollName}>
            {children}
        </div>
    );
}
