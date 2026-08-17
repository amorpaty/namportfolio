export const projects = [
    {

        title: '흥국화재 Next Core 시스템 구축',
        dates: '2026.01 ~ 진행중',
        dept: '흥국화재 Next Core 시스템 구축',
        position: 'Web Developer',
        skillStack: [
            "javascript",
            "jQuery",
            "JAVA",
            "Oracle",
            "HTML5"
        ],
        skillStackList: [
            "javascript",
            "jQuery",
            "JAVA",
            "Oracle",
            "HTML5",
            "REST API",
            "SVN"
        ],
        result: '* 포탈과 PF 시스템 간 연계 및 공통 기능 개발을 통해 사용자 접근성과 업무 편의성을 향상',
        image: null,
        imageList: [],
        categories: [
            {
                categoryName: "포탈 / PF 시스템 연계",
                techImpl: [
                    "흥국화재 포탈 내 PF 메뉴 연계 기능 개발",
                    "PF 메뉴에서 포탈 화면을 팝업으로 호출할 수 있도록 연계 기능 구현",
                    "시스템 간 파라미터 전달 및 화면 호출 로직 구현",
                    "포탈과 PF 간 화면 연계를 통한 사용자 접근성 개선"
                ]
            },
            {
                categoryName: "기간계 API 연동",
                techImpl: [
                    "기간계 시스템과 연동을 위한 API 호출 기능 개발",
                    "업무 조건에 따라 기간계 URI를 분기하여 호출하는 로직 구현",
                    "API 요청 파라미터 구성 및 응답 데이터 처리",
                    "외부 시스템 연동 과정에서 발생하는 오류 및 예외 케이스 대응"
                ]
            },
            {
                categoryName: "화면 공통 모듈 개발",
                techImpl: [
                    "여러 화면에서 공통으로 사용할 수 있는 기능 분석 및 모듈화",
                    "현업 요구사항을 분석하여 공통 적용 가능한 기능 리스트업 및 개발",
                    "중복 구현을 줄이고 일관된 화면 동작을 제공할 수 있도록 공통 로직 구성"
                ]
            },
            {
                categoryName: "한글/영문 입력값 대문자 치환",
                techImpl: [
                    "화면 입력값의 한글 및 영문을 영문 대문자로 변환하는 공통 기능 개발",
                    "입력 및 키보드 이벤트를 활용한 실시간 문자열 변환 처리",
                    "여러 업무 화면에서 재사용할 수 있도록 공통 모듈로 구현",
                    "현업 담당자와 커뮤니케이션하여 공통 적용 대상 및 예외 케이스 정의"
                ]
            },
            {
                categoryName: "사용자 정보 동기화",
                techImpl: [
                    "사용자 정보 동기화를 위한 배치 프로그램 개발",
                    "시스템 간 사용자 정보 동기화 로직 구현",
                    "동기화 대상 데이터 조회 및 처리 기능 개발"
                ]
            }
        ],
        results: [
            "포탈과 PF 시스템 연계를 통한 사용자 접근성 및 업무 편의성 향상",
            "기간계 API 연동을 통한 업무 시스템 간 데이터 연계 구현",
            "화면 공통 기능 모듈화를 통한 중복 개발 감소 및 유지보수성 향상",
            "현업 요구사항 분석을 통한 공통 기능 도출 및 시스템 적용",
            "사용자 정보 동기화 배치 개발을 통한 시스템 간 사용자 데이터 연계"
        ]
    },
    {
        title : '이노룰스 BRMS WEB 8.0',
        dates : '2024.12.09 ~ 2025.12.31',
        dept : '디지털 의사결정 자동화 시스템',
        position : 'Web Front-End Developer',
        skillStack : ["javascript",  "jQuery", "HTML5", "Typescript", "Oracle"],
        skillStackList : ["javascript",  "jQuery", "JAVA", "Oracle", "JDBC", "TailwindCSS", "Typescript", "HTML5"],
        result : '* IT 비전문가도 이해할 수 있는 표현 방식을 사용하여 IT와 비즈니스 간 협업 증진, 개발 기간 단축, 오류의 최소화 달성',
        image : null,
        imageList : [],
        categories: [
            {
                categoryName: "호출 로그 기능 개선",
                techImpl: [
                    "호출 로그 조회 및 분석 화면 기능 개선",
                    "룰 호출 현황을 분석할 수 있는 UI 및 차트 기능 구현",
                    "호출 로그 다국어 번역 처리",
                    "화면 오류 및 기능 개선을 통한 사용성 향상"
                ]
            },
            {
                categoryName: "PF 시스템 연계",
                techImpl: [
                    "PF에서 이노룰스 대결관리/승인자관리 화면을 호출할 수 있도록 연계 기능 개발",
                    "외부 시스템과 BRMS Web 화면 간 연계 기능 구현"
                ]
            },
            {
                categoryName: "일본어 입력 기능 개선",
                techImpl: [
                    "일본어 키보드 입력 특성에 따른 Enter 이벤트 영향도 분석",
                    "event.key 기반 입력 이벤트 처리 로직 개선",
                    "일본어 입력 시 발생하는 화면 오류 최소화"
                ]
            },
            {
                categoryName: "룰 정의서 다운로드 기능 개선",
                techImpl: [
                    "룰 템플릿별 룰 정의서 Excel 다운로드 기능 개선",
                    "클라이언트에서 수행하던 Excel 생성 로직을 서버 처리 방식으로 변경",
                    "서버 기반 파일 생성을 통해 다운로드 속도 및 메모리 사용 개선"
                ]
            },
            {
                categoryName: "포스코 SCM/MES 기능 개발",
                techImpl: [
                    "하위 룰 항목정보 버튼 비활성화 기능 개발",
                    "SCM/MES 동기화 프로그램 기능 개발",
                    "MES에서 SCM 동기화 시 사용자 알림 기능 추가",
                    "SSO 로그인 기능 개발"
                ]
            },
        ]        
    },
    {
        title : 'HR 2.0 고도화',
        dates : '2022.12 ~ 2024.07',
        dept : 'HR 시스템 사용자 인터페이스 및 기능 개선/추가',
        position : 'Web Full-Stack Developer',
        skillStack : ["HR", "javascript", "jQuery", "JAVA", "Oracle", "MariaDB"],
        skillStackList : ["HR", "javascript", "jQuery", "JAVA", "Oracle", "MariaDB", "thymeleaf"],
        result : '* 사용자 피드백을 통해 개선 사항의 40% 수용',
        image : '/namportfolio/images/projectsPictures/HR2.0_main.jpg',
        imageList : ["/namportfolio/images/projectsPictures/HR2.0_main.jpg"],
        categories : [
            {
                categoryName: "UI/UX 개선",
                techImpl: [
                    "사용자 편의성 개선을 위한 UI/UX 기획",
                    "인사관리, 조직관리, 급여, 통계, 복리후생 관련 기능의 사용자 니즈에 맞춘 개선",
                    "최신 트렌드 기반 기능 적용"
                ]
            }
        ],
        results: [
            "사용자 만족도 및 업무 효율성 향상",
            "다양한 사용자 요구사항 반영으로 시스템 접근성 개선"
        ]
    },
    {
        title : '세이클럽 리뉴얼 프로젝트',
        dates : '2022.08 ~ 2022.12',
        dept : 'php 기반 플랫폼 JAVA, Vue.js 마이그레이션',
        position : 'Web Full-Stack Developer',
        skillStack : ["B2C", "Vue.js", "Typescript", "Nuxt.js", "Tailwind CSS", "Socket", "RestAPI"],
        skillStackList : ["B2C", "Vue.js", "Typescript", "Nuxt.js", "Tailwind CSS", "Socket", "RestAPI", "Oracle"],
        result : '* 서비스 오픈 / 운영 효율 20% 증가',
        image : '/namportfolio/images/projectsPictures/sayclub_main.jpg',
        imageList : [
            '/namportfolio/images/projectsPictures/sayclub_main.jpg',
            '/namportfolio/images/projectsPictures/sayclub_2.jpg',
            '/namportfolio/images/projectsPictures/sayclub_3.jpg'
        ],
        categories: [
            {
                categoryName: "방송국 기능",
                techImpl: [
                    "방송국 운영진 리스트 관리 기능 구현",
                    "방송 예약 및 방송 알림 설정 기능 개발",
                    "신청곡/사연 게시판 및 일반 게시판 기능 개발"
                ]
            },
            {
                categoryName: "채팅 연동",
                techImpl: [
                    "신청곡/사연 작성 및 장미꽃 선물 시 채팅방 연동 기능(API 활용)",
                    "기존 방송국 채팅방을 신규 채팅방으로 이전 작업 수행 (스케줄러 작업)"
                ]
            },
            {
                categoryName: "회원 관리",
                techImpl: [
                    "아이디 변경 및 로그인 전용 아이디 설정",
                    "회원 탈퇴 기능",
                    "알림 설정 (알림, 쪽지, 블랙리스트, 차단리스트 관리)",
                    "적립금, 장미꽃, 아이템 관리 기능",
                ]
            }
        ],
        results: [
            "방송국 관리와 사용자 소통 기능 강화",
            "회원 관리 및 개인화 기능 개선으로 사용자 만족도 향상"
        ]
    },
    {
        title : '특정소방대상물 소방시설 평가 플랫폼',
        dates : '2020.05 ~ 2022.05',
        dept : '소방 공무원의 특정소방 대상물에 설치된 소방시설 설치 적적성을 평가하기 위한 플랫폼',
        position : 'Web Full-Stack Developer',
        skillStack : ["JAVA", "javascript", "thymleaf", "jQuery", "PostgreSQL", "Geoserver", "OpenLayers"],
        skillStackList : ["JAVA", "javascript", "thymleaf", "jQuery", "PostgreSQL", "Geoserver", "OpenLayers", "FTP", "JSON"],
        result : '* GS 인증',
        image : '/namportfolio/images/projectsPictures/119platform_main.png',
        imageList : ['/namportfolio/images/projectsPictures/119platform_main.png'],
        categories: [
            {
                categoryName: "소방시설 정보 처리",
                techImpl: [
                    "소방시설 정보 파일 압축 해제 및 JSON Parsing API 개발",
                    "FTP 파일 전송 가능 여부 확인 API 구현"
                ]
            },
            {
                categoryName: "데이터 다운로드 및 시각화",
                techImpl: [
                    "설계 프로그램 데이터 다운로드 API 개발",
                    "VDS 파일 기반 도면 표출 Front-end 작업"
                ]
            }
        ],
        results: [
            "소방 시설 관리 및 대응력 강화",
            "시각화된 도면과 데이터로 소방 공무원의 효율적 대응 지원"
        ]
    },
    {
        title : '스마트시티 통합 플랫폼',
        dates : '2021.03 ~ 2021.06',
        dept : '플랫폼을 통해 방범, 방재 등에 대한 신속한 상황전파로서 예방 대처 목적',
        position : 'Web Full-Stack Developer',
        skillStack : ["JAVA", "javascript", "thymleaf",  "jQuery","PostgreSQL", "Geoserver", "OpenLayers", "Socket", "RestAPI"],
        skillStackList : ["JAVA", "javascript", "thymleaf",  "jQuery","PostgreSQL", "Geoserver", "OpenLayers", "Socket", "RestAPI", "JWT", "SpringSecurity", "FTP "],
        result : '* TTA 인증',
        image : '/namportfolio/images/projectsPictures/smartcity_main.png',
        imageList : ['/namportfolio/images/projectsPictures/smartcity_main.png'],
        categories: [
            {
                categoryName: "정보 수집 및 실시간 표출",
                techImpl: [
                    "소켓 통신을 통한 방재 정보 수집 및 API 개발",
                    "수집된 JSON 데이터 Parsing 및 DB 적재 기능 구현",
                    "수집된 정보를 Toast 메시지로 알림 후, 이벤트 현황에 실시간으로 표출"
                ]
            },
            {
                categoryName: "서비스 이용 제한",
                techImpl: [
                    "담당자의 권한에 따라 긴급출동, 사회적 약자 지원, 112 긴급출동, 112 긴급 영상 등 서비스 이용을 제한",
                    "SpringSecurity와 JWT 인증 방식을 사용하여 구현."
                ]
            },
            {
                categoryName: "정보 시각화",
                techImpl: [
                    "OpenLayers 및 PostgreSQL GEOM 데이터를 활용한 POI 시각화"
                ]
            },
            {
                categoryName: "CCTV 연동",
                techImpl: [
                    "방범 현장을 CCTV로 모니터링하고, 중요한 장면을 담당자에게 전달할 수 있도록 FTP 서버를 활용해 파일 전송 및 메시지 발송 기능 개발"
                ]
            }
        ],
        results: [
            "스마트시티 운영의 효율성 향상",
            "실시간 방재 정보 제공으로 신속한 대응 가능",
        ]
    },
    {
        title : '도시하천관리 연계 플랫폼',
        dates : '2020.03 ~ 2020.11',
        dept : '도시하천을 관리하기 위한 연계 플랫폼',
        position : 'Web Full-Stack Developer',
        skillStack : ["JAVA", "javascript", "thymleaf" , "jQuery", "PostgreSQL", "Geoserver", "OpenLayers", "OpenAPI", "Python", "SWMM", "HEC-RAS"],
        skillStackList : ["JAVA", "javascript", "jQuery", "thymleaf", "PostgreSQL", "Geoserver", "OpenLayers", "OpenAPI", "Python", "SWMM", "HEC-RAS"
            , "AmChart.js"],
        result : '* 특허 등록',
        image : '/namportfolio/images/projectsPictures/drght_public_main.png',
        imageList : [
            '/namportfolio/images/projectsPictures/drght_public_main.png',
            '/namportfolio/images/projectsPictures/drght_public_2.jpg',
            '/namportfolio/images/projectsPictures/drght_public_3.jpg',
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
            },
            {
                categoryName: "데이터 시각화",
                techImpl: [
                    " PostGIS를 활용하여 하천 유역을 폴리곤 형태로 표현.",
                    "하천의 특정 영역을 선택하면, Amchart.js를 통해 수위 변화가 시간에 따라 그래프로 표시됨",
                    "지도에서 유출 정도를 분석해 원활, 주의, 위험으로 구분하고, 점과 \n" +
                    "선의 색상이 변경되도록 구현",
                ]
            },
            {
                categoryName: "관리 시스템",
                techImpl: [
                    "각 하천 영역을 담당자가 점검하고 평가한 결과를 시스템에서 관리할 수 있도록 제공",
                ]
            },
            {
                categoryName: "개발 과정에서의 개선",
                techImpl: [
                    "화면 표출단에서 흐름(Flow) 개선",
                    "Flag 활용과 반복적인 함수의 세분화로 코드 최적화 경험",
                ]
            }
        ],
        results: [
            "홍수 피해 예방 및 효율적인 하천 관리 가능",
            "정확한 데이터 분석으로 신속한 대응 시스템 구축"
        ]
    },
    {
        title : '경기도 농업가뭄정보 시스템 / 대민서비스',
        dates : '2019.06 ~ 2019.11',
        dept : '가뭄으로 어려움을 겪는 농민에게 도움이 되기 위한 목적으로 빅데이터 기반으로 제작 경기도에서 주관하여 경기도 내 31내 시군' +
            '의 가뭄을 예측하고 농업 가뭄 관련 정보 제공',
        position : 'Web Full-Stack Developer',
        skillStack : ["JAVA", "JSP", "javascript", "Amchart.js", "PostgreSQL", "Geoserver", "OpenLayers", "jQuery"],
        skillStackList : ["JAVA", "JSP", "javascript", "Amchart.js", "PostgreSQL", "Geoserver", "OpenLayers", "jQuery"],
        result : "* 과학기술정보통신부 분석결과 평가회에서 10개 과제 중 '최우수' 등급 선정",
        image : '/namportfolio/images/projectsPictures/gamum_main.png',
        imageList : [
            '/namportfolio/images/projectsPictures/gamum_main.png',
            '/namportfolio/images/projectsPictures/gamum_demin_main.png'
        ],
        categories: [
            {
                categoryName: "가뭄 정보 제공",
                techImpl: [
                    "빅데이터 기반 가뭄 예측 및 정보 제공 기능 개발"
                ]
            },
            {
                categoryName: "GIS 및 Front-end 구현",
                techImpl: [
                    "OpenLayers 및 GeoServer를 활용한 GIS LBS 구현",
                    "jQuery, Amchart 기반 동적 Front-end 개발",
                    "noUiSlider 라이브러리를 활용한 기간별 동적 Front-end 구현"
                ]
            }
        ],
        results: [
            "정확한 가뭄 예측과 정보 제공으로 농민들의 농업 생산성 향상",
            "시각화된 데이터로 사용자 접근성과 활용성 증가",
        ]
    },
]


