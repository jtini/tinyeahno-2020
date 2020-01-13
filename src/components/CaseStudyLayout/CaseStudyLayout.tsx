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
        <div className="wrapper"><p className="case-study__text case-study__body-copy" {...props} /></div>
    )
}

const H2 = props => {
    return (
        <div className="wrapper"><h2 className="case-study__text case-study__body-heading bold" {...props} /></div>
    )
}

const OL = props => {
    return (
        <div className="wrapper"><ol className="case-study__text case-study__body-list" {...props} /></div>
    )
}

const components = {
    h2: H2,
    p: P,
    ol: OL
}

const Template = (props: TemplateProps) => (
    <MDXProvider components={components}>
        <div className="case-study">
            {props.children}
        </div>
    </MDXProvider>
)

export default Template