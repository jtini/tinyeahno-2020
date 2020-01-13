import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import backArrow from '../../assets/Back-Arrow--20px.svg'

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
    image?: HeroImage,
    content?: ContentPiece[]
}

const blocks = {
    text: TextBlock,
    quote: QuoteBlock
}

const CaseStudyIntro = (props: CaseStudyIntroProps) => {
    const { title, subtitle, image, content } = props;
    return (
        <>
            <section className="case-study-intro">
                <img
                    className="case-study-intro__hero-image"
                    src={image.src}
                    alt={image.alt}
                    width={1400}
                />
                <div className="case-study-intro__inner wrapper">
                    <div className="case-study-intro__container">
                        <h1 className="case-study-intro__title title display">{title}</h1>
                        <p className="case-study-intro__subtitle">{subtitle}</p>
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
                </div>
                <Link to="/" className="case-study-intro__home-link">
                    <img src={backArrow} width={20} height={20} className="case-study-intro__home-link-icon" />
                    <span className="case-study-intro__home-text">Tin Yeah No</span>
                </Link>
            </section>
        </>
    )
}

CaseStudyIntro.defaultProps = {
    content: []
}

export default CaseStudyIntro