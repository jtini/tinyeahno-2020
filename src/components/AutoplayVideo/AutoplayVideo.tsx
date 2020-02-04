import React from 'react'
import { Waypoint } from 'react-waypoint'
import LazyLoad from 'react-lazyload';

interface AutoplayVideoProps {
    src: string,
    height: number
}

const AutoplayVideo = (props: AutoplayVideoProps) => {
    const { src, height } = props;

    const videoEl = React.useRef(null)

    const onEnter = () => {
        videoEl.current.play()
    }

    const onLeave = () => {
        videoEl.current.pause()
    }

    return (
        <LazyLoad
            height={height}
        >
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
        </LazyLoad>
    )
}

export default AutoplayVideo