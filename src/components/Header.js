import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // 메뉴 상태 관리

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (<header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-white shadow-md z-10">
            {/* 왼쪽 프로필 정보 */}
            <div className="flex items-center space-x-2">
                {/* 블루 네모 아이콘 */}
                <div className="w-4 h-4 bg-blue-600"></div>
                {/* 이름과 직책 */}
                <h1 className="text-lg md:text-xl font-bold text-gray-900">
                    Nam Eun Ju
                    <span className="text-black-800 font-normal text-xs md:text-sm ml-2">
                  / Full Stack Developer
                </span>
                </h1>
            </div>

            {/* 네비게이션 메뉴 (데스크탑) */}
            <nav className="hidden md:flex space-x-6">
                <Link to="/aboutMe" className="text-blue-600 font-medium hover:underline">
                    ABOUT ME
                </Link>
                <Link to="/resume" className="text-gray-800 font-medium hover:underline">
                    RESUME
                </Link>
                <Link to="/projects" className="text-gray-800 font-medium hover:underline">
                    PROJECTS
                </Link>
                <Link to="/contact" className="text-gray-800 font-medium hover:underline">
                    CONTACT
                </Link>
            </nav>

            {/* 햄버거 메뉴 버튼 (모바일용) */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 focus:outline-none"
                >
                    {/* 햄버거 아이콘 */}
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
                className={`absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-500 ease-in-out transform ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                } md:hidden`}
            >
                <nav className="flex flex-col items-center space-y-4 py-6">
                    <a
                        href="#about"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        ABOUT ME
                    </a>
                    <a
                        href="#resume"
                        className="text-gray-800 font-medium hover:underline"
                    >
                        RESUME
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-800 font-medium hover:underline"
                    >
                        PROJECTS
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-800 font-medium hover:underline"
                    >
                        CONTACT
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
