import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"
import { scale, rhythm } from "../utils/typography"
import BackArrowSVG from "../../content/assets/back-arrow.svg"

const Nav = () => {
  const fontScale = scale(-0.2)

  return (
    <nav
      css={css`
        font-weight: 600;
        font-size: ${fontScale.fontSize};
        margin-left: auto;
        margin-right: auto;
        max-width: ${rhythm(24)};
        letter-spacing: ${rhythm(0.05)};
        line-height: ${fontScale.lineHeight};
        padding: 0 ${rhythm(3 / 4)};
      `}
    >
      <Link
        css={css`
          color: var(--background);

          :hover {
            color: var(--tertiary);
          }

          ${TABLET_MEDIA_QUERY} {
            margin-left: ${rhythm(0.9)};
          }
        `}
        title="Home"
        to={`/`}
      >
        <BackArrowSVG
          css={css`
            height: ${rhythm(0.5)};
            vertical-align: baseline;
            margin-right: ${rhythm(1 / 3)};
            width: ${rhythm(0.5)};
          `}
        />
        Home
      </Link>
    </nav>
  )
}

export default Nav
