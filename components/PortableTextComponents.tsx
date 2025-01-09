import React from 'react'
// React icon for a link with fill color

export const myPortableTextComponents = {
    types: {
        // image: ({ value }) => {
        //     const imageUrl = urlForImage(value).format('webp').url()
        //     return <img src={`${imageUrl}`} alt="test alt" />
        // },
        list: (node: any) => {
            return (
                <ul className='space-y-2 list-disc'>
                    {node.children.map((child: any, index: any) => (
                        <li key={index}>{child}</li>
                    ))}
                </ul>
            )
        },
        divider: ({ value }: any) => {
            return <div style={{ height: `${value.height}px` }} />
        },
        code: (props: any) => {
            const { language, code } = props.value
            return (
                <pre data-language={language}>
                    <code>{code}</code>
                </pre>
            )
        }
    },

    marks: {
        span: ({ children }: { children: React.ReactNode }) => <sup className="sup">{children}</sup>,
        link: (node: any) => {
            return (
                <a href={node.value.link} target={node.value._blank ? '_blank' : ''}>
                    {node.children}
                </a>
            )
        }
    }
}