import React from "react"
import { css } from "@emotion/core"
import { scale, rhythm } from "../utils/typography"

const Footer = () => {
  const fontScale = scale(-0.3)

  return (
    <footer
      css={css`
        font-size: ${fontScale.fontSize};
        line-height: ${fontScale.lineHeight};
        padding: ${rhythm(1)} 0;
        text-align: center;
      `}
    >
      © {new Date().getFullYear()} Matthew Rapati, built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> ♥
    </footer>
  )
}

export default Footer
