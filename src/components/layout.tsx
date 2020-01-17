/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import "../styles/import-once.scss"
import etcTrispaceNarrowRegularWoff2 from '../../static/etctrispace-regularnarrow-webfont.woff2'
import etcTrispaceNarrowRegularWoff from '../../static/etctrispace-regularnarrow-webfont.woff'

const Layout = ({ children, className }: { children: any, className?: string }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <style>
          {`@font-face {
          font-family: 'etc_trispaceregular_narrow';
          src: url(${etcTrispaceNarrowRegularWoff2}) format('woff2'),
          url(${etcTrispaceNarrowRegularWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
        }`}
        </style>
      </Helmet>
      <main className={className}>{children}</main>
    </div>
  )
}

export default Layout
