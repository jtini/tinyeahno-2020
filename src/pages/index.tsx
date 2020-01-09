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

const shots = {
  make: {
    image: {
      src: 'https://cdn.dribbble.com/users/2873040/screenshots/7006569/media/88e7e2f21b6434bc47595c5518d01732.png',
      width: 400,
      height: 300
    },
    href: 'https://dribbble.com/shots/7006569-Make'
  },
  tenOuttaTen: {
    image: {
      src: 'https://cdn.dribbble.com/users/2873040/screenshots/7998035/media/48e6182ecb25d09e45ff0b2a2b3b0115.png',
      width: 400,
      height: 300
    },
    href: 'https://dribbble.com/shots/7998035-Ten-Outta-Ten-Sketch'
  },
  stayFresh: {
    image: {
      src: 'https://cdn.dribbble.com/users/2873040/screenshots/7887013/media/a53afd7807363bbd15c5a79b45301180.png',
      width: 400,
      height: 300
    },
    href: 'https://dribbble.com/shots/7887013-Stay-Fresh'
  },
  scalableShadow: {
    image: {
      src: 'https://cdn.dribbble.com/users/2873040/screenshots/8195274/media/a017a5276d2ed46e1235a0e1a8317ec4.png',
      width: 400,
      height: 300
    },
    href: 'https://dribbble.com/shots/8195274-Scalable-Shadow'
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

      <div className="shots">
        <h2 className="shots__title headline bold">Odds & Ends</h2>
        <p className="shots__description large-body c-text-on-light-subdued">Illustrations, lettering, icons, and other visual work.</p>

        <div className="shots__grid">

          {Object.keys(shots).map(key => {
            const shot = shots[key];

            return (
              <a
                key={key}
                href={shot.href}
                target="_blank"
                className="shot__image-link"
              >
                <img
                  src={shot.image.src}
                  width={shot.image.width}
                  height={shot.image.height}
                  className="shot__image"
                />
              </a>
            )
          })}

        </div>
        <a href="https://dribbble.com/jtini" target="_blank" className="shots__link body">More on Dribbble</a>

      </div>
    </section>
  </Layout>
)

export default IndexPage
