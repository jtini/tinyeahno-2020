import React from 'react'
import cx from 'classnames'

interface ContainerProps {
    children: React.ReactChild,
    className?: string
}

const Container = (props: ContainerProps) => {
    const { children, className } = props;
    return (
        <div className={cx("container", className)}>
            {children}
        </div>
    )
}

export default Container