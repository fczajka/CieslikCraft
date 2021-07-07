import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NavbarBottom = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.webp" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      youtube: file(relativePath: { eq: "youtube.webp" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.webp" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mail: file(relativePath: { eq: "mail.webp" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
  <nav className="navbar-bottom">
      <ul className="navbar-list">
        <li className="navbar-links"><a href="https://www.facebook.com/cieslikcraft/" target="https://www.facebook.com/cieslikcraft/"><Img fixed={data.facebook.childImageSharp.fixed} alt="CieslikCraft - Facebook" /></a></li>
        <li className="navbar-links"><a href="https://www.youtube.com/user/MaestroWojciech/featured" target="https://www.youtube.com/user/MaestroWojciech/featured"><Img fixed={data.youtube.childImageSharp.fixed} alt="CieslikCraft - Youtube" /></a></li>
        <li className="navbar-links"><a href="https://www.instagram.com/cieslikcraft/" target="https://www.instagram.com/cieslikcraft/"><Img fixed={data.instagram.childImageSharp.fixed} alt="CieslikCraft - Instagram" /></a></li>
        <li className="navbar-links"><a href="mailto:cieslikcraft@gmail.com"><Img fixed={data.mail.childImageSharp.fixed} alt="CieslikCraft - Mail" /></a></li>
      </ul>
  </nav>
)
}

export default NavbarBottom
