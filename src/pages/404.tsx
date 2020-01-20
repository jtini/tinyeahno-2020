import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './404.scss'
import pattern from './404-pattern.png'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found" style={{ backgroundImage: `url(${pattern})` }} >
      <div className="not-found__card">
        <div className="not-found__card-inner">
          <h1 className="not-found__title title display">404</h1>
          <p className="not-found__body body">That page doesn’t exist (it was probably deleted).</p>
        </div>
        <Link to="/" className="not-found__home-link">
          <svg className="not-found__home-link-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6663 9.16732H6.52467L11.183 4.50898L9.99967 3.33398L3.33301 10.0007L9.99967 16.6673L11.1747 15.4923L6.52467 10.834H16.6663V9.16732Z" />
          </svg>
          <span className="not-found__home-text body">Go back to tinyeahno.com</span>
        </Link>
      </div>
    </div>
  </Layout >
)

export default NotFoundPage
