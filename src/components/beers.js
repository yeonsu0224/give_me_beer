const beerData = [
  // 🇰🇷 Korea
  {
    id: "Cass",
    country: "Korea",
    name: "Cass",
    type: "라거",
    abv: "4.5%",
    taste: "시원하고 청량",
    aroma: "약한 곡물향",
    feature: "가볍고 산뜻함",
    pairings: "치킨, 마른안주",
    description: "한국 대표 라거. 깔끔하고 청량해서 치킨과 궁합이 좋아요.",
    imgsrc: "./img/korea/cass.png",
    liked: false
    
  },
  {
    id: "Hite",
    country: "Korea",
    name: "Hite",
    type: "라거",
    abv: "4.3%",
    taste: "부드러운 목넘김",
    aroma: "고소한 곡물 향",
    feature: "탄산감과 균형",
    pairings: "탕류, 두부요리",
    description: "밸런스 좋은 라거. 부드럽고 부담 없는 맛으로 사랑받아요.",
    imgsrc: "./img/korea/hite.png",
    liked: false
  },
  {
    id: "Jeju",
    country: "Korea",
    name: "Jeju Wit Ale",
    type: "밀맥주",
    abv: "5.3%",
    taste: "부드럽고 상큼",
    aroma: "제주 감귤 껍질",
    feature: "제주산 재료",
    pairings: "해산물, 과일 안주",
    description: "제주 감귤의 산뜻한 향과 밀맥의 부드러움이 조화를 이뤄요.",
    imgsrc: "./img/korea/jeju.png",
    liked: false
  },
  {
    id: "Kloud",
    country: "Korea",
    name: "Kloud",
    type: "프리미엄 라거",
    abv: "5.0%",
    taste: "풍부한 거품과 깊은 맛",
    aroma: "고소한 몰트 향",
    feature: "무거운 바디",
    pairings: "육류, 바비큐",
    description: "독일식 원맥주 방식으로 진한 풍미를 자랑하는 라거.",
    imgsrc: "./img/korea/kloud.png",
    liked: false
  },
  {
    id: "Terra",
    country: "Korea",
    name: "Terra",
    type: "라거",
    abv: "4.6%",
    taste: "깔끔하고 드라이",
    aroma: "청정 몰트 향",
    feature: "호주산 맥아 강조",
    pairings: "회, 해산물 요리",
    description: "청정 이미지와 깔끔한 맛으로 인기 있는 드라이 라거.",
    imgsrc: "./img/korea/terra.png",
    liked: false
  },
  {
    id: "Asahi Super Dry",
    country: "Japan",
    name: "Asahi Super Dry",
    type: "드라이 라거",
    abv: "5.0%",
    taste: "깔끔하고 청량",
    aroma: "약한 몰트향",
    feature: "드라이한 마무리",
    pairings: "초밥, 튀김",
    description: "일본식 드라이 라거의 대표주자. 깔끔한 마무리가 인상적.",
    imgsrc: "./img/japan/asahi.png" ,
    liked: false
  },
  {
    id: "Sapporo",
    country: "Japan",
    name: "Sapporo",
    type: "라거",
    abv: "5.0%",
    taste: "고소하고 쌉싸름",
    aroma: "홉과 곡물",
    feature: "일본 최북단 홉 원산지",
    pairings: "라멘, 튀김",
    description: "홉의 쌉싸름함과 고소한 끝맛이 인상적인 전통 라거.",
    imgsrc: "./img/japan/sapporo.png",
    liked: false
  },
  {
    id: "Kirin Ichiban",
    country: "Japan",
    name: "Kirin Ichiban",
    type: "프리미엄 라거",
    abv: "5.0%",
    taste: "부드러운 곡물 맛",
    aroma: "약간의 단 향",
    feature: "첫 추출 맥아만 사용",
    pairings: "생선구이, 돈카츠",
    description: "첫 맥즙만을 사용한 깊고 부드러운 프리미엄 라거.",
    imgsrc: "./img/japan/kirin.png",
    liked: false
  },
  {
    id: "Yona Yona Ale",
    country: "Japan",
    name: "Yona Yona Ale",
    type: "페일 에일",
    abv: "5.5%",
    taste: "달콤쌉싸름한 자몽 느낌",
    aroma: "시트러스, 열대과일",
    feature: "일본 수제맥주 대표",
    pairings: "햄버거, 타코야키",
    description: "홉의 풍미가 살아 있는 일본 대표 크래프트 에일.",
    imgsrc: "./img/japan/yona.png",
    liked: false
  },
  {
    id: "Coedo Beniaka",
    country: "Japan",
    name: "Coedo Beniaka",
    type: "앰버 라거",
    abv: "7.0%",
    taste: "달콤하고 깊은 맛",
    aroma: "고구마, 캐러멜",
    feature: "고구마 원료의 독특함",
    pairings: "돈카츠, 구운 채소",
    description: "고구마를 이용한 일본만의 독창적 앰버 라거.",
    imgsrc: "./img/japan/coedo.png",
    liked: false
  },
  {
    id: "Brooklyn Lager",
    country: "USA",
    name: "Brooklyn Lager",
    type: "앰버 라거",
    abv: "5.2%",
    taste: "고소하고 중후함",
    aroma: "토피, 캐러멜",
    feature: "뉴욕 대표 수제맥주",
    pairings: "버거, 감자튀김",
    description: "붉은빛 앰버 라거의 원조격 수제 맥주.",
    imgsrc: "./img/usa/brooklyn.png",
    liked: false
  },
  {
    id: "Goose IPA",
    country: "USA",
    name: "Goose IPA",
    type: "IPA",
    abv: "5.9%",
    taste: "쌉싸름하고 홉 풍미 진함",
    aroma: "시트러스, 열대과일",
    feature: "대표적인 미국 IPA",
    pairings: "스파이시 치킨, 피자",
    description: "홉의 향이 풍부하게 터지는 정통 IPA 스타일.",
    imgsrc: "./img/usa/goose.png",
    liked: false
  },
  {
    id: "Blue Moon",
    country: "USA",
    name: "Blue Moon",
    type: "밀맥주",
    abv: "5.4%",
    taste: "부드럽고 살짝 달콤함",
    aroma: "오렌지 껍질, 코리앤더",
    feature: "크리미한 질감, 오렌지 슬라이스와 함께",
    pairings: "샐러드, 크림 파스타",
    description: "부드럽고 향긋한 미국식 밀맥주. 오렌지와 함께 즐기면 더 좋아요.",
    imgsrc: "./img/usa/bulemoon.png",
    liked: false
  },
  {
    id: "Lagunitas IPA",
    country: "USA",
    name: "Lagunitas IPA",
    type: "IPA",
    abv: "6.2%",
    taste: "강한 홉 쌉싸름함",
    aroma: "시트러스, 송진",
    feature: "미국 서부 IPA 대표 브랜드",
    pairings: "버팔로윙, 맥앤치즈",
    description: "홉의 쌉싸름한 맛이 진하게 퍼지는 정통 미국 IPA.",
    imgsrc: "./img/usa/ipa.png",
    liked: false
  },
  {
    id: "Beck’s",
    country: "Germany",
    name: "Beck’s",
    type: "라거",
    abv: "5.0%",
    taste: "쌉싸름하고 깔끔",
    aroma: "허브와 홉",
    feature: "가볍게 마시기 좋음",
    pairings: "프레첼, 그릴드 소시지",
    description: "독일식 정통 라거. 부담 없이 마시기 좋아요.",
    imgsrc: "./img/germany/becks.png",
    liked: false
  },
  {
    id: "Weihenstephaner Original",
    country: "Germany",
    name: "Weihenstephaner Original",
    type: "헬레스 라거",
    abv: "5.1%",
    taste: "부드럽고 청량한 맛",
    aroma: "곡물향과 은은한 홉",
    feature: "세계에서 가장 오래된 양조장",
    pairings: "슈니첼, 감자요리",
    description: "독일 바이에른 전통을 대표하는 부드러운 헬레스 라거.",
    imgsrc: "./img/germany/Weihenstephaner.png",
    liked: false
  },
  
 
  {
    id: "Paulaner Hefe-Weißbier",
    country: "Germany",
    name: "Paulaner Hefe-Weißbier",
    type: "밀맥주",
    abv: "5.5%",
    taste: "부드럽고 과일향 가득",
    aroma: "바나나, 정향",
    feature: "풍부한 거품과 청량함",
    pairings: "샐러드, 과일 디저트",
    description: "과일향이 가득한 독일 밀맥주의 정석!",
    imgsrc: "./img/germany/Paulaner.png",
    liked: false
  },
  {
    id: "Hoegaarden",
    country: "Belgium",
    name: "Hoegaarden",
    type: "밀맥주",
    abv: "4.9%",
    taste: "상큼하고 산뜻함",
    aroma: "오렌지 껍질, 고수 씨",
    feature: "벨기에 대표 밀맥주",
    pairings: "해산물, 샐러드",
    description: "오렌지 껍질과 고수 씨의 향긋함이 매력적인 밀맥주.",
    imgsrc: "./img/belgium/hoegaarden.png",
    liked: false
  },
  {
    id: "Leffe Blonde",
    country: "Belgium",
    name: "Leffe Blonde",
    type: "벨지안 에일",
    abv: "6.6%",
    taste: "약간의 단맛과 쌉쌀함",
    aroma: "바닐라, 캐러멜",
    feature: "풍부한 향과 바디감",
    pairings: "치즈, 로스트 치킨",
    description: "전통 수도원 스타일의 깊은 풍미가 느껴지는 에일.",
    imgsrc: "./img/belgium/leffe.png",
    liked: false
  },
  {
    id: "Chimay Blue",
    country: "Belgium",
    name: "Chimay Blue",
    type: "트라피스트",
    abv: "9.0%",
    taste: "짙고 달콤한 과일향",
    aroma: "건포도, 캐러멜",
    feature: "고도수 트라피스트 맥주",
    pairings: "진한 스튜, 숙성 치즈",
    description: "깊고 복합적인 풍미가 일품인 벨기에 수도원 맥주.",
    imgsrc: "./img/belgium/chimay.png",
    liked: false
  },
  {
    id: "Duvel",
    country: "Belgium",
    name: "Duvel",
    type: "골든 에일",
    abv: "8.5%",
    taste: "드라이하고 강한 탄산",
    aroma: "과일 향, 페퍼 노트",
    feature: "강한 탄산과 드라이함",
    pairings: "생선요리, 해산물 파스타",
    description: "강한 탄산과 드라이한 바디가 매력적인 고도수 에일.",
    imgsrc: "./img/belgium/duvel.png",
    liked: false
  },
  {
    id: "La Chouffe",
    country: "Belgium",
    name: "La Chouffe",
    type: "벨지안 스트롱 에일",
    abv: "8.0%",
    taste: "과일 맛과 은은한 쌉싸름",
    aroma: "허브, 과일 향",
    feature: "쾌활한 느낌의 강한 에일",
    pairings: "매콤한 볶음요리, 햄",
    description: "귀여운 난장이 캐릭터로 유명한 향긋한 스트롱 에일.",
    imgsrc: "./img/belgium/lachouffe.png",
    liked: false
  },
  {
    id: "Rochefort 10",
    country: "Belgium",
    name: "Rochefort 10",
    type: "트라피스트",
    abv: "11.3%",
    taste: "무겁고 진한 달콤쌉쌀함",
    aroma: "건과일, 다크초콜릿",
    feature: "트라피스트 최고 강도",
    pairings: "치즈 플래터, 초콜릿",
    description: "풍부하고 진한 맛의 최고급 트라피스트 맥주.",
    imgsrc: "./img/belgium/rochefort.png",
    liked: false
  }
];

export default beerData