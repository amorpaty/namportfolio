export const sideProjects = [
    {

        title: '카공로그',
        dates: '2026.06 ~ 진행중',
        dept: '카페 공부 기록 및 성장 패턴 분석 서비스',
        position: 'Full-Stack Developer',
        skillStack: [
            "React",
            "TypeScript",
            "Spring Boot",
            "PostgreSQL",
            "Tailwind CSS"
        ],
        skillStackList: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Spring Boot",
            "JAVA",
            "MyBatis",
            "PostgreSQL",
            "Axios",
            "AWS",
            "Nginx"
        ],
        result: '공부 기록을 단순 저장하는 것을 넘어 학습 시간과 패턴을 시각화하여 꾸준한 학습을 돕는 개인 프로젝트',
        image: '/namportfolio/images/projectsPictures/cagonglog-landing.png',
        imageList: [
            '/namportfolio/images/projectsPictures/cagonglog-landing.png',
            '/namportfolio/images/projectsPictures/cagonglog-login.png',
            '/namportfolio/images/projectsPictures/cagonglog-account.png',
            '/namportfolio/images/projectsPictures/cagonglog-dashboard.png',
            '/namportfolio/images/projectsPictures/cagonglog-study-log.png'
        ],
        categories: [
            {
                categoryName: "서비스 기획 및 UI/UX 설계",
                techImpl: [
                    "카페에서의 공부 시간과 학습 기록을 관리할 수 있는 서비스 직접 기획",
                    "Web / Mobile 환경을 고려한 반응형 랜딩 페이지 구현",
                    "Mustard 컬러를 포인트로 활용한 서비스 디자인 시스템 구성",
                    "공부 기록과 통계를 직관적으로 확인할 수 있도록 대시보드 UI 설계"
                ]
            },
            {
                categoryName: "React 기반 Front-End 개발",
                techImpl: [
                    "React 19 + TypeScript + Vite 기반 Front-End 환경 구성",
                    "React Router를 활용한 로그인, 회원가입, 메인 페이지 라우팅 구현",
                    "공통 Header 및 재사용 가능한 UI 컴포넌트 설계",
                    "react-responsive를 활용한 Web / Mobile 화면 분기",
                    "Axios 공통 API 모듈을 구성하여 서버 통신 로직 관리"
                ]
            },
            {
                categoryName: "사용자 인증 및 세션 관리",
                techImpl: [
                    "닉네임 + 6자리 PIN 기반 간편 로그인 기능 설계 및 구현",
                    "UUID 기반 사용자 식별 구조 설계",
                    "localStorage를 활용한 사용자 세션 유지 기능 구현",
                    "닉네임 중복 확인 및 입력값 Validation 처리",
                    "사용자 존재 여부 확인을 통한 화면 접근 제어 구현"
                ]
            },
            {
                categoryName: "공부 기록 관리",
                techImpl: [
                    "사용자별 공부 기록 등록 및 조회 기능 구현",
                    "공부 제목, 공부 시간 등 학습 데이터 관리 기능 개발",
                    "기록 증가를 고려한 조회 방식 및 무한 스크롤 구조 설계",
                    "사용자의 공부 데이터를 기반으로 성장 패턴을 확인할 수 있는 화면 구성"
                ]
            },
            {
                categoryName: "Spring Boot API 개발",
                techImpl: [
                    "Spring Boot 기반 REST API 서버 구축",
                    "Controller / Service / ServiceImpl 구조로 비즈니스 로직 분리",
                    "MyBatis Mapper 및 XML 기반 데이터 접근 계층 구현",
                    "사용자 및 공부 기록 관련 API 개발",
                    "공통 응답 및 예외 처리를 고려한 서버 구조 설계"
                ]
            },
            {
                categoryName: "Database 설계",
                techImpl: [
                    "PostgreSQL 기반 users, study_log, cafe 테이블 설계",
                    "UUID 기반 사용자 PK 및 사용자-공부기록 간 FK 관계 구성",
                    "데이터 생성/수정 시간을 관리할 수 있도록 created_at, updated_at 구성",
                    "서비스 기능 확장을 고려한 데이터 모델 구조 개선"
                ]
            },
            {
                categoryName: "배포 환경 구성",
                techImpl: [
                    "AWS 기반 서비스 배포 환경 설계",
                    "EC2 / Nginx를 활용한 Front-End 및 Back-End 배포 구조 구성",
                    "Vite Proxy를 활용하여 로컬 개발 환경의 API 통신 구성",
                    "/api Reverse Proxy 구조를 통해 개발/운영 환경의 API 호출 방식 통일",
                    "PostgreSQL AWS RDS 이전을 고려한 운영 DB 구조 설계"
                ]
            }
        ],
        results: [
            "서비스 기획부터 UI/UX, Front-End, Back-End, Database까지 직접 설계 및 구현",
            "React와 Spring Boot를 연계한 Full-Stack 웹 서비스 개발 경험 확보",
            "공통 컴포넌트와 API 모듈화를 통해 코드 재사용성과 유지보수성 향상",
            "UUID 기반 사용자 관리 및 간편 로그인 구조 직접 설계",
            "AWS 기반 실제 서비스 배포를 고려한 Front-End / Back-End / DB 아키텍처 구성"
        ]
    },
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


