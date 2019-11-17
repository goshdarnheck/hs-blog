import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const Paintings = () => (
  <Layout>
    <SEO title="Paintings" />
    <article>
      <ArticleHeader title="Paintings" />
      <p>
        Soon I will post some paintings that I have made!
      </p>
      <footer>
        <Bio />
      </footer>
    </article>
  </Layout>
)

export default Paintings
