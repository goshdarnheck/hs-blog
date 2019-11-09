import React from "react"
import styled from "@emotion/styled"
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"
import { rhythm, scale } from "../utils/typography"

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
  padding-bottom: ${rhythm(0.3)};
  padding-left: ${rhythm(1.5)};
  position: relative;

  &:before {
    background-color: var(--secondary);
    border-top: 0.8em solid #fc3;
    border-bottom: 0.8em solid var(--primary);
    content: "";
    display: block;
    height: 2.4em;
    left: calc(-60vw + ${rhythm(1)});
    position: absolute;
    bottom: ${(rhythm(0.5))};
    width: 60vw;
  }

  ${TABLET_MEDIA_QUERY} {
    display: block;

    &:before {
      top: ${rhythm(0.1)};
      bottom: auto;
    }
  }
`

const h1Scale = scale(1.2);
const StyledTitle = styled.h1`
  color: var(--primary);
  flex-grow: 1;
  font-size: ${h1Scale.fontSize};
  letter-spacing: 0.1em;
  line-height: ${h1Scale.lineHeight};
  margin-bottom: 0;
  margin-top: 0;

  ${TABLET_MEDIA_QUERY} {
    margin-bottom: ${rhythm(0.2)};
  }
`

const dateScale = scale(-0.2)
const StyledSubtitle = styled.p`
  align-self: flex-end;
  display: block;
  font-size: ${dateScale.fontSize};
  line-height: ${dateScale.lineHeight};
  margin-bottom: 0;
  padding-left: ${rhythm(1)};
  padding-bottom: ${rhythm(0.15)};
  white-space: nowrap;

  ${TABLET_MEDIA_QUERY} {
    padding-left: 0;
  }
`

const PageHeader = ({ title, subtitle }) => {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </StyledHeader>
  )
}

export default PageHeader
