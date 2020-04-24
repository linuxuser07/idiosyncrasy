import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeExtra from "../components/home-extra"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image />
      <HomeExtra/>
    </div>
    <Link to="/features">Go to page 2</Link>
  </Layout>
)

export default IndexPage
