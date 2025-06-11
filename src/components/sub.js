import { useMemo, useEffect, useState } from "react"; 
import React from "react";
import { Link } from "react-router-dom"; 
import "./Sub.css" 
import beerData from "./beers"; 
import { useParams, } from "react-router-dom"; 


function Sub() {

  const { id } = useParams(); 
  
 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const getRandomRecommendations = (excludeId, count = 4) => {
    const filtered = beerData.filter((b) => b.id !== excludeId);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  const recommendations = useMemo(() => getRandomRecommendations(id), [id]);

  
  const beer = beerData.find((b) => b.id === id); 

  useEffect(() => {
    const Bg = document.getElementById("sub-sec");
    
    if (!Bg || !beer) return; 

    const countryBgMap = {
      Korea: "#c9d4f0",
      Japan: "#f8e0e0",
      USA: "#ddebf1",
      Germany: "#f1eddc",
      Belgium: "#ede3cf"
    };

    Bg.style.background = countryBgMap[beer.country] || "white";
  }, [beer]);


  const handleImageClick = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  if (!beer) {
    return (
      <section id="sub-sec" className="sub-not-found">
        <h2>맥주 정보를 찾을 수 없습니다.</h2>
        <p>잘못된 주소이거나 해당 맥주 정보가 존재하지 않습니다.</p>
        <Link to="/" className="back-to-main-link">메인 페이지로 돌아가기</Link>
      </section>
    );
  }


  return(
    <section id="sub-sec">

      <div className="sub-back-button-container">
        <Link to="/" className="sub-back-button">🍻 돌아가기</Link>
      </div>

      <div id="Sub_A_sec">

        <div id="img_A_wrap">
          <div 
            className="img_A" 
            style={{
              backgroundImage: `url(${beer.imgsrc})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              cursor: 'pointer', 
              position: 'relative' 
            }}
            onClick={handleImageClick} 
          >
           
          </div>

          <ul id="inpo">
                   <li className="point">{beer.taste}</li>
              <li className="point">{beer.aroma}</li>
              <li className="point">{beer.feature}</li> 
              <li className="point">{beer.pairings}</li>
           
          </ul>
        </div>
        
        <div id="same_beer">
          <h2 id="new-beer">🍺맥주 추천!</h2>
          <ul id="more_beer">
            {recommendations.map((item) => (
              <li className="same" key={item.id}>
                <Link to={`/sub/${item.id}`}>
                  <div className="img_B" style={{backgroundImage: `url(${item.imgsrc})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",}}></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="rolling">
          <p>{beer.name}</p>
      </div>

      <div className="Sub_B_sec">
        <div className="img_B_wrap">
          <div id="img_B" style={{
            backgroundImage: `url(${beer.imgsrc})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}></div>

          <img className="Country_img" src={`./img/Country/${beer.country}.jpg`} alt={`${beer.country} 국기`}></img>
        </div>

        <div className="beer_description_text">
          <p>{beer.country}</p>
          <p>{beer.name}</p>
          <p>{beer.taste}</p>
          <p>{beer.feature}</p>
          <p>{beer.description}</p>
        </div>
      </div>


      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={beer.imgsrc} alt={beer.name} className="modal-image" />
            <button className="modal-close-button" onClick={handleCloseModal}>X</button>
          </div>
        </div>
      )}


      <footer className="sub-footer">
        <p>만든이 정연수</p>
        <p>"오늘은 무슨 맥주 먹을까? 고민하지 마세요"</p>
        <p>계원예술대학교 디지털미디어과<br/> 2학년 "프로 웹 퍼블리싱" 수업</p>
      </footer>

    </section>
  );
}

export default Sub;