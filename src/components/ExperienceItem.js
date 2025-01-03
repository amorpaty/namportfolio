import React from "react";
import { experiences } from "../datas/Experiences";
import {Link, useNavigate} from "react-router-dom";

function ExperienceItem() {
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        // 페이지 이동과 함께 데이터 전달
        navigate("/projects/skills", { state: { project } });
    };

    return (
        <>
            {/* 제목 섹션 */}
            <div className="w-full max-w-6xl mx-auto mt-3 mb-16 flex items-center">
                <h3 className="text-3xl font-bold">Experience</h3>
            </div>

            {/* 경험 리스트 */}
            <div className="w-full max-w-6xl mx-auto">
                {experiences.map((experience, index) => (
                    <div
                        key={index} // key 속성 추가
                        className={`bg-white rounded-lg shadow-lg p-6 md:p-8 ${
                            index === experiences.length - 1 ? "mb-20" : "mb-32"
                        }`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6">
                            {/* Job Position */}
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold text-blue-600">{experience.dates}</h4>
                                <p className="text-lg font-medium">{experience.position}</p>
                                <p className="text-gray-600 mb-4">
                                    {experience.company} - {experience.grade}
                                </p>
                                <p className="text-gray-700 mt-2">{experience.desc}</p>
                            </div>

                            {/* Projects */}
                            <div className="ml-0 md:ml-20">
                                {experience.projects.map((project, projectIndex) => (
                                    <div key={projectIndex} className="flex items-center space-x-2 mb-4">
                                        <div className="w-4 h-4 rounded-lg bg-blue-600"></div>
                                        {project.linkYn ? (
                                                <p className="text-gray-700 leading-relaxed hover:text-blue-600 hover:font-bold hover:cursor-pointer"
                                                   onClick={() => handleProjectClick(project)} // 클릭 이벤//
                                                >
                                                    {project.title}
                                                </p>
                                        ) : (
                                            <p className="text-gray-700 leading-relaxed">{project.title}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ExperienceItem;
