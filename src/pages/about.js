import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const About = () => (
  <Layout>
    <SEO title="About" />
    <article>
      <ArticleHeader title="About Me" />
      <p>
        Hey, I'm Matt Rapati and this is my personal blog. I'm a full-stack web
        developer who lives in Toronto, Canada. My focus is on frontend
        development, and I have a have a lot of interest in desgin, ui/ux, and
        accessibility.
      </p>
      <p>
        I have a lot of different interests including art, design, music,
        cooking, skateboarding, programming, science, and photography. Which
        means that you'll find posts here on a wide variety of topics!
      </p>
      <p>
        You can follow me on Twitter, or drop me a message at [email address].
        For business inquiries you can also find me on LinkedIn.
      </p>
      <p>
        If you're wondering why the name "Hamburger Sandwich", it's because one
        day many years ago I randomly checked if this domain was available, and
        it was. So I bought it!
      </p>
      <footer>
        <Bio />
      </footer>
    </article>
  </Layout>
)

export default About
