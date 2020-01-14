import React from 'react'
import { Link } from 'gatsby'

import './CaseStudyLink.scss'

export interface CaseStudyLinkProps {
    slug: string,
    title: string,
    description: string,
    tags: string,
    image: {
        src: string,
        width: number,
        height: number
    }
}

const CaseStudyLink = (props: CaseStudyLinkProps) => {
    const { slug, title, description, tags, image } = props
    return (
        <div className="case-study-summary">
            <Link to={`/${slug}`} className="case-study-summary__link">
                <img
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    className="case-study-summary__image"
                />
                <div className="case-study-summary__text">
                    <h2 className="case-study-summary__title body bold">{`${title} `}</h2>
                    <p className="case-study-summary__description body">{description}</p>
                    <p className="case-study-summary__tags small-body mono c-text-on-light-subdued">{tags}</p>
                </div>
            </Link>
        </div>
    )
}

export default CaseStudyLink;