import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout bigHeader={true} location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <p>Here's some stuff that I have done that I'd like to share 😀</p>
        <ul>
          <li>
            <a href="http://alpha.starmemory.com">Star Memory</a>
            <p>Star Memory is a web app designed to help anyone track whatever they want!
              It's aimed at personal use in the interest of finding patterns in your life.
              Helps keep you accountable, give a sense of satisfaction,
              and keep a historical account of progress.
              But you could use it to track anything you'd like!
              Built with Reactjs and Firebase.</p>
          </li>
          <li>
            <a href="http://www.ghosthugs.com">ghosthugs</a>
            <p>Ghosthugs is the name of my game jam team. We try to make cute little games at jams for fun and the experience! You can download some of the games here</p>
          </li>
          <li>
            <a href="http://twitter.com/anywizard">Any Wizard</a>
            <p>A twitter bot that tweets our random wizard images and descrption once a day. Built with Python 3.</p>
          </li>
          <li>
            <a href="http://life.eyehack.com">Game of Life</a>
            <p>A twitter bot that tweets our random wizard images and descrption once a day. Built with Python 3.</p>
          </li>
          <li>
            <a href="/logos">Logo Design</a>
            <p>I'm a big fan of logos, and like to create my own for fun!</p>
          </li>
          <li>
            <a href="/comics">Comics &amp; Doodles</a>
            <p>Check out my doodles and comics.</p>
          </li>
          <li>
            <a href="/paintings">Paintings</a>
            <p>Sometimes I paint things.</p>
          </li>
          <li>
            <a href="/photography">Photography</a>
            <p>I like taking photos wherever I go. This is a sample of some of my favourites. More photography at 500px.</p>
          </li>
          <li>
            <a href="https://itch.io/jam/tojam13/rate/254575">Potion Crushers</a>
            <p>A game jam game built over a weekend while applying some new Unity knowledge.</p>
          </li>
          <li>
            <a href="soundcloud">Music</a>
            <p>Experiments in chill/ambient music with some guitar.</p>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
