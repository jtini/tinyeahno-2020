import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./landing-page.scss"

const dribbbleIcon = require('../assets/Dribbble-Icon.svg')
const instagramIcon = require('../assets/Instagram-Icon.svg')
const behanceIcon = require('../assets/Behance-Icon.svg')
const twitterIcon = require('../assets/Twitter-Icon.svg')

const hwHero = require('../images/Heartwood-Hero@2x.png')
const cinebodyHero = require('../images/Cinebody-Hero@2x.png')
const geosureHero = require('../images/GeoSure-Hero@2x.png')

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

const caseStudies = {
  heartwood: {
    image: {
      src: hwHero,
      width: 768,
      height: 384
    },
    title: 'Heartwood',
    description: 'The operating system for brick and mortar businesses',
    slug: 'heartwood'
  },
  cinebody: {
    image: {
      src: cinebodyHero,
      width: 768,
      height: 384
    },
    title: 'Cinebody',
    description: 'Web app design for a global content creator',
    slug: 'cinebody'
  },
  geosure: {
    image: {
      src: geosureHero,
      width: 768,
      height: 384
    },
    title: 'GeoSure',
    description: 'Native apps designed to empower world travelers',
    slug: 'geosure'
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
        <h1 className="landing-page__hero-main title display">Hi, I’m Jeremy. I’m a designer who believes in making things better than they need to be.</h1>
      </div>
    </section>
    <section className="landing-page__content">
      <h2 className="headline bold">Case Studies</h2>

      {Object.keys(caseStudies).map(key => {
        const cs = caseStudies[key]

        return (
          <div key={key} className="case-study-summary">
            <Link to={`/${cs.slug}`} className="case-study-summary__link">
              <img
                src={cs.image.src}
                width={cs.image.width}
                height={cs.image.height}
                className="case-study-summary__image"
              />
              <div className="case-study-summary__text">
                <h3 className="case-study-summary__title body bold">{`${cs.title} `}</h3>
                <p className="case-study-summary__description body c-text-on-light-subdued">{cs.description}</p>
              </div>
            </Link>
          </div>
        )
      })}

    </section>
  </Layout>
)

export default IndexPage
