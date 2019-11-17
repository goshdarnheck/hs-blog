import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { scale, rhythm } from "../utils/typography"

const tagScale = scale(-0.2)
const Tagged = ({ tags }) => (
  <div
    css={css`
      font-size: ${tagScale.fontSize};
      line-height: ${tagScale.lineHeight};
      margin: 0 0 ${rhythm(1)} 0;
    `}
  >
    <span>Tagged as:</span>
    {tags.map((tag, index) => {
      return (
        <React.Fragment key={index}>
          {" "}
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          {index < tags.length - 1 ? ", " : ""}
        </React.Fragment>
      )
    })}
  </div>
)

export default Tagged
