import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import photo1 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 1 - woodenboat made in Poland.webp"
import photo2 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 2 - woodenboat made in Poland.webp"
import photo3 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 3 - woodenboat made in Poland.webp"
import photo4 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 4 - woodenboat made in Poland.webp"
import photo5 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 5 - woodenboat made in Poland.webp"
import photo6 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 6 - woodenboat made in Poland.webp"
import photo7 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 7 - woodenboat made in Poland.webp"
import photo8 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 8 - woodenboat made in Poland.webp"
import photo9 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 9 - woodenboat made in Poland.webp"
import photo10 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 10 - woodenboat made in Poland.webp"
import photo11 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 11 - woodenboat made in Poland.webp"
import photo12 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 12 - woodenboat made in Poland.webp"
import photo13 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 13 - woodenboat made in Poland.webp"
import photo14 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 14 - woodenboat made in Poland.webp"
import photo15 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 15 - woodenboat made in Poland.webp"
import photo16 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 16 - woodenboat made in Poland.webp"
import photo17 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 17 - woodenboat made in Poland.webp"
import photo18 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 18 - woodenboat made in Poland.webp"
import photo19 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 19 - woodenboat made in Poland.webp"
import photo20 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 20 - woodenboat made in Poland.webp"
import photo21 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 21 - woodenboat made in Poland.webp"
import photo22 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 22 - woodenboat made in Poland.webp"
import photo23 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 23 - woodenboat made in Poland.webp"
import photo24 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 24 - woodenboat made in Poland.webp"
import photo25 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 25 - woodenboat made in Poland.webp"
import photo26 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 26 - woodenboat made in Poland.webp"
import photo27 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 27 - woodenboat made in Poland.webp"
import photo28 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 28 - woodenboat made in Poland.webp"
import photo29 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 29 - woodenboat made in Poland.webp"
import photo30 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 30 - woodenboat made in Poland.webp"
import photo31 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 31 - woodenboat made in Poland.webp"
import photo32 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 32 - woodenboat made in Poland.webp"
import photo33 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 33 - woodenboat made in Poland.webp"
import photo34 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 34 - woodenboat made in Poland.webp"
import photo35 from "../images/discoVolante/Cieslik Craft - Disco Volante - galeria zdjecie 37 - woodenboat made in Poland.webp"

var images = [photo1, photo2, photo15, photo11, photo4, photo5, photo12, photo23, photo3, photo26, photo20, photo17, photo34, photo35, photo19, photo33, photo27, photo31, photo22, photo16, photo9, photo10, photo25, photo24, photo7, photo8, photo29, photo30, photo21, photo18, photo32, photo28];
var descriptions = ["Deska rodzielcza Disco Volante", "Deska rodzielcza Disco Volante", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Pierwsze wodowanie Disco Volante", "Pierwsze wodowanie Disco Volante", "Disco Volante w starym Porcie Poznań", "Disco Volante w Starym Porcie Poznań przyciąga uwagę ☺", "Wyróznienie DIsco Volante na Warszawskim Salonie Jachtowym", "Wyróznienie DIsco Volante na Warszawskim Salonie Jachtowym", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Disco Volante na Cybinie (Poznań)", "Disco Volante pod Bramą Poznania", "Disco Volante podczas parady sobótkowej (Poznańskie Wianki)", "Disco Volante podczas parady sobótkowej (Poznańskie Wianki)", "Cieślik Craft", "Yamaha 25 2T", "Pływanie w ślizgu na rzece Warcie", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Sesja zdjęciowa dla Miler Menswear", "Sesja zdjęciowa dla Miler Menswear", "Skanowanie 3D łodzi", "Skanowanie 3D łodzi", "Polerowanie łodzi w firmie Autoklinika", "Polerowanie łodzi w firmie Autoklinika", "Disco Volante na Mazurach", "Disco Volante na Mazurach", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Disco Volante podczas parady sobótkowej (Poznańskie wianki)", "Disco Volante podczas wodowanie w Akwen Marina Czerwonak", "Disco Volante na Warszawskim Salonie Jachtowym"];


const DiscoVolante = () => {
  const discoVolante = useStaticQuery(graphql`
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
          current = 31;
        }
        modalImg.src = images[current];
        captionText.innerHTML = descriptions[current];  
      }
      next.onclick= () => {
        current = current + 1;
        if(current == 32){
          current = 0;
        }
        modalImg.src = images[current];  
        captionText.innerHTML = descriptions[current]; 
      }
    }    
  }

  return(
      <>
      <h1 className="boat-name-gallery">Disco Volante</h1>
      <div className="images">
        <div className="column">
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(0)} src={photo1} alt="CieslikCraft - Gallery - zdj1"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(1)} src={photo2} alt="CieslikCraft - Gallery - zdj2"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(2)} src={photo15} alt="CieslikCraft - Gallery - zdj15"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(3)} src={photo11} alt="CieslikCraft - Gallery - zdj11"/>
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(4)} src={photo4} alt="CieslikCraft - Gallery - zdj4"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(5)} src={photo5} alt="CieslikCraft - Gallery - zdj5"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(6)} src={photo12} alt="CieslikCraft - Gallery - zdj12"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(7)} src={photo23} alt="CieslikCraft - Gallery - zdj23"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(8)} src={photo3} alt="CieslikCraft - Gallery - zdj3"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(9)} src={photo26} alt="CieslikCraft - Gallery - zdj26"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(10)} src={photo20} alt="CieslikCraft - Gallery - zdj20"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(11)} src={photo17} alt="CieslikCraft - Gallery - zdj17"/>
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(12)} src={photo34} alt="CieslikCraft - Gallery - zdj34"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(13)} src={photo35} alt="CieslikCraft - Gallery - zdj35"/>
              </div>
            </div>
          </div>
          <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(14)} src={photo19} alt="CieslikCraft - Gallery - zdj19"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(15)} src={photo33} alt="CieslikCraft - Gallery - zdj33"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(16)} src={photo27} alt="CieslikCraft - Gallery - zdj27"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(17)} src={photo31} alt="CieslikCraft - Gallery - zdj31"/>
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(18)} src={photo22} alt="CieslikCraft - Gallery - zdj22"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(19)} src={photo16} alt="CieslikCraft - Gallery - zdj16"/>
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(20)} src={photo9} alt="CieslikCraft - Gallery - zdj9"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(21)} src={photo10} alt="CieslikCraft - Gallery - zdj10"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(22)} src={photo25} alt="CieslikCraft - Gallery - zdj25"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(23)} src={photo24} alt="CieslikCraft - Gallery - zdj24"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(24)} src={photo7} alt="CieslikCraft - Gallery - zdj7"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(25)} src={photo8} alt="CieslikCraft - Gallery - zdj8"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(26)} src={photo29} alt="CieslikCraft - Gallery - zdj29"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(27)} src={photo30} alt="CieslikCraft - Gallery - zdj30"/>
              </div>
            </div>
          </div>
         <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(28)} src={photo21} alt="CieslikCraft - Gallery - zdj21"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(29)} src={photo18} alt="CieslikCraft - Gallery - zdj18"/>
              </div>
            </div>
          </div>
         <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img className="image" onClick={() => image(30)} src={photo32} alt="CieslikCraft - Gallery - zdj32"/>
              </div>
              <div className="flip-box-back">
                <img className="image" onClick={() => image(31)} src={photo28} alt="CieslikCraft - Gallery - zdj28"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default DiscoVolante
