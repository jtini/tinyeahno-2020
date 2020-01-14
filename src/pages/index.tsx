import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./landing-page.scss"

const hwHero = require('../images/Heartwood-Hero@2x.png')
const cinebodyHero = require('../images/Cinebody-Hero@2x.png')
const geosureHero = require('../images/GeoSure-Hero@2x.png')
const spruceLabsHero = require('../images/Spruce-Labs-Hero@2x.png')

const caseStudies = {
  heartwood: {
    image: {
      src: hwHero,
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
      src: spruceLabsHero,
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
      src: cinebodyHero,
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
      src: geosureHero,
      width: 736,
      height: 460
    },
    title: 'GeoSure',
    description: 'Native apps designed to empower world travelers',
    tags: 'Digital Product Design, Illustration',
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
    <section className="case-study-grid">
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
                <p className="case-study-summary__description body">{cs.description}</p>
                <p className="case-study-summary__tags small-body mono c-text-on-light-subdued">{cs.tags}</p>
              </div>
            </Link>
          </div>
        )
      })}

    </section>
  </Layout>
)

export default IndexPage
