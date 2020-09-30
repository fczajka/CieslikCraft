import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      x: file(relativePath: { eq: "x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: { eq: "youtube-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mail: file(relativePath: { eq: "mail-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  class Dismiss extends React.Component {
    close = () => {
      const dismiss = document.querySelector(".sidebar");
      const overlay = document.querySelector(".overlay");

      if(window.screen.width >= 2560) {
        dismiss.style.left = "-350px";
      }
      else {
        dismiss.style.left = "-250px";
      }

      overlay.classList.remove("active"); 

    }   

    render() {
      return (
        <div className="dismiss" onClick={this.close} role="button" tabIndex={0}>
          <Img fluid={data.x.childImageSharp.fluid} alt="Dismiss - X" />
        </div>
      );
    }
  } 
  
    return (
    <nav className="sidebar">
      <Dismiss/>
      <h1 className="menu">MENU</h1>
      <ul className="sidebar-list-links">
        <li className="sidebar-links"><Link to="/">HOME</Link></li>
        <li className="sidebar-links"><Link to="gallery">GALLERY</Link></li>
        <li className="sidebar-links"><a href="https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/" target="https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/">NEWS</a></li>
      </ul>
      <ul className="sidebar-list-icons">
        <li className="sidebar-icon"><a href="https://www.instagram.com/cieslikcraft/" target="https://www.instagram.com/cieslikcraft/"><Img fluid={data.instagram.childImageSharp.fluid} alt="CieslikCraft - Instagram" /></a></li>
        <li className="sidebar-icon"><a href="https://www.facebook.com/cieslikcraft/" target="https://www.facebook.com/cieslikcraft/"><Img fluid={data.facebook.childImageSharp.fluid} alt="CieslikCraft - Facebook" /></a></li>
        <li className="sidebar-icon"><a href="https://www.youtube.com/user/MaestroWojciech/featured" target="https://www.youtube.com/user/MaestroWojciech/featured"><Img fluid={data.youtube.childImageSharp.fluid} alt="CieslikCraft - Youtube" /></a></li>
        <li className="sidebar-icon"><a href="mailto:"><Img fluid={data.mail.childImageSharp.fluid} alt="CieslikCraft - Mail" /></a></li>
      </ul>
    </nav>
  )
}

export default Sidebar
