import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Tagged from "../components/tagged"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <ArticleHeader
            title={post.frontmatter.title}
            subtitle={post.frontmatter.date}
          />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.tags && <Tagged tags={post.frontmatter.tags} />}
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        description
        tags
      }
    }
  }
`
