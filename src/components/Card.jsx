// Card.js
import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        aspectRatio: "5/5",
        height: "100%",
        padding: 8,
        borderRadius: 10,
        backgroundColor: "white",
        position: "relative", // 이 div는 더 이상 Link로 감싸지므로 relative는 Card 외부에서 Link가 담당
        // cursor: "pointer", // Link가 담당하므로 여기서는 필요 없음
    };

    const imageContainerStyle = {
        width: "80%",
        height: "80%",
        overflow: "hidden",
        backgroundImage: `url(${props.imgsrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: 10,
        zIndex: 10,
        position: "relative", // 하트 아이콘의 기준점
    };

    const infoStyle = {
        textAlign: "center",
        width: "auto",
        height: "auto",
        padding: 8,
        borderRadius: 10,
        backgroundColor: "white",
    };

    const nameStyle = {
        width: "100%",
        height: "20%",
        minHeight: "50px",
        fontSize: "30px",
        fontWeight: '600'
    };

    const heartStyle = {
        position: "absolute",
        top: "5%",
        left: "15%",
        fontSize: "24px",
        opacity: props.liked ? "100%" : "30%",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
        zIndex: 20, // 하트가 이미지 위에 오도록
        cursor: "pointer",
        transition: "opacity 0.2s ease-in-out", // 부드러운 효과 (선택 사항)
    };

    return (

        <div style={cardStyle}>

            <div 
                style={heartStyle} 
                onClick={(e) => {
                    e.stopPropagation(); // 하트 클릭 시 Link로 이벤트 전파 방지
                    props.onHeartClick(); // 하트 클릭 시 onHeartClick prop 호출
                }}
            >
                ❤️
            </div>
            
    
            <Link to={`/sub/${props.beerId}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <div style={imageContainerStyle}>
                    {/* 이미지 컨테이너 내부에 img 태그가 아닌 background-image로 되어 있으므로,
                    여기에 추가적인 이미지 태그는 필요 없습니다. */}
                </div>
                <div style={infoStyle}>
                    <p style={nameStyle}> {props.name}</p>
                    <p>{props.feature}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;