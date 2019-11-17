import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <article>
      <ArticleHeader title="Photography" />
      <p>
        Soon I will post some photos that I have taken! Or check out my <a href="https://500px.com/goshdarnheck">500px</a>.
      </p>
      <footer>
        <Bio />
      </footer>
    </article>
  </Layout>
)

export default Photography
