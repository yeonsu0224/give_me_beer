
import React from "react";
import { Link } from 'react-router-dom';



const Nav = ({ onTitleClick, onSelectCountry }) => { 
    return (
        <section className="main-nav-section">
           
            <h1 className='title' onClick={onTitleClick} style={{cursor: 'pointer'}}>맥주 좀 주세요</h1>
            
          
            <nav className="nav-country-filter"> 
                <ul id="main_nav" className="country-filter-list"> 
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
                        <Link className="filter-link" to="#">전체</Link> 
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Nav;