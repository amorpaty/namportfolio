export const sideProjects = [
    {
        title : '포트폴리트 사이트',
        dates : '2024.12 ~',
        dept : '나의 포트폴리오 사이트',
        skillStack : ["JS ES6", "React", "Famer-motion", "HTML", "Tailwind CSS"],
        skillStackList : ["JS ES6", "React", "Famer-motion", "HTML", "Tailwind CSS"],
        result : '진행 중',
        image : '/namportfolio/images/projectsPictures/portfolioSIte.png',
        imageList : [
            '/namportfolio/images/projectsPictures/portfolioSIte.png',
        ],
        categories: [
            {
                categoryName: "홍수 및 유출 분석",
                techImpl: [
                    "유역 유출 및 하천 흐름 분석 모듈 개발",
                    "HEC-RAS 및 SWMM 기반 홍수 및 강우 유출 모델링"
                ]
            },
            {
                categoryName: "데이터 수집 및 처리",
                techImpl: [
                    "관측소 자료 조회 및 다운로드 기능 개발"
                ]
            }
        ],
        results: [
            "홍수 피해 예방 및 효율적인 하천 관리 가능",
            "정확한 데이터 분석으로 신속한 대응 시스템 구축"
        ]
    },
    {
        title : '유일무이 프로젝트 (WEB, APP)',
        dates : '2024.06 ~ 2024.11',
        dept : '취향에 맞는 카페 수집, 방문 기록을 남겨 나만의 카페를 관리하는 서비스',
        skillStack : ["JPA", "Supabase", "React-Native", "React", "TypeScript", "salanium", "크롤링", "Open API"],
        skillStackList : ["JPA", "Supabase", "React-Native", "React", "TypeScript", "salanium", "크롤링", "Open API"],
        result : '진행 중',
        image : '/namportfolio/images/projectsPictures/sideProject_1.jpg',
        imageList : [
            '/namportfolio/images/projectsPictures/sideProject_1.jpg',
        ],
        categories: [
            {
                categoryName: "로그인 기능",
                techImpl: [
                    "카카오와 구글 로그인 API를 사용하여 사용자 로그인 관리",
                    "찜하기, 방문 로그 등 일부 기능은 로그인한 사용자만 이용 가능하도록 제한",
                    "세션을 통한 로그인 유지"
                ]
            },
            {
                categoryName: "카페 데이터 수집",
                techImpl: [
                    "NAVER 지역검색 API를 통해 카페명을 수집" +
                    "메뉴와 키워드는 Salanuim 라이브러리와 카카오 지도 크롤링을 통해 데이터 수집",
                    "supabase, JPA를 통한 데이터 관리"
                ]
            },
            {
                categoryName: "지도 기능 구현",
                techImpl: [
                    "수집한 카페 정보를 카카오지도 POI(Point of Interest) 로 표출",
                    "POI 클릭 시 카페의 상세 정보가 표시되도록 구현"
                ]
            },
            {
                categoryName: "사용자 편의성 강화",
                techImpl: [
                    "쿠키를 통한 최근 본 카페 목록 구현",
                    "사용자가 최근 본 카페를 '최근 본 카페' 영역에 저장해, 다시 쉽게 찾아볼 수 있도록 기능 구현",
                ]
            },
            {
                categoryName: "기술적 적용",
                techImpl: [
                    "React-Native로 앱 개발 중이며, React와 TypeScript를 도입하여 리액트 컴포넌트의 props와 state에 타입을 지정하여 안정적이고 관리하기 쉬운 코드를 작성"
                ]
            }
        ],
        results: [
            "홍수 피해 예방 및 효율적인 하천 관리 가능",
            "정확한 데이터 분석으로 신속한 대응 시스템 구축"
        ]
    },
]


