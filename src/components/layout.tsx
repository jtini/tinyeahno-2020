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

import national2RegEot from '../../static/national-2-web-regular.eot'
import national2RegWoff from '../../static/national-2-web-regular.woff'
import national2RegWoff2 from '../../static/national-2-web-regular.woff2'
import national2MedEot from '../../static/national-2-web-medium.eot'
import national2MedWoff from '../../static/national-2-web-medium.woff'
import national2MedWoff2 from '../../static/national-2-web-medium.woff2'

import etcTrispaceNarrowRegularWoff2 from '../../static/etctrispace-regularnarrow-webfont.woff2'
import etcTrispaceNarrowRegularWoff from '../../static/etctrispace-regularnarrow-webfont.woff'

import moretWoff from "../../static/Moret.woff"
import moretWoff2 from "../../static/Moret.woff2"

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
          {`
          @font-face {
            font-family: 'Moret';
            src:  url(${moretWoff2}) format('woff2'),
                  url(${moretWoff}) format('woff');
            font-weight: 300;
            font-style: normal;
          }

          @font-face {
            font-family: 'etc_trispaceregular_narrow';
            src: url(${etcTrispaceNarrowRegularWoff2}) format('woff2'),
            url(${etcTrispaceNarrowRegularWoff}) format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'National 2';
            src:  url(${national2RegWoff2}) format('woff2'),
                  url(${national2RegWoff}) format('woff'),
                  url(${national2RegEot}) format('eot');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'National 2';
            src:  url(${national2MedWoff2}) format('woff2'),
                  url(${national2MedWoff}) format('woff'),
                  url(${national2MedEot}) format('eot');
            font-weight: 500;
            font-style: normal;
          }
          `}
        </style>
      </Helmet>
      <main className={className}>{children}</main>
    </div>
  )
}

export default Layout
