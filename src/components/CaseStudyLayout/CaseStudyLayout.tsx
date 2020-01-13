import React from 'react'
import { MDXProvider } from "@mdx-js/react"

interface TemplateProps {
    children: any
}

const Template = (props: TemplateProps) => (
    <MDXProvider>
        <div className="case-study">
            {props.children}
        </div>
    </MDXProvider>
)

export default Template