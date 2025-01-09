import { PortableText } from '@portabletext/react'

import React from 'react'

export default function PortableTextBody({ body, components }: any) {
    return (
        <div className='' >
            <PortableText value={body} components={components} />
        </div >)
}
