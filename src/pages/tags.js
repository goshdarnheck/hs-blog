import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import ArticleHeader from "../components/article-header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags" />
    <div>
      <ArticleHeader title="Tags" />
      <ul
        css={css`
          list-style-type: none;
          li {
          }
        `}
      >
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue}
            </Link>{" "}
            ({tag.totalCount})
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
