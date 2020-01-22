import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './CaseStudyLink.scss'

export interface CaseStudyLinkProps {
    slug: string,
    title: string,
    description: string,
    tags: string
}

const CaseStudyLink = (props: CaseStudyLinkProps) => {
    const { slug, title, description, tags } = props
    return (
        <div className="case-study-summary">
            <Link to={`/${slug}`} className="case-study-summary__link">

                <StaticQuery
                    query={graphql`
                            query ThumbnailImagesQuery {
                                cinebody: file(relativePath: { eq: "Cinebody-Thumb@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 768, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                heartwood: file(relativePath: { eq: "Heartwood-Thumb@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 768, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                geosure: file(relativePath: { eq: "GeoSure-Thumb@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 768, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                sprucelabs: file(relativePath: { eq: "Spruce-Labs-Thumb@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 768, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        `}
                    render={data => {
                        const key = slug.split('-').join('')
                        if (
                            data[key] &&
                            typeof data[key] !== 'undefined' &&
                            data[key].childImageSharp &&
                            data[key].childImageSharp.fluid) {

                            return (
                                <Img fluid={data[key].childImageSharp.fluid} className="case-study-summary__image" />
                            )
                        }
                        return null
                    }
                    }
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