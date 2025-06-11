// src/components/Nav.js
import React from "react";
import { Link } from 'react-router-dom';


// onSelectCountry prop을 다시 받도록 추가합니다.
const Nav = ({ onTitleClick, onSelectCountry }) => { 
    return (
        <section className="main-nav-section">
           
            <h1 className='title' onClick={onTitleClick} style={{cursor: 'pointer'}}>맥주 좀 주세요</h1>
            
            {/* !!!! 나라 필터 메뉴를 다시 여기에 추가합니다. !!!! */}
            <nav className="nav-country-filter"> {/* 새로운 클래스명으로 nav를 감싸거나 기존 nav 클래스 사용 */}
                <ul id="main_nav" className="country-filter-list"> {/* 클래스 추가 */}
                    <li onClick={() => onSelectCountry('Liked')} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">♥️</Link>
                    </li>
                    <li onClick={() => onSelectCountry("Korea")} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">한국</Link>
                    </li>
                    <li onClick={() => onSelectCountry("Japan")} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">일본</Link>
                    </li>
                    <li onClick={() => onSelectCountry("USA")} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">미국</Link>
                    </li>
                    <li onClick={() => onSelectCountry("Germany")} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">독일</Link>
                    </li>
                    <li onClick={() => onSelectCountry("Belgium")} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">벨기에</Link>
                    </li>
                    <li onClick={() => onSelectCountry(null)} style={{cursor: 'pointer'}}>
                        <Link className="filter-link" to="#">전체</Link> {/* '전체' 메뉴 추가 */}
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Nav;