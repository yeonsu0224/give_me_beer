// src/components/Filter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Fillter.css'; // 필터 컴포넌트 전용 CSS 파일

// onSelectCountry prop을 제거합니다. onSelectType만 받습니다.
const Filter = ({ onSelectType }) => { 
    // beerData에서 고유한 타입 목록을 동적으로 가져올 수도 있지만, 여기서는 간단히 하드코딩
    const beerTypes = [
      '라거', '밀맥주', 'IPA', '트라피스트', '골든 에일',
      '프리미엄 라거', '드라이 라거', '앰버 라거', '헬레스 라거',
      '벨지안 에일', '벨지안 스트롱 에일'
    ]; 
    const uniqueBeerTypes = [...new Set(beerTypes)].sort(); // 중복 제거 및 정렬

    return (
        <nav className="filter-nav type-filter-nav"> {/* 클래스명 변경 또는 추가 */}
            {/* !!!! 나라 필터 섹션을 제거합니다. !!!! */}
            {/*
            <ul className="filter-list country-filter">
                <li onClick={() => onSelectCountry('Liked')} style={{cursor: 'pointer'}}>
                    <Link to="#" className="filter-link">♥️</Link>
                </li>
                // ... 다른 나라 li ...
            </ul>
            */}

            {/* 타입 필터 섹션만 남깁니다. */}
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