import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const Comics = () => (
  <Layout>
    <SEO title="Comics" />
    <article>
      <ArticleHeader title="Comics" />
      <p>
        Soon I will post some comics that I have made!
      </p>
      <footer>
        <Bio />
      </footer>
    </article>
  </Layout>
)

export default Comics
