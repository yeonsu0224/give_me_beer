
import React from 'react';
import { Link } from 'react-router-dom';
import './Fillter.css'; 


const Filter = ({ onSelectType }) => { 

    const beerTypes = [
      '라거', '밀맥주', 'IPA', '트라피스트', '골든 에일',
      '프리미엄 라거', '드라이 라거', '앰버 라거', '헬레스 라거',
      '벨지안 에일', '벨지안 스트롱 에일'
    ]; 
    const uniqueBeerTypes = [...new Set(beerTypes)].sort(); 

    return (
        <nav className="filter-nav type-filter-nav"> 
           

          
            <ul className="filter-list type-filter">
                <li onClick={() => onSelectType(null)} style={{cursor: 'pointer'}}>
                    <Link to="#" className="filter-link">모든 타입</Link>
                </li>
                {uniqueBeerTypes.map(type => (
                    <li key={type} onClick={() => onSelectType(type)} style={{cursor: 'pointer'}}>
                        <Link to="#" className="filter-link">{type}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Filter;