import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FFDA05] p-4">
            {/* 메인 카드 */}
            <motion.div
                className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl min-h-[400px]"
                initial={{ opacity: 0, y: 20 }} // 시작 상태
                animate={{ opacity: 1, y: 0 }}  // 애니메이션 완료 상태
                transition={{ duration: 0.8, ease: "easeOut" }} // 애니메이션 속도 및 방식
            >
                {/* 왼쪽 프로필 카드 */}
                <div className="w-full md:w-1/3 bg-[#FFE761] flex flex-col items-center justify-center p-6">
                    <img
                        src="/namportfolio/images/me.jpg"
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
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">안녕하세요</h1>
                    <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">
                        현실에 안주하지 않고 성장하는 개발자 남은주 입니다
                    </p>
                    <div>
                        <Link to="/resume">
                            <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg mr-2 md:mr-4 hover:bg-blue-700">
                                RESUME
                            </button>
                        </Link>
                        <Link to="/projects/skills">
                            <button className="border border-gray-800 text-gray-800 px-4 md:px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white">
                                PROJECTS/SKILLS
                            </button>
                        </Link>
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-6 text-sm md:text-base">
                        QA 업무를 통해 다양한 포지션의 담당자와 원활한 커뮤니케이션을 했고,
                        <br /> Vue, React와 같이 최신 기술을 공부하므로써 성장을 게을리 하지 않고 있습니다.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;
