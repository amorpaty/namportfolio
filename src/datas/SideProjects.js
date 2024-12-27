export const sideProjects = [
    {
        title : '포트폴리오 사이트',
        dates : '2024.12.01 ~ 2024.12.27',
        dept : '나의 포트폴리오 사이트',
        position : 'Web Front-end Developer',
        skillStack : ["JS ES6", "React", "Famer-motion", "HTML", "Tailwind CSS"],
        skillStackList : ["JS ES6", "React", "Famer-motion", "HTML", "Tailwind CSS"],
        result : '사이트 구축으로 접근성 증대 / 전문성 & 가독성 증대',
        image : '/namportfolio/images/projectsPictures/portfolioSIte.png',
        imageList : [
            '/namportfolio/images/projectsPictures/portfolioSIte.png',
        ],
        categories: [
            {
                categoryName: "React 활용",
                techImpl: [
                    "React 기반 페이지 전환 / Hook 사용 상태 관리",
                ]
            },
            {
                categoryName: "Famer-motion 라이브러리",
                techImpl: [
                    "화면 애니메이션 모션 활용"
                ]
            }
        ],
        results: [
            "디지털 시대에 온라인 존재감을 높일 수 있으며, 더 많은 사람들에게 노출 기대",
            "작업물을 효과적으로 보여줄 수 있어, 전문성 강조 및 가독성 상승"
        ]
    },
    {
        title : '유일무이 프로젝트 (WEB, APP)',
        dates : '2024.06 ~ 2024.11',
        dept : '취향에 맞는 카페 수집, 방문 기록을 남겨 나만의 카페를 관리하는 서비스',
        position : 'Web Full-Stack Developer',
        skillStack : ["JPA", "Supabase", "React-Native", "React", "TypeScript", "salanium", "크롤링", "Open API"],
        skillStackList : ["JPA", "Supabase", "React-Native", "React", "TypeScript", "salanium", "크롤링", "Open API", "카카오/구글 로그인 연동",
            "구글 지도 연동"
        ],
        result : '진행 중',
        image : '/namportfolio/images/projectsPictures/sideProject_1.png',
        imageList : [
            '/namportfolio/images/projectsPictures/sideProject_1.png',
            '/namportfolio/images/projectsPictures/sideProject_2.jpg',
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
            "",
        ]
    },
]


