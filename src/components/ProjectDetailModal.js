import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules"; // 모듈 가져오기
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper CSS


function ProjectDetailModal({ project, onClose }) {

    // Esc 키로 모달 닫기
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    // 프로젝트가 없으면 null 반환
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <motion.div
                className="overflow-y-auto bg-white bg-opacity-100 backdrop-blur-lg rounded-3xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-8 relative h-5/6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
            >
                {/* 닫기 버튼 */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors duration-200 text-3xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ✖
                </button>

                {/* 프로젝트 제목 */}
                <h2 className="text-3xl font-extrabold mb-6 text-gray-900 drop-shadow-md">
                    {project.title}
                </h2>

                {/* 이미지 슬라이더 */}
                <div className="mb-6">
                    <Swiper
                        modules={[Navigation, Pagination]} // 모듈 등록
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation // 화살표 활성화
                        pagination={{ clickable: true }} // 페이지네이션 활성화
                    >
                        {project.imageList.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Project Image ${index + 1}`}
                                    className="rounded-2xl w-full h-64 object-cover shadow-lg border border-gray-200"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* 프로젝트 정보 */}
                <div className="mb-6">
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold text-gray-900">기간:</span> {project.dates}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">설명:</span> {project.dept}
                    </p>
                </div>

                {/* 기술 스택 */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                        기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.skillStack.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 결과 */}
                <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                        결과
                    </h3>
                    <p className="text-blue-600 font-bold mb-4">{project.result}</p>
                    <ul className="list-disc list-inside space-y-2">
                        {project.results && project.results.map((result, index) => (
                            <li key={index} className="text-gray-600">{result}</li>
                        ))}
                    </ul>
                </div>

                {/* 구현 사항 */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                        구현 사항
                    </h3>
                    {project.categories && project.categories.map((category, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="font-bold text-indigo-600 mb-2">
                                {category.categoryName}
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                {category.techImpl.map((tech, techIndex) => (
                                    <li key={techIndex} className="text-gray-600">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectDetailModal;
