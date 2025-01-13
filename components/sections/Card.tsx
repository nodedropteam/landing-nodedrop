import React from 'react'
import Services from '../sections/Services';
import Process from '../sections/Process';

interface CallToAction {
    _key: string;
    label: string;
    url: string;
    variant?: 'default' | 'secondary';
    newPage?: string;
}

interface Card {
    _key: string;
    _type: 'card';
    title: string;
    description: string;
    body: string;
    image: string;
    icon: string;
    cta?: CallToAction[];
}

interface Section {
    _type: 'cardsSection';
    _key: string;
    title: string;
    sectionName: string;
    cards: Card[];
    subtitle: string;
    cta?: CallToAction[];
}

interface Props {
    section: Section;
}

export default function Card({ section }: Props) {
    // console.log(section.cards);

    switch (section.sectionName) {
        case 'services':
            return <Services section={section} />
        case 'how-it-works':
            return (<Process section={section} />)
        case 'pricing':
            return null

        default:
            return null
    }
}
