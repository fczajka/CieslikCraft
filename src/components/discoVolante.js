import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const DiscoVolante = () => {
  const discoVolante = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 1 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo2: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 2 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo3: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 3 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo4: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 4 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo5: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 5 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo6: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 6 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo7: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 7 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo8: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 8 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo9: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 9 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo10: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 10 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo11: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 11 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo12: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 12 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo13: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 13 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo14: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 14 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo15: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 15 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo16: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 16 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo17: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 17 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo18: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 18 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo19: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 19 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo20: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 20 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo21: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 21 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo22: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 22 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo23: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 23 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo24: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 24 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo25: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 25 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo26: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 26 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo27: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 27 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo28: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 28 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo29: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 29 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo30: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 30 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo31: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 31 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo32: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 32 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo33: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 33 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo34: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 34 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo35: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 35 - woodenboat made in Poland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo36: file(relativePath: { eq: "discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 36 - woodenboat made in Poland.jpg" }) {
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
      <h1 className="boat-name-gallery">Disco Volante</h1>
      <div className="images">
        <div className="column">
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo1.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj1" objectFit="cover" objectPosition="50% 50%" />
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo2.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj2" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo15.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj15" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo11.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj11" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo4.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj4" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo5.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj5" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo12.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj12" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo23.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj23" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo3.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj3" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo26.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj26" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo20.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj20" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo17.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj17" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo34.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj34" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo35.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj35" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
          <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo19.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj19" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo33.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj33" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo27.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj27" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo31.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj31" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo22.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj22" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo16.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj16" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo9.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj9" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo10.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj10" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo25.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj25" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo24.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj24" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo7.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj7" objectFit="cover" objectPosition="50% 10%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo8.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj8" objectFit="cover" objectPosition="50% 50%"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo29.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj29" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo30.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj30" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo21.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj21" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo18.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj18" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <Img className="image" fluid={discoVolante.photo32.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj32" objectFit="cover" objectPosition="50% 50%"/>
              </div>
              <div className="flip-box-back">
                <Img className="image" fluid={discoVolante.photo28.childImageSharp.fluid} alt="CieslikCraft - Gallery - zdj28" objectFit="cover" objectPosition="50% 50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default DiscoVolante
