import React from 'react'
import Portfolio from '../sections/Portfolio';

interface CallToAction {
    _key: string;
    label: string;
    url: string;
    variant?: 'default' | 'secondary';
    newPage?: string;
}

interface gallery {
    _key: string;
    _type: 'gallery';
    title: string;
    description: string;
    body: string;
    image: string;
    icon: string;
    cta?: CallToAction[];
}

interface Section {
    _type: 'iamgeGallery';
    _key: string;
    title: string;
    sectionName: string;
    gallery: gallery[];
    subtitle: string;
    cta?: CallToAction[];
}

interface Props {
    section: Section;
}

export default function Gallery({ section }: Props) {
    // console.log(section);

    switch (section.sectionName) {
        case 'portfolio':
            return <Portfolio section={section} />

        default:
            return null
    }
}
