import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseStudyLink from '../components/CaseStudyLink/CaseStudyLink'
import "./landing-page.scss"

const hwThumb = require('../images/Heartwood-Thumb@2x.png')
const cinebodyThumb = require('../images/Cinebody-Thumb@2x.png')
const geosureThumb = require('../images/GeoSure-Thumb@2x.png')
const spruceLabsThumb = require('../images/Spruce-Labs-Thumb@2x.png')

const dribbbleIcon = require('../assets/Dribbble-Icon.svg')
const instagramIcon = require('../assets/Instagram-Icon.svg')
const behanceIcon = require('../assets/Behance-Icon.svg')
const twitterIcon = require('../assets/Twitter-Icon.svg')

const caseStudies = {
  heartwood: {
    image: {
      src: hwThumb,
      width: 736,
      height: 460
    },
    title: 'Heartwood',
    description: 'The operating system for brick and mortar businesses',
    tags: 'Design Strategy, Digital Product Design, Visual Design',
    slug: 'heartwood'
  },
  spruceLabs: {
    image: {
      src: spruceLabsThumb,
      width: 736,
      height: 460
    },
    title: 'Spruce Labs',
    description: 'Visual identity for the future of brick and mortar',
    tags: 'Visual Design, Design Strategy',
    slug: 'spruce-labs'
  },
  cinebody: {
    image: {
      src: cinebodyThumb,
      width: 736,
      height: 460
    },
    title: 'Cinebody',
    description: 'Web app design for a global content creator',
    tags: 'Digital Product Design, Frontend Development',
    slug: 'cinebody'
  },
  geosure: {
    image: {
      src: geosureThumb,
      width: 736,
      height: 460
    },
    title: 'GeoSure',
    description: 'Native apps designed to empower world travelers',
    tags: 'Digital Product Design, Illustration',
    slug: 'geosure'
  }
}

const socials = {
  dribbble: {
    link: 'https://dribbble.com/tinyeahno',
    icon: dribbbleIcon
  },
  instagram: {
    link: 'https://www.instagram.com/tinyeahno',
    icon: instagramIcon
  },
  behance: {
    link: 'https://www.behance.net/tinyeahno',
    icon: behanceIcon
  },
  twitter: {
    link: 'https://twitter.com/tinyeahno',
    icon: twitterIcon
  }
}

const IndexPage = () => (
  <Layout className="landing-page">
    <SEO title="Tin Yeah No" />
    <section className="landing-page__hero">
      <div className="landing-page__hero-inner">
        <div className="landing-page__hero-info">
          <p className="body bold">Tin Yeah No</p>
          <a className="landing-page__hero-mailto body" href="mailto:jeremy@tinyeahno.com">jeremy@tinyeahno.com</a>
        </div>
        <h1 className="landing-page__hero-main title display foit">Hi, I’m Jeremy. I’m a designer who believes in making things better than they need to be.</h1>
      </div>
    </section>
    <section className="case-study-grid">
      {Object.keys(caseStudies).map(key => {
        const cs = caseStudies[key]

        return (
          <CaseStudyLink
            key={key}
            slug={cs.slug}
            image={cs.image}
            title={cs.title}
            description={cs.description}
            tags={cs.tags}
          />
        )
      })}

    </section>

    <section className="landing-page-about">
      <div className="landing-page-about__inner">
        <p className="landing-page-about__copyright small-body">© Jeremy Tinianow 2021 · <Link to="/colophon" id="colophon-link">Colophon</Link></p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
