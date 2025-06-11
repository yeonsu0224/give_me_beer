
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
        position: "relative", 
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
        position: "relative", 
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
        zIndex: 20, 
        cursor: "pointer",
        transition: "opacity 0.2s ease-in-out",  };

    return (

        <div style={cardStyle}>

            <div 
                style={heartStyle} 
                onClick={(e) => {
                    e.stopPropagation(); 
                    props.onHeartClick(); 
                }}
            >
                ❤️
            </div>
            
    
            <Link to={`/sub/${props.beerId}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <div style={imageContainerStyle}>
                    
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