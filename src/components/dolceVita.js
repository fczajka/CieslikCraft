import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const DolceVita = () => {
  const dolceVita = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 1 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo2: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 2 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo3: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 3 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo4: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 4 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo5: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 5 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo6: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 6 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo7: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 7 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo8: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 8 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo9: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 9 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo10: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 10 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo11: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 11 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo12: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 12 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo13: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 13 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo14: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 14 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo15: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 15 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo16: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 16 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo17: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 17 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo18: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 18 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo19: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 19 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo20: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 20 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo21: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 21 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo22: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 22 - woodenboat made in Poland.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo23: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 23 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo24: file(relativePath: { eq: "dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 24 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return(
      <>
      <h1 className="boat-name-gallery">Dolce Vita</h1>
      <div className="images">
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo5.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj5" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo6.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj6" objectFit="cover" objectPosition="50% 35%" />
              </div>
            </div>
          </div>
         <div className="flip-box-3">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo4.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj4" objectFit="cover" objectPosition="50% 10%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo11.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj11" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo1.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj1" objectFit="cover" objectPosition="50% 95%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo2.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj1" objectFit="cover" objectPosition="50% 35%" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo19.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj19" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo22.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj22" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo20.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj20" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo21.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj21" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo23.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj23" objectFit="cover" objectPosition="50% 30%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo24.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj24" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo13.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj13" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo12.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj12" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo3.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj3" objectFit="cover" objectPosition="50% 20%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo7.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj7" objectFit="cover" objectPosition="50% 5%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo9.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj9" objectFit="cover" objectPosition="50% 80%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo10.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj10" objectFit="cover" objectPosition="50% 60%" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo18.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj18" objectFit="cover" objectPosition="50% 70%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo16.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj16" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo17.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj17" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo8.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj8" objectFit="cover" objectPosition="50% 0%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={dolceVita.photo14.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj14" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={dolceVita.photo15.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj15" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default DolceVita
