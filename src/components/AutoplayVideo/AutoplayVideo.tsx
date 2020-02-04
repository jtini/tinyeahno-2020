import React from 'react'
import { Waypoint } from 'react-waypoint'
import LazyLoad from 'react-lazyload';
import cx from 'classnames'
import './AutoplayVideo.scss'

interface AutoplayVideoProps {
    src: string,
    height: number,
    className?: string,
    wrapperClassName?: string
}

const AutoplayVideo = (props: AutoplayVideoProps) => {
    const { src, height, className, wrapperClassName } = props;

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
                <div className={cx('autoplay-video', wrapperClassName)} >
                    <video
                        className={cx('autoplay-video__video', className)}
                        ref={videoEl}
                        src={src}
                        loop
                        muted
                    />
                </div>
            </Waypoint>
        </LazyLoad >
    )
}

export default AutoplayVideo