import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Sidebar from "../components/sidebar"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "cieslikcraft-logo.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: { eq: "youtube.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mail: file(relativePath: { eq: "mail.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
    class SidebarButton extends React.Component {
    open = () => {
      const sidebar = document.querySelector(".sidebar");
      const overlay = document.querySelector(".overlay");
      
      sidebar.style.left = "0px";
      overlay.classList.add("active");  

    }

    render() {
      return (
        <div className="hamburger" role="button" aria-label="opensMenu" onClick={this.open} tabIndex={0}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
       </div>
      );
    }
  }
  
  function btnOpen() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    document.addEventListener('keydown', function(event){
      const key = event.key;
      console.log(key);
      if(key === "m") {
        sidebar.style.left = "0px";
        overlay.classList.add("active");  
      }        
    });
  }

  function closeOverlay() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");


    if(window.screen.width >= 2560) {
      sidebar.style.left = "-350px";
    }
    else {
      sidebar.style.left = "-250px";
    }
    setTimeout(() => { overlay.classList.remove("active"); }, 400);

  }

  return (
    <>
    <Sidebar />  
    <header className="header">   
      <div className="sidebar-button" onKeyDown={btnOpen}>
        <SidebarButton />
      </div>
      <div className="name">
        <div className="name-picture">
          <Link to="/"><Img fluid={data.logo.childImageSharp.fluid} alt="CieslikCraft - Logo" /></Link>
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-links"><a href="https://www.instagram.com/cieslikcraft/" target="https://www.instagram.com/cieslikcraft/"><Img fluid={data.instagram.childImageSharp.fluid} alt="CieslikCraft - Instagram" /></a></li>
          <li className="nav-links"><a href="https://www.facebook.com/cieslikcraft/" target="https://www.facebook.com/cieslikcraft/"><Img fluid={data.facebook.childImageSharp.fluid} alt="CieslikCraft - Facebook" /></a></li>
          <li className="nav-links"><a href="https://www.youtube.com/user/MaestroWojciech/featured" target="https://www.youtube.com/user/MaestroWojciech/featured"><Img fluid={data.youtube.childImageSharp.fluid} alt="CieslikCraft - Youtube" /></a></li>
          <li className="nav-links"><a href="mailto:"><Img fluid={data.mail.childImageSharp.fluid} alt="CieslikCraft - Mail" /></a></li>
        </ul>
      </nav>
    </header>
    <div className="overlay" onClick={closeOverlay}></div>
    </>
  )
}

export default Header
