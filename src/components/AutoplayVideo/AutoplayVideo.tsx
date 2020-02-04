import React from 'react'
import { Waypoint } from 'react-waypoint'

interface AutoplayVideoProps {
    src: string
}

const AutoplayVideo = (props: AutoplayVideoProps) => {
    const { src } = props;

    const onEnter = () => {
        console.log('enter')
    }

    const onLeave = () => {
        console.log('leave')
    }

    return (
        <Waypoint
            onEnter={onEnter}
            onLeave={onLeave}
        >
            <video src={src} />
        </Waypoint>
    )
}

export default AutoplayVideo