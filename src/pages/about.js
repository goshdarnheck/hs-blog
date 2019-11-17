import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          email
          social {
            twitter
          }
        }
      }
    }
  `)

  const email = data.site.siteMetadata.email
  const { social } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="About" />
      <article>
        <ArticleHeader title="About Me" />
        <p>
          Hey, I'm Matt Rapati and this is my personal blog. I'm a full-stack
          web developer who lives in Toronto, Canada. My focus is on frontend
          development, and I have a have a lot of interest in design, ui/ux, and
          accessibility.
        </p>
        <p>
          Besides programming and web developer I'm also interested in art,
          music, cooking, skateboarding, snowboarding, video games, science, and
          photography. Which means that you'll find posts here on a wide variety
          of topics!
        </p>
        <p>
          You can follow me on{" "}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>, or drop
          me a message at <a href={`mailto:${email}`}>{email}</a>. For business
          inquiries you can also find me on LinkedIn.
        </p>
        <p>
          If you're wondering why the name "Hamburger Sandwich", it's because
          one day many years ago I randomly checked if this domain was
          available, and it was. So I bought it and now it's my blog domain!
        </p>
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default About
