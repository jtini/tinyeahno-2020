import React from "react"

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


      <h2 className="headline bold">Odds & Ends</h2>
      <p className="body">Illustrations, lettering, icons, and other visual work.</p>
    </section>
  </Layout>
)

export default IndexPage
