import React, {useState} from 'react';

function AboutMe() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FFDA05] p-4">
            {/* 메인 카드 */}
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl min-h-[400px]"> {/* 여기에서 min-h 값을 조정 */}
                {/* 왼쪽 프로필 카드 */}
                <div className="w-full md:w-1/3 bg-[#FFE761] flex flex-col items-center justify-center p-6">
                    <img
                        src="/images/me.jpg"
                        alt="profile"
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
                    />
                    <h1 className="text-lg md:text-xl font-bold text-gray-800">Nam Eun Ju</h1>
                    <div className="w-20 h-1 bg-blue-600 my-6"></div>
                    <p className="text-sm md:text-lg text-black-700 mt-1 tracking-widest">
                        Full Stack Developer
                    </p>
                </div>

                {/* 오른쪽 헤더와 내용 */}
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Hello</h1>
                    <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">
                        Here's who I am & what I do
                    </p>
                    <div>
                        <a href="/resume">
                            <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg mr-2 md:mr-4 hover:bg-blue-700">
                                RESUME
                            </button>
                        </a>
                        <a href="/projects">
                            <button className="border border-gray-800 text-gray-800 px-4 md:px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white">
                                PROJECTS
                            </button>
                        </a>
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-6 text-sm md:text-base">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                        “Edit Text” or double click me to add your own content and make changes to the font.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;