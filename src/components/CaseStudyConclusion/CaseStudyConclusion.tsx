import React from 'react'
import './CaseStudyConclusion.scss'

interface CaseStudyConclusionProps {
    headline: string,
    text: string,
    quote?: string,
    attribution?: string
}

const CaseStudyConclusion = (props: CaseStudyConclusionProps) => {
    const { headline, text, quote, attribution } = props;

    return (
        <section className="case-study-conclusion wrapper">
            <div className="case-study-conclusion__inner">
                <h2 className="case-study-conclusion__headline">{headline}</h2>
                <p className="case-study-conclusion__text">{text}</p>
                {quote &&
                    <blockquote className="case-study-conclusion__quote">
                        <p className="case-study-conclusion__quote-quote">{quote}</p>
                        {attribution &&
                            <p className="case-study-conclusion__quote-attribution">{attribution}</p>
                        }
                    </blockquote>
                }
            </div>
        </section>
    )
}

export default CaseStudyConclusion;