import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { width } from "dom-helpers"

const Sidebar = () => {
  function toggleLinks() {
    const sidebarToResize = document.querySelector(".sidebar-list-links")

    if (window.screen.width >= 2560) {
      if (sidebarToResize.clientHeight < 194) {
        sidebarToResize.style.height = "480px"
      } else {
        sidebarToResize.style.height = "194px"
      }
      console.log(sidebarToResize.clientHeight)
    } else {
      if (sidebarToResize.clientHeight < 165) {
        sidebarToResize.style.height = "390px"
      } else {
        sidebarToResize.style.height = "165px"
      }
    }
  }

  const data = useStaticQuery(graphql`
    query {
      x: file(relativePath: { eq: "x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook-icon.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: { eq: "youtube-icon.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram-icon.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mail: file(relativePath: { eq: "mail-icon.webp" }) {
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
      const dismiss = document.querySelector(".sidebar")
      const overlay = document.querySelector(".overlay")

      if (window.screen.width >= 2560) {
        dismiss.style.left = "-350px"
      } else {
        dismiss.style.left = "-250px"
      }

      setTimeout(() => {
        overlay.classList.remove("active")
      }, 400)
    }

    render() {
      return (
        <div
          className="dismiss"
          onClick={this.close}
          role="button"
          tabIndex={0}
        >
          <Img fluid={data.x.childImageSharp.fluid} alt="Dismiss - X" />
        </div>
      )
    }
  }

  return (
    <nav className="sidebar">
      <Dismiss />
      <h1 className="menu">MENU</h1>
      <ul className="sidebar-list-links">
        <li className="sidebar-links">
          <Link to="/">
            <p className="link">HOME</p>
          </Link>
        </li>
        <li className="sidebar-links">
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li className="sidebar-links" onClick={toggleLinks}>
          MEDIA<i className="fas fa-angle-down"></i>
        </li>
        <li className="media-links">
          <a
            href="https://btj.com.pl/2021/06/21/samodzielna-budowa-drewnianej-motorowki-czesc-i-poradnik-konstruowania-kadluba-na-przykladzie-nowej-lodzi-dolce-vita-z-domowej-stoczni-cieslik-craft/?fbclid=IwAR35I-nN-4V1Ffo2n0MtWgs-w5BSCWguvuOI-m_q2j17B0lYjQovBZPB8s4"
            target="_blank"
          >
            Biuletyn Techniki Jachtowej
          </a>
        </li>
        <li className="media-links">
          <a href="https://www.youtube.com/watch?v=qj1gQIuYPa4" target="_blank">
            WatchThisCar
          </a>
        </li>
        <li className="media-links">
          <a
            href="https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/"
            target="_blank"
          >
            Dłuta.pl
          </a>
        </li>
        <li className="media-links">
          <a
            href="https://tomaszmiler.com/aktywny-weekend-marynarka-casualowa-krate-chino-lodce.html?fbclid=IwAR13s7_VgpfIpbIP5i9laZGy1X0dVGi_DLrDqJVDepWbvOuBZKSp-S_JRpg"
            target="_blank"
          >
            Miler Menswear
          </a>
        </li>
        <li className="media-links">
          <a
            href="https://www.motorowy.com/artykul/21-12-2018/disco-volante-cieslik-craft?fbclid=IwAR1SLLIGAkAXK-2OV_o-qG8Z519A6UTPNdR9dg390Sr1H3PCVIPpCMFxT60"
            target="_blank"
          >
            Jachting Motorowy
          </a>
        </li>
        <li className="media-links">
          <a
            href="http://www.sea-line.eu/pl/disco-volante/?fbclid=IwAR2weFH-8gXCd5Ik8kkD3RbxHqMujbeta-BI8s_BnieuAQiL8FaHil5s3wE"
            target="_blank"
          >
            Sea-line
          </a>
        </li>
        <li className="media-links">
          <a
            href="http://www.jachtowe.com.pl/disco-volante.html?fbclid=IwAR1SLLIGAkAXK-2OV_o-qG8Z519A6UTPNdR9dg390Sr1H3PCVIPpCMFxT60"
            target="_blank"
          >
            Jachtowe.com.pl
          </a>
        </li>
      </ul>
      <ul className="sidebar-list-icons">
        <li className="sidebar-icon">
          <a
            href="https://www.instagram.com/cieslikcraft/"
            target="https://www.instagram.com/cieslikcraft/"
          >
            <Img
              fluid={data.instagram.childImageSharp.fluid}
              alt="CieslikCraft - Instagram"
            />
          </a>
        </li>
        <li className="sidebar-icon">
          <a
            href="https://www.facebook.com/cieslikcraft/"
            target="https://www.facebook.com/cieslikcraft/"
          >
            <Img
              fluid={data.facebook.childImageSharp.fluid}
              alt="CieslikCraft - Facebook"
            />
          </a>
        </li>
        <li className="sidebar-icon">
          <a
            href="https://www.youtube.com/user/MaestroWojciech/featured"
            target="https://www.youtube.com/user/MaestroWojciech/featured"
          >
            <Img
              fluid={data.youtube.childImageSharp.fluid}
              alt="CieslikCraft - Youtube"
            />
          </a>
        </li>
        <li className="sidebar-icon">
          <a href="mailto:">
            <Img
              fluid={data.mail.childImageSharp.fluid}
              alt="CieslikCraft - Mail"
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
