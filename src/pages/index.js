import React from "react"
import { Link } from "gatsby"
import { Carousel } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import movie from "../images/CieslikCraft.mp4"

const IndexPage = () => {
  const slides = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "slider/slide1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide2: file(relativePath: { eq: "slider/slide2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide3: file(relativePath: { eq: "slider/slide3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide4: file(relativePath: { eq: "slider/slide4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide5: file(relativePath: { eq: "slider/slide5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide6: file(relativePath: { eq: "slider/slide6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide7: file(relativePath: { eq: "slider/slide7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide8: file(relativePath: { eq: "slider/slide8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  
  return(
    <Layout>
      <SEO title="Home" />
      <div className="landing">
        <video className="video" autoPlay loop muted src={movie}></video>
      </div>
        <Carousel>
          <Carousel.Item>
            <Img fluid={slides.slide1.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj1" objectFit="cover" objectPosition="50% 50%" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={slides.slide2.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj2" objectFit="cover" objectPosition="50% 50%" />
          </Carousel.Item>
          <Carousel.Item>
            <a href="http://tomaszmiler.com/aktywny-weekend-marynarka-casualowa-krate-chino-lodce.html" target="http://tomaszmiler.com/aktywny-weekend-marynarka-casualowa-krate-chino-lodce.html">
              <Img fluid={slides.slide3.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj3" objectFit="cover" objectPosition="50% 50%" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={slides.slide4.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj4" objectFit="cover" objectPosition="50% 70%" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={slides.slide5.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj5" objectFit="cover" objectPosition="50% 70%" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={slides.slide6.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj6" objectFit="cover" objectPosition="50% 70%" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={slides.slide7.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj7" objectFit="cover" objectPosition="50% 50%" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={slides.slide8.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj8" objectFit="cover" objectPosition="50% 50%" />
          </Carousel.Item>
        </Carousel>
      <div className="parallax-photo first-parallax">
        <h2 className="text-in-parallax">LEGENDS AREN'T BORN.<br/>THEY'RE BUILT.</h2>
      </div>
      <div className="boats-section">
        <h2 className="boats-headline">Boats from Cieslik Craft's shipyard:</h2>
        <div className="boats-container">
          <div className="boats">
            <div className="boats-position">
              <a href="https://www.instagram.com/explore/tags/cieslikcraftdiscovolante" target="https://www.instagram.com/explore/tags/cieslikcraftdiscovolante" aria-label="instagram Disco Volante"><div className="boat-1 boats-size"></div></a>
            </div>
            <div className="boats-information">
              <h2 className="boat-name">Disco Volante</h2>
              <h3 className="boat-descrition">Classic Outboard Runabout Boat</h3>
              <h3 className="boat-descrition">Based on plans Glen-L Marine Design</h3>
            </div>
          </div>
          <div className="boats">
            <div className="boats-position">
              <a href="https://www.instagram.com/explore/tags/cieslikcraftdolcevita" target="https://www.instagram.com/explore/tags/cieslikcraftdolcevita" aria-label="instagram Dolce Vita"><div className="boat-2 boats-size"></div></a>
            </div>  
            <div className="boats-information">
              <h2 className="boat-name">Dolce Vita</h2>
              <h3 className="boat-descrition">High Speed Deluxe Classic Sport Runabout</h3>
              <h3 className="boat-descrition">Based on plans Glen-L Marine Design</h3>
            </div>          
          </div>
        </div>
      </div>
      <div className="parallax-photo second-parallax">
        <h2 className="text-in-parallax">MADE FROM DREAMS IN POLAND.<br/>RIDE LIKE A DREAM ON WATER.</h2>
      </div>
      <div className="bottom-blocks">
        <Link to="gallery" className="gallery">
          <div className="gallery-block">
            <div className="bottom-blocks-text">GALLERY</div>
            <div className="picture-overlay">From dreams to realization, one photo - thousand words</div>
          </div>
        </Link>
        <div className="youtube-block">
          <iframe title="youtube-video" className="youtube-video" src="https://www.youtube.com/embed/AMhv17vGN8E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="article-block">
          <a href="https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/" target="https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/">
            <div className="bottom-blocks-text">ARTICLE</div>
            <div className="picture-overlay">This is how it usually begins...<br/>Only in polish language
            </div>
          </a>      
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
