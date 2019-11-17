import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

class Archive extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title="Post Archive" />
        <article>
          <ArticleHeader title="Post Archive" />
          {posts.map(({ node }, index) => {
            return <PostLink key={index} postNode={node} />
          })}
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    )
  }
}

export default Archive

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
