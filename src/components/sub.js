import { useMemo, useEffect, useState } from "react"; // useState 훅 임포트
import React from "react";
import { Link } from "react-router-dom"; // Link 임포트
import "./Sub.css" // Sub.css 임포트
import beerData from "./beers"; // beerData 임포트
import { useParams, } from "react-router-dom"; // useParams 임포트


function Sub() {

  const { id } = useParams(); 
  
  // 모달의 열림/닫힘 상태를 관리하는 state
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  // Hooks 호출을 조건문 밖으로 이동시킵니다.
  const getRandomRecommendations = (excludeId, count = 4) => {
    const filtered = beerData.filter((b) => b.id !== excludeId);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  const recommendations = useMemo(() => getRandomRecommendations(id), [id]);

  // beer 객체를 찾습니다.
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

  // 이미지 클릭 시 모달 열기
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 (오버레이 클릭 시)
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  // 만약 beer 객체를 찾지 못했을 경우의 처리 (이 return은 Hooks 호출 이후에 와야 합니다.)
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
      {/* 좌측 상단 돌아가기 버튼 (Nav 컴포넌트가 아닌 Sub 페이지 자체에 추가) */}
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
              cursor: 'pointer', // 클릭 가능한 요소임을 표시
              position: 'relative' // 하트 아이콘 제거했으므로 relative 필요 없을 수 있지만, 혹시 모르니 유지
            }}
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기 함수 호출
          >
            {/* 좋아요 버튼 영역을 완전히 제거합니다. */}
            {/* <div
              className="main-beer-heart-icon" 
              style={{ ... }}
              onClick={handleSubPageHeartClick}
            >
              ❤️
            </div> */}
          </div>

          <ul id="inpo">
              {/* beer_name 부분은 주석 처리되어 있습니다. 필요에 따라 다시 추가하세요. */}
              {/* <li id="beer_name">{beer.name}<p>도수 : {beer.abv || "???"}, 유형 : {beer.type} &nbsp; 나라 : {beer.country}</p></li> */}
              <li className="point">{beer.taste}</li>
              <li className="point">{beer.aroma}</li>
              <li className="point">{beer.feature}</li> {/* taste가 두 번 있었습니다. feature로 변경 */}
              <li className="point">{beer.pairings}</li>
              {/* description 부분도 주석 처리되어 있습니다. 필요에 따라 다시 추가하세요. */}
              {/* <li className="explan">"{beer.description}"</li> */}
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

          <img className="Country_img" src={`/img/Country/${beer.country}.jpg`} alt={`${beer.country} 국기`}></img>
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