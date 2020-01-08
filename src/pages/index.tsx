import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="title">Tin Yeah No</h1>
    <p className="large-body">Jeremy Tinianow is a designer who believes in making things better than they need to be.</p>
    <p className="body">If you’re interested in working together, or just wanna say hi, reach out at <a href="mailto:jeremy@tinyeahno.com">jeremy@tinyeahno.com</a>.</p>
    <p className="body">© Jeremy Tinianow 2020</p>
  </Layout>
)

export default IndexPage
