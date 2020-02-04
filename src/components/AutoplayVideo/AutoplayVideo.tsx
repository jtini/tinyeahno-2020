import React from 'react'
import { Waypoint } from 'react-waypoint'

interface AutoplayVideoProps {
    src: string
}

const AutoplayVideo = (props: AutoplayVideoProps) => {
    const { src } = props;

    const videoEl = React.useRef(null)

    const onEnter = () => {
        videoEl.current.play()
    }

    const onLeave = () => {
        videoEl.current.pause()
    }

    return (
        <Waypoint
            onEnter={onEnter}
            onLeave={onLeave}
        >
            <video
                ref={videoEl}
                src={src}
                loop
                muted
            />
        </Waypoint>
    )
}

export default AutoplayVideo