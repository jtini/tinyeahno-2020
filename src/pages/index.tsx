import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./landing-page.scss"

const dribbbleIcon = require('../assets/Dribbble-Icon.svg')
const instagramIcon = require('../assets/Instagram-Icon.svg')
const behanceIcon = require('../assets/Behance-Icon.svg')
const twitterIcon = require('../assets/Twitter-Icon.svg')

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
      src: 'https://via.placeholder.com/800x400',
      width: 800,
      height: 400
    },
    title: 'Heartwood',
    description: 'The operating system for brick and mortar businesses',
    slug: 'heartwood'
  },
  cinebody: {
    image: {
      src: 'https://via.placeholder.com/800x400',
      width: 800,
      height: 400
    },
    title: 'Cinebody',
    description: 'Web app design for a global content creator',
    slug: 'cinebody'
  },
  geosure: {
    image: {
      src: 'https://via.placeholder.com/800x400',
      width: 800,
      height: 400
    },
    title: 'GeoSure',
    description: 'Native apps designed to empower world travelers',
    slug: 'geosure'
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="landing-page__hero">
      <h1 className="title display">Tin Yeah No</h1>
      <p className="large-body">Jeremy Tinianow is a designer who believes in making things better than they need to be.</p>
      <p className="body c-text-on-yellow-subdued">If you’re interested in working together, or just wanna say hi, reach out at <a href="mailto:jeremy@tinyeahno.com" className="c-text-on-yellow">jeremy@tinyeahno.com</a>.</p>
      <div className="social-links">
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
      <p className="body c-text-on-yellow-subdued">© Jeremy Tinianow 2020</p>
    </section>
    <section className="landing-page__content">
      <h2 className="headline bold">Case Studies</h2>

      {Object.keys(caseStudies).map(key => {
        const cs = caseStudies[key]

        return (
          <div key={key} className="case-study-summary">
            <Link to={`/${cs.slug}`} className="case-study-summary__image-link">
              <img
                src={cs.image.src}
                width={cs.image.width}
                height={cs.image.height}
                className="case-study-summary__image"
              />
            </Link>
            <h3 className="case-study-summary__title headline display">{cs.title}</h3>
            <p className="case-study-summary__description large-body c-text-on-light-subdued">{cs.description}</p>
            <Link to={`/${cs.slug}`} className="case-study-summary__link body">Read Case Study</Link>
          </div>
        )
      })}


      <h2 className="headline bold">Odds & Ends</h2>
      <p className="body">Illustrations, lettering, icons, and other visual work.</p>
    </section>
  </Layout>
)

export default IndexPage
