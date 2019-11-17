import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

import Tagged from "../components/tagged"

const PostLink = ({ postNode }) => {
  const title = postNode.frontmatter.title || postNode.fields.slug

  return (
    <article
      key={postNode.fields.slug}
      css={css`
        margin-bottom: ${rhythm(1)};
      `}
    >
      <header
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h3
          css={css`
            margin-top: 0;
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          <Link to={postNode.fields.slug}>{title}</Link>
        </h3>
        <small
          css={css`
            display: inline-block;
            flex-shrink: 0;
            text-align: right;
            width: 30%;
          `}
        >
          {postNode.frontmatter.date}
        </small>
      </header>
      {postNode.frontmatter.tags && <Tagged tags={postNode.frontmatter.tags} />}
    </article>
  )
}

export default PostLink
