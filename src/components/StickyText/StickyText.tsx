import React from 'react'
import cx from 'classnames'
import './StickyText.scss'

interface StickyTextProps {
    children: React.ReactChild,
    maxWidth?: number,
    reverse?: boolean
}

export const StickyColumn = (props: StickyTextProps) => {
    const { children } = props;
    return (
        <div className="sticky-text__sticky-col">
            {children}
        </div>
    )
}

export const StaticColumn = (props: StickyTextProps) => {
    const { children, maxWidth } = props;
    return (
        <div className="sticky-text__static-col" style={{
            maxWidth: maxWidth || 'auto'
        }}>
            {children}
        </div>
    )
}

const StickyText = (props: StickyTextProps) => {
    const { children, reverse } = props;
    return (
        <div className={cx("sticky-text", {
            "sticky-text--reverse": reverse
        })}>
            {children}
        </div>
    )
}

export default StickyText;