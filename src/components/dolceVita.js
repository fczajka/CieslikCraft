import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import photo1 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 1 - woodenboat made in Poland.webp"
import photo2 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 2 - woodenboat made in Poland.webp"
import photo3 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 3 - woodenboat made in Poland.webp"
import photo4 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 4 - woodenboat made in Poland.webp"
import photo5 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 5 - woodenboat made in Poland.webp"
import photo6 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 6 - woodenboat made in Poland.webp"
import photo7 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 7 - woodenboat made in Poland.webp"
import photo8 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 8 - woodenboat made in Poland.webp"
import photo9 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 9 - woodenboat made in Poland.webp"
import photo10 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 10 - woodenboat made in Poland.webp"
import photo11 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 11 - woodenboat made in Poland.webp"
import photo12 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 12 - woodenboat made in Poland.webp"
import photo13 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 13 - woodenboat made in Poland.webp"
import photo14 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 14 - woodenboat made in Poland.webp"
import photo15 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 15 - woodenboat made in Poland.webp"
import photo16 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 16 - woodenboat made in Poland.webp"
import photo17 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 17 - woodenboat made in Poland.webp"
import photo18 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 18 - woodenboat made in Poland.webp"
import photo19 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 19 - woodenboat made in Poland.webp"
import photo20 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 20 - woodenboat made in Poland.webp"
import photo21 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 21 - woodenboat made in Poland.webp"
import photo22 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 22 - woodenboat made in Poland.webp"
import photo23 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 23 - woodenboat made in Poland.webp"
import photo24 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 24 - woodenboat made in Poland.webp"
import photo25 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 25 - woodenboat made in Poland.webp"
import photo26 from "../images/dolceVita/Cieslik Craft - Dolce Vita - galeria zdjecie 26 - woodenboat made in Poland.webp"

var images = [photo5, photo6, photo4, photo11, photo1, photo2, photo19, photo22, photo20, photo21, photo23, photo24, photo13, photo12, photo3, photo7, photo9, photo10, photo18, photo16, photo17, photo8, photo14, photo15, photo25, photo26];
var descriptions = ["Wykończenie podcięć w ramach pod wzdłużniki", "Przykręcanie wzdłużników do ramy", "Szkielet motorówki Dolce Vita (projektu Glen-L ZIP)", "Mocowanie lewej burty do szkieletu łodzi", "Sklejenie stewy dziobowej", "Wyznaczenie kąta mocowania z użyciem lasera krzyżowego", "Wygładzenie powierzchni kadłuba przed malowaniem", "Wygładzenie powierzchni kadłuba przed malowaniem", "Przygotowanie farby poliuretanowej Sea - Line", "Przygotowanie farby poliuretanowej Sea - Line", "Pierwsze odbiory techniczne po lakierowaniu kadłuba", "Pierwsze odbiory techniczne po lakierowaniu kadłuba", "Przygotowanie żywicy epoksydowej", "Mocowanie tkaniny szklanej do kadłuba", "sklejone elementy ramy", "Podcięcia wzdłużników zapewniające przepływ wody do pomp zęzowych", "Mocowanie prawej burty do ramy", "Wykończenie krawędzi styku burt na dziobie łodzi z użyciem piły japońskiej", "Szlifowanie powierzchni burt z wykorzystaniem szlifierki oscylacyjnej", "Kontrola proporcji i procesu przygotowania farb przed malowaniem", "Szlifowanie powierzchni burt z wykorzystaniem szlifierki taśmowej", "Dop[asowanie kątów wzdłużników z użyciem struga ręcznego No. 5", "Przygotowanie farby poliuretanowej Sea - Line", "Przygotowanie farby poliuretanowej Sea - Line", "Skanowanie 3D kadłuba łodzi", "Skanowanie 3D kadłuba łodzi"];

const DolceVita = () => {
  const data = useStaticQuery(graphql`
    query {
      prev: file(relativePath: { eq: "left.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      next: file(relativePath: { eq: "right.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function image(current) {
    if(window.screen.width > 1200) {
      const modalImg = document.querySelector("#img");
      const overlay = document.querySelector(".overlay");
      const span = document.querySelector(".close");
      const image = document.querySelector(".modal-image");
      const content = document.querySelector(".modal-block");
      const captionText = document.querySelector(".caption");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");
      image.style.display = "block";
      content.style.display = "block";
      span.style.display = "block";
      modalImg.src = images[current];
      captionText.innerHTML = descriptions[current];
      overlay.classList.add("active");
      content.onmouseover = () => {
        prev.style.opacity = "1";
        next.style.opacity = "1";
      }
      content.onmouseout = () => {
        prev.style.opacity = "0";
        next.style.opacity = "0";
      }
      span.onclick = () => {
        image.style.display = "none";
        content.style.display = "none";
        span.style.display = "none";
        overlay.classList.remove("active");
        captionText.innerHTML = "";
      }
      overlay.onclick = () => {
        image.style.display = "none";
        content.style.display = "none";
        span.style.display = "none";
        overlay.classList.remove("active");
        captionText.innerHTML = "";
      }
      prev.onclick= () => {
        current = current - 1;
        if(current == -1){
          current = 25;
        }
        modalImg.src = images[current];
        captionText.innerHTML = descriptions[current];  
      }
      next.onclick= () => {
        current = current + 1;
        if(current == 26){
          current = 0;
        }
        modalImg.src = images[current];  
        captionText.innerHTML = descriptions[current]; 
      }
    }    
  }

  return(
      <>
      <h1 className="boat-name-gallery">Dolce Vita</h1>
      <div className="images">
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(0)} src={photo5} alt="CieslikCraft - Gallery - zdj5"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(1)} src={photo6} alt="CieslikCraft - Gallery - zdj6"/>
              </div>
            </div>
          </div>
         <div className="flip-box-3">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(2)} src={photo4} alt="CieslikCraft - Gallery - zdj4"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(3)} src={photo11} alt="CieslikCraft - Gallery - zdj11"/>
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image higher-photo" onClick={() => image(4)} src={photo1} alt="CieslikCraft - Gallery - zdj1"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(5)} src={photo2} alt="CieslikCraft - Gallery - zdj2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(6)} src={photo19} alt="CieslikCraft - Gallery - zdj19"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(7)} src={photo22} alt="CieslikCraft - Gallery - zdj22"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(8)} src={photo20} alt="CieslikCraft - Gallery - zdj20"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(9)} src={photo21} alt="CieslikCraft - Gallery - zdj21"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image lower-photo" onClick={() => image(10)} src={photo23} alt="CieslikCraft - Gallery - zdj23" />
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(11)} src={photo24} alt="CieslikCraft - Gallery - zdj24"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(12)} src={photo13} alt="CieslikCraft - Gallery - zdj13"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(13)} src={photo12} alt="CieslikCraft - Gallery - zdj12"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(14)} src={photo3} alt="CieslikCraft - Gallery - zdj3"/>
              </div>
              <div className="flip-box-back">
                <img className="image lower-photo" onClick={() => image(15)} src={photo7} alt="CieslikCraft - Gallery - zdj7"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(16)} src={photo9} alt="CieslikCraft - Gallery - zdj9"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(17)} src={photo10} alt="CieslikCraft - Gallery - zdj10"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(18)} src={photo18} alt="CieslikCraft - Gallery - zdj18"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(19)} src={photo16} alt="CieslikCraft - Gallery - zdj16"/>
              </div>
            </div>
          </div>
          <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(20)} src={photo17} alt="CieslikCraft - Gallery - zdj17"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(21)} src={photo8} alt="CieslikCraft - Gallery - zdj8"/>
              </div>
            </div>
          </div>
          <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(22)} src={photo14} alt="CieslikCraft - Gallery - zdj14"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(23)} src={photo15} alt="CieslikCraft - Gallery - zdj15"/>
              </div>
            </div>
          </div>          
          <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(24)} src={photo25} alt="CieslikCraft - Gallery - zdj17"/>
              </div>
              <div className="flip-box-back">
                <img className="image lower-photo" onClick={() => image(25)} src={photo26} alt="CieslikCraft - Gallery - zdj8"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal">
        <span className="close">&times;</span>
        <div className="modal-block">
          <img className="modal-image" id="img" />
          <div className="caption"></div>
          <div className="prev"><Img fluid={data.prev.childImageSharp.fluid} alt="Previous photo" /></div>
          <div className="next"><Img fluid={data.next.childImageSharp.fluid} alt="Next photo" /></div>
        </div>
      </div>
      </>
  )
}

export default DolceVita
