import React from 'react'

interface WrapperProps {
    children: React.ReactChild
}

const Wrapper = (props: WrapperProps) => {
    const { children } = props;
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper