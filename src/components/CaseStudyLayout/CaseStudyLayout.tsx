import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import "./CaseStudyLayout.scss"

interface TemplateProps {
    children: any
}

const P = props => {
    if (typeof props.children.length === 'undefined') {
        return props.children
    }
    return (
        <div className="wrapper text-wrapper"><p className="case-study__text case-study__body-copy" {...props} /></div>
    )
}

const H2 = props => {
    return (
        <div className="wrapper heading-wrapper"><h2 className="case-study__text case-study__body-heading bold" {...props} /></div>
    )
}

const OL = props => {
    return (
        <div className="wrapper list-wrapper"><ol className="case-study__text case-study__body-list case-study__body-ol" {...props} /></div>
    )
}


const UL = props => {
    return (
        <div className="wrapper list-wrapper"><ul className="case-study__text case-study__body-list case-study__body-ul" {...props} /></div>
    )
}

const LI = props => {
    return (
        <li className="case-study__list-item" {...props} />
    )
}

const Strong = props => <strong className="bold" {...props} />

const Anchor = props => <a className="case-study-text-link" target="_blank" rel="noopener noreferrer" {...props} />

const components = {
    h2: H2,
    p: P,
    ol: OL,
    ul: UL,
    li: LI,
    strong: Strong,
    a: Anchor
}

const Template = (props: TemplateProps) => (
    <MDXProvider components={components}>
        <div className="case-study">
            {props.children}
        </div>
    </MDXProvider>
)

export default Template