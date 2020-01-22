import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'

import "./CaseStudyIntro.scss"

interface TextBlockProps {
    headline?: string,
    text?: string
}

const TextBlock = (props: TextBlockProps) => {
    const { headline, text } = props;
    return (
        <>
            {headline && <h3 className="body bold">{headline}</h3>}
            {text && <p className="body">{text}</p>}
        </>
    )
}

interface QuoteBlockProps {
    quote?: string,
    attribution?: string
}

const QuoteBlock = (props: QuoteBlockProps) => {
    const { quote, attribution } = props;
    return (
        <blockquote>
            {quote && <p className="subheadline display">{quote}</p>}
            {attribution &&
                <p className="attribution small-body c-text-on-light-subdued">{attribution}</p>
            }
        </blockquote>
    )
}

interface ListBlockProps {
    headline?: string,
    items?: string[]
}

const ListBlock = (props: ListBlockProps) => {
    const { headline, items } = props;
    return (
        <>
            {headline && <h3 className="case-study-intro__aside-list-header body bold">{headline}</h3>}
            {items && items.length > 0 &&
                <ul className="case-study-intro__aside-list">
                    {items.map(item => (
                        <li
                            key={item}
                            className="case-study-intro__aside-list-item small-body mono">
                            <ReactMarkdown source={item} linkTarget="_blank" />
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}

type HeroImage = {
    src: string,
    alt: string
}

type ContentPiece = {
    kind: 'text' | 'quote',
    headline?: string,
    text?: string,
    quote?: string,
    attribution?: string
}

interface CaseStudyIntroProps {
    title: string,
    subtitle?: string,
    content?: ContentPiece[],
    aside?: ListBlockProps[],
    darkBg?: boolean,
    heroKey: string
}

const blocks = {
    text: TextBlock,
    quote: QuoteBlock,
    list: ListBlock
}

const CaseStudyIntro = (props: CaseStudyIntroProps) => {
    const { title, subtitle, content, aside, darkBg, heroKey } = props;
    return (
        <>
            <section className={cx("case-study-intro", { "case-study-intro--dark-bg": darkBg })}>
                <div className="case-study-intro__hero-image_wrapper">
                    <StaticQuery
                        query={graphql`
                            query HeroImagesQuery {
                                cinebody: file(relativePath: { eq: "Cinebody-Hero@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                heartwood: file(relativePath: { eq: "Heartwood-Hero@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                geosure: file(relativePath: { eq: "GeoSure-Hero@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                sprucelabs: file(relativePath: { eq: "Spruce-Labs-Hero@2x.png" }) {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        `}
                        render={data => {
                            if (
                                data[heroKey] &&
                                typeof data[heroKey] !== 'undefined' &&
                                data[heroKey].childImageSharp &&
                                data[heroKey].childImageSharp.fluid) {

                                return (
                                    <Img fluid={data[heroKey].childImageSharp.fluid} className="case-study-intro__hero-image" />
                                )
                            }
                            return null
                        }
                        }
                    />
                </div>
                <div className="case-study-intro__inner wrapper">
                    <div className="case-study-intro__container">
                        <h1 className="case-study-intro__title large-body bold">{title}</h1>
                        <p className="case-study-intro__subtitle">{subtitle}</p>


                        <div className="case-study-intro__text-container">
                            <div className="case-study-intro__text">
                                {content && content.length > 0 && content.map((entry, idx) => {
                                    const Element = blocks[entry.kind]

                                    if (!blocks[entry.kind]) {
                                        return null
                                    }

                                    return (
                                        <Fragment key={idx}>
                                            <Element {...entry} />
                                        </Fragment>
                                    )
                                })}
                            </div>

                            {aside && aside.length > 0 &&
                                <aside className="case-study-intro__aside">
                                    {aside.map((item, idx) => (
                                        <ListBlock key={idx} {...item} />
                                    ))}
                                </aside>
                            }
                        </div>
                    </div>
                </div>
                <Link to="/" className="case-study-intro__home-link">
                    <svg className="case-study-intro__home-link-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6663 9.16732H6.52467L11.183 4.50898L9.99967 3.33398L3.33301 10.0007L9.99967 16.6673L11.1747 15.4923L6.52467 10.834H16.6663V9.16732Z" />
                    </svg>
                    <span className="case-study-intro__home-text body bold">Tin Yeah No</span>
                </Link>
            </section>
        </>
    )
}

CaseStudyIntro.defaultProps = {
    content: [],
    darkBg: false
}

export default CaseStudyIntro