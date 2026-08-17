import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Link 컴포넌트를 사용한다고 가정

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // 메뉴 상태 관리
    const location = useLocation(); // 현재 경로 가져오기

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (menu) => {
        setMenuOpen(false); // 모바일 메뉴일 경우 닫기
    };

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-white shadow-md z-10">
            {/* 왼쪽 프로필 정보 */}
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600"></div>
                <Link
                    to="/aboutMe"
                    onClick={() => handleMenuClick("aboutMe")}
                >
                    <h1 className="text-lg md:text-xl font-bold text-gray-900 hover">
                        Nam Eun Ju
                        <span className="text-black-800 font-normal text-xs md:text-sm ml-2">
                            / Full Stack Developer
                        </span>
                    </h1>
                </Link>
            </div>

            {/* 네비게이션 메뉴 (데스크탑) */}
            <nav className="hidden md:flex space-x-6">
                <Link
                    to="/aboutMe"
                    onClick={() => handleMenuClick("aboutMe")}
                    className={`font-medium hover:underline ${location.pathname === "/aboutMe" ? "text-blue-600" : "text-gray-800"
                        }`}
                >
                    ABOUT ME
                </Link>
                <Link
                    to="/resume"
                    onClick={() => handleMenuClick("resume")}
                    className={`font-medium hover:underline ${location.pathname === "/resume" ? "text-blue-600" : "text-gray-800"
                        }`}
                >
                    RESUME
                </Link>
                <Link
                    to="/projects/skills"
                    onClick={() => handleMenuClick("projects/skills")}
                    className={`font-medium hover:underline ${location.pathname === "/projects/skills" ? "text-blue-600" : "text-gray-800"
                        }`}
                >
                    PROJECTS/SKILLS
                </Link>
            </nav>

            {/* 햄버거 메뉴 버튼 (모바일용) */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* 모바일 메뉴 */}
            <div
                className={`absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-500 ease-in-out transform ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    } md:hidden`}
            >
                <nav className="flex flex-col items-center space-y-4 py-6">
                    <Link
                        to="/aboutMe"
                        onClick={() => handleMenuClick("aboutMe")}
                        className={`font-medium hover:underline ${location.pathname === "/aboutMe" ? "text-blue-600" : "text-gray-800"
                            }`}
                    >
                        ABOUT ME
                    </Link>
                    <Link
                        to="/resume"
                        onClick={() => handleMenuClick("resume")}
                        className={`font-medium hover:underline ${location.pathname === "/resume" ? "text-blue-600" : "text-gray-800"
                            }`}
                    >
                        RESUME
                    </Link>
                    <Link
                        to="/projects/skills"
                        onClick={() => handleMenuClick("projects/skills")}
                        className={`font-medium hover:underline ${location.pathname === "/projects/skills" ? "text-blue-600" : "text-gray-800"
                            }`}
                    >
                        PROJECTS/SKILLS
                    </Link>
                    {/*<Link*/}
                    {/*    to="/contact"*/}
                    {/*    onClick={() => handleMenuClick("contact")}*/}
                    {/*    className={`font-medium hover:underline ${*/}
                    {/*        selectedMenu === "contact" ? "text-blue-600" : "text-gray-800"*/}
                    {/*    }`}*/}
                    {/*>*/}
                    {/*    CONTACT*/}
                    {/*</Link>*/}
                </nav>
            </div>
        </header>
    );
};

export default Header;
