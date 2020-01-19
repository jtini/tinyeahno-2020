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
        <h2 className="landing-page-about__title subtitle display">Who is Jeremy?</h2>
        <p className="landing-page-about__subtitle subheadline"> I design digital products, visual identities, and the systems that power them.</p>
        <p className="landing-page-about__body body">I’ve had the pleasure of designing and building digital things for some great organizations including <span className="highlight">American Airlines</span>, <span className="highlight">Gatorade</span>, <span className="highlight">AAA</span>, <span className="highlight">Charles Schwab</span>, <span className="highlight">Braintree</span>, and <span className="highlight">Fruit of the Loom</span>.</p>
        <p className="landing-page-about__body body">I’m also a <span className="highlight">Web Chair with AIGA Colorado</span> and I co-host meetups with <span className="highlight">Figma Denver</span>.</p>
        <div className="landing-page-about__services">
          <div className="landing-page-about__services-list-wrapper">
            <h3 className="large-body bold">Things I Make</h3>
            <ul className="landing-page-about__services-list">
              <li className="landing-page-about__services-list-item">Design Systems</li>
              <li className="landing-page-about__services-list-item">Websites</li>
              <li className="landing-page-about__services-list-item">Digital Products</li>
              <li className="landing-page-about__services-list-item">Prototypes</li>
              <li className="landing-page-about__services-list-item">Visual Identities</li>
            </ul>
          </div>

          <div className="landing-page-about__services-list-wrapper">
            <h3 className="large-body bold">Services I Offer</h3>
            <ul className="landing-page-about__services-list">
              <li className="landing-page-about__services-list-item">Design Strategy</li>
              <li className="landing-page-about__services-list-item">Visual Design</li>
              <li className="landing-page-about__services-list-item">Digital Product Design</li>
              <li className="landing-page-about__services-list-item">Content Strategy</li>
              <li className="landing-page-about__services-list-item">Research and Discovery</li>
            </ul>
          </div>

          <div className="landing-page-about__services-list-wrapper">
            <h3 className="large-body bold">Tools I Use</h3>
            <ul className="landing-page-about__services-list">
              <li className="landing-page-about__services-list-item">Pen and Paper</li>
              <li className="landing-page-about__services-list-item">Figma</li>
              <li className="landing-page-about__services-list-item">Photoshop</li>
              <li className="landing-page-about__services-list-item">Illustrator</li>
              <li className="landing-page-about__services-list-item">HTML and CSS</li>
            </ul>
          </div>

        </div>
        <div className="landing-page-about__contact">
          <p className="landing-page-about__contact-title small-body mono bold">Get in touch</p>
          <p className="landing-page-about__contact-body body">If you’re interested in working together, feel free to reach out at <a href="mailto:jeremy@tinyeahno.com" className="highlight">jeremy@tinyeahno.com</a>.</p>
        </div>
        <div className="landing-page-about__social">
          <p className="landing-page-about__social-title small-body mono bold">Get social</p>
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
        <p className="landing-page-about__copyright small-body">© Jeremy Tinianow 2020</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
