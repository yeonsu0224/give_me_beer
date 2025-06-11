// Main.js
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './main.css';
import initialBeerData from "./beers";
import Card from './Card';
import Nav from './Nav';       // Nav 컴포넌트 임포트
import Filter from './Fillter'; // Filter 컴포넌트 임포트


const Main = () => {
    // const navigate = useNavigate(); // 현재 사용되지 않으므로 제거하거나 주석 처리 가능

    const [allBeers, setAllBeers] = useState(initialBeerData); 
    const [selectedCountry, setSelectedCountry] = useState(null); 
    const [selectedType, setSelectedType] = useState(null); 
    const [displayedBeers, setDisplayedBeers] = useState([]); 

    const getFilteredBeers = useCallback(() => {
        let currentBeers = allBeers;

        if (selectedCountry === 'Liked') {
            currentBeers = currentBeers.filter(beer => beer.liked === true);
        } else if (selectedCountry && selectedCountry !== 'All') {
            currentBeers = currentBeers.filter(beer => beer.country === selectedCountry);
        }

        if (selectedType && selectedType !== 'All') {
            currentBeers = currentBeers.filter(beer => beer.type === selectedType);
        }

        return currentBeers;
    }, [selectedCountry, selectedType, allBeers]);

    const updateDisplayedBeers = useCallback(() => {
        const filteredBeers = getFilteredBeers();
        setDisplayedBeers(filteredBeers); 
    }, [getFilteredBeers]);

    useEffect(() => {
        updateDisplayedBeers(); 
    }, [updateDisplayedBeers]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setSelectedType(null); // 나라 변경 시 타입 필터 초기화
    };

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        setSelectedCountry(null); // 타입 변경 시 나라 필터 초기화
    };

    const handleHeartClick = (clickedBeerId) => {
        setAllBeers(prevAllBeers => {
            return prevAllBeers.map(beer => 
                beer.id === clickedBeerId ? { ...beer, liked: !beer.liked } : beer
            );
        });
        
        setDisplayedBeers(prevDisplayedBeers => {
            const updatedDisplayedBeers = prevDisplayedBeers.map(beer => 
                beer.id === clickedBeerId ? { ...beer, liked: !beer.liked } : beer
            );

            if (selectedCountry === 'Liked') {
                return updatedDisplayedBeers.filter(beer => beer.liked === true);
            }
            return updatedDisplayedBeers;
        });
    };
    
    // Nav 컴포넌트의 타이틀 클릭 시 모든 맥주를 보여주는 핸들러
    const handleTitleClick = () => {
        setSelectedCountry(null);
        setSelectedType(null); // 타이틀 클릭 시 모든 필터 초기화
    };

    return (
        <main className='main'>
            {/* Nav 컴포넌트에는 onSelectCountry와 onTitleClick을 전달 */}
            <Nav onSelectCountry={handleCountrySelect} onTitleClick={handleTitleClick} /> 
            
            {/* Filter 컴포넌트에는 onSelectType만 전달 */}
            <Filter onSelectType={handleTypeSelect} />

            <ul id="collage">
                {displayedBeers.length > 0 ? (
                    displayedBeers.map((beer) => (
                        <li key={beer.id}>
                           
                                <Card
                                    beerId={beer.id} 
                                    imgsrc={beer.imgsrc}
                                    name={beer.name}
                                    feature={beer.feature}
                                    liked={beer.liked} 
                                    onHeartClick={() => handleHeartClick(beer.id)} 
                                />
                          
                        </li>
                    ))
                ) : (
                    <li><p>선택된 맥주가 없습니다. (필터 조건에 맞는 맥주가 없습니다.)</p></li>
                )}
            </ul>

            <footer className="sub-footer">
                <p>만든이 정연수</p>
                <p>"오늘은 무슨 맥주 먹을까? 고민하지 마세요"</p>
                <p>계원예술대학교 디지털미디어과<br/> 2학년 "프로 웹 퍼블리싱" 수업</p>
            </footer>
        </main>
    );
}

export default Main;