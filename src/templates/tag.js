import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import PostLink from "../components/post-link"
import ArticleHeader from "../components/article-header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title={tag} />
      <ArticleHeader title={`Tag: ${tag}`} />
      {edges.map(({ node }, index) => {
        return <PostLink key={index} postNode={node} />
      })}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`
