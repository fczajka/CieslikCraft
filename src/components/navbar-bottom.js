import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NavbarBottom = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      youtube: file(relativePath: { eq: "youtube.png" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mail: file(relativePath: { eq: "mail.png" }) {
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
        <Link to="https://www.facebook.com/cieslikcraft/" target="_blank"><li className="navbar-links"><Img fixed={data.facebook.childImageSharp.fixed} alt="CieslikCraft - Facebook" /></li></Link>
        <Link to="https://www.youtube.com/user/MaestroWojciech/featured" target="_blank"><li className="navbar-links"><Img fixed={data.youtube.childImageSharp.fixed} alt="CieslikCraft - Youtube" /></li></Link>
        <Link to="https://www.instagram.com/cieslikcraft/" target="_blank"><li className="navbar-links"><Img fixed={data.instagram.childImageSharp.fixed} alt="CieslikCraft - Instagram" /></li></Link>
        <Link to="mailto:cieslikcraft.pl"><li className="navbar-links"><Img fixed={data.mail.childImageSharp.fixed} alt="CieslikCraft - Mail" /></li></Link>
      </ul>
  </nav>
)
}

export default NavbarBottom
