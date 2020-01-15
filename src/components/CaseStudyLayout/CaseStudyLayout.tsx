import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import SEO from "../seo"
import backArrow from '../../assets/Back-Arrow-White--20px.svg'
import "./CaseStudyLayout.scss"

const dribbbleIcon = require('../../assets/Dribbble-Icon.svg')
const instagramIcon = require('../../assets/Instagram-Icon.svg')
const behanceIcon = require('../../assets/Behance-Icon.svg')
const twitterIcon = require('../../assets/Twitter-Icon.svg')

const socials = {
    dribbble: {
        link: 'https://dribbble.com/jtini',
        icon: dribbbleIcon
    },
    instagram: {
        link: 'https://www.instagram.com/jermtee/',
        icon: instagramIcon
    },
    behance: {
        link: 'https://www.behance.net/jtinianow',
        icon: behanceIcon
    },
    twitter: {
        link: 'https://twitter.com/jtinianow',
        icon: twitterIcon
    }
}


interface TemplateProps {
    children: any,
    pageContext: {
        frontmatter: {
            title: string,
            description: string
        }
    }
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

const Template = (props: TemplateProps) => {
    const { pageContext } = props;
    const { frontmatter } = pageContext;
    const { title, description } = frontmatter

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
    )

    return (
        <MDXProvider components={components}>
            <SEO title={title} />
            <Helmet
                title={title}
                titleTemplate={`%s | ${site.siteMetadata.title}`}
                description={description}
                meta={[
                    {
                        property: 'og:title',
                        content: title
                    },
                    {
                        property: 'og:description',
                        content: description
                    },
                    {
                        property: 'og:image:width',
                        content: 1472
                    },
                    {
                        property: 'og:image:height',
                        content: 920
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary_large_image`,
                    },
                    {
                        name: `twitter:creator`,
                        content: site.siteMetadata.author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: description,
                    },
                ]}
            />
            <div className="case-study">
                {props.children}
            </div>
            <footer className="case-study-footer">
                <div className="case-study-footer__links">
                    <Link to="/" className="case-study-footer__home-link">
                        <img className="case-study-footer__home-link-icon" src={backArrow} width={20} height={20} />
                        <span>Tin Yeah No</span>
                    </Link>
                    <a href="mailto:jeremy@tinyeahno.com" className="case-study-footer__mailto-link">jeremy@tinyeahno.com</a>
                    <div className="case-study-footer__social-links">

                        {Object.keys(socials).map(key => {
                            return (
                                <a
                                    className="social-icon-link"
                                    href={socials[key].link}
                                    target="_blank"
                                    key={key}
                                >
                                    <img src={socials[key].icon} className="social-icon" />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <p className="case-study-footer__copyright-text">© Jeremy Tinianow 2020</p>
            </footer>
        </MDXProvider>
    )
}

export default Template