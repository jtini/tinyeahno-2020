import React from 'react'
import CaseStudyLink, { CaseStudyLinkProps } from '../CaseStudyLink/CaseStudyLink'
import './NextCaseStudy.scss'

const NextCaseStudy = (props: CaseStudyLinkProps) => {
    return (
        <div className="next-case-study">
            <div className="next-case-study__inner">
                <h4 className="next-case-study__headline small-body mono">Next Case Study</h4>
                <CaseStudyLink {...props} />
            </div>
        </div>
    )
}

export default NextCaseStudy