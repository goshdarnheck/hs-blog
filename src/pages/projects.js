import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleHeader from "../components/article-header"
import Bio from "../components/bio"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <article>
      <ArticleHeader title="Projects &amp; Stuff" />
      <p>
        Here's some stuff that I have done that I'd like to share{" "}
        <span role="img" aria-label="jack-o-lantern emoji">
          🎃
        </span>
      </p>
      <ul
        css={css`
          margin-left: 0;
          list-style-type: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: ${rhythm(1)};

          li {
            margin-bottom: ${rhythm(1)};
          }

          ${TABLET_MEDIA_QUERY} {
            display: block;
          }
        `}
      >
        <li>
          <h2>
            <a href="http://alpha.starmemory.ca">Star Memory</a>
          </h2>
          <p>
            Star Memory is a web app designed to help anyone track whatever they
            want! It's aimed at personal use in the interest of finding patterns
            in your life. Helps keep you accountable, give a sense of
            satisfaction, and keep a historical account of progress. But you
            could use it to track anything you'd like! Built with Reactjs and
            Firebase.
          </p>
        </li>
        <li>
          <h2>
            <a href="http://www.ghosthugs.com">Ghosthugs</a>
          </h2>
          <p>
            Ghosthugs is the name of my game jam team. We try to make cute
            little games at weekend game jams for fun and the experience! You can{" "}
            <a href="https://ghosthugs.itch.io/">
              download some of the jam games
            </a>{" "}
            on itch.io.
          </p>
        </li>
        <li>
          <h2>
            <a href="http://twitter.com/anywizard">Any Wizard</a>
          </h2>
          <p>
            A twitter bot that tweets our random wizard images and descrption
            once a day. Built with Python 3. It's generated almost 4000 wizards so far!
          </p>
        </li>
        <li>
          <h2>
            <a href="http://life.eyehack.com">Conway's Game of Life in React</a>
          </h2>
          <p>
            Conway's Game of Life built with React. This was made as a test to
            see how React could handle the amount of DOM updates needed for this
            game. It's old, but it's still a work in progress.
          </p>
        </li>
        <li>
          <h2>
            <Link to={`/logos`}>Logo Design</Link>
          </h2>
          <p>I have a bit of a logo obsession. I love analyzing and critiquing them. So I like to try making my own sometimes too!</p>
        </li>
        <li>
          <h2>
            <Link to={`/comics`}>Comics &amp; Doodles</Link>
          </h2>
          <p>Check out my doodles and comics.</p>
        </li>
        <li>
          <h2>
            <Link to={`/paintings`}>Paintings</Link>
          </h2>
          <p>Sometimes I paint things.</p>
        </li>
        <li>
          <h2>
            <a href="/photography">Photography</a>
          </h2>
          <p>
            I like taking photos wherever I go. This is a sample of some of my
            favourites.
          </p>
        </li>
        <li>
          <h2>
            <a href="https://itch.io/jam/tojam13/rate/254575">
              Potion Crushers
            </a>
          </h2>
          <p>
            A game jam game built over a weekend while applying some new Unity
            knowledge. This is my first Unity game, and really my first "3D" game as well.
          </p>
        </li>
      </ul>
      <footer>
        <Bio />
      </footer>
    </article>
  </Layout>
)

export default Projects
