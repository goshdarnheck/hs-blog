import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const Logos = () => (
  <Layout>
    <SEO title="Logo Design" />
    <article>
      <ArticleHeader title="Logo Design" />
      <p>
        Soon I will post some logos that I have made!
      </p>
      <footer>
        <Bio />
      </footer>
    </article>
  </Layout>
)

export default Logos
