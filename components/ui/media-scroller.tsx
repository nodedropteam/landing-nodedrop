import React from 'react'

export default function MediaScroller({ children, displayCount = 3, classNames }:
    { children: React.ReactNode, displayCount?: number, classNames?: string }) {
    return (
        <div>
            <span className='sr-only'>Media Scroller</span>

            <div
                className={`media-scroller grid grid-flow-col max-sm:!auto-cols-[90%] 
            gap-5 overflow-x-auto snaps-inline scroll-px-[20px] auto-cols-[33%] ${classNames}`}>
                {children}
            </div>
        </div>
    )
}
