import React, {useState} from 'react';
import {experiences} from "../datas/Experiences";
import { Link } from 'react-router-dom';

function ExperienceItem() {
    return (
        <>
            <div className="w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-12">Experience</h3>
            </div>

            {experiences.map((experience, index) => (
                <div
                    className={`bg-white rounded-lg shadow-lg p-6 md:p-8 ${
                        index === experiences.length - 1 ? 'mb-20' : 'mb-32'
                    } w-2/3 mx-auto`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6">
                        {/* Job Position */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold text-blue-600">{experience.dates}</h4>
                            <p className="text-lg font-medium">{experience.position}</p>
                            <p className="text-gray-600 mb-4">{experience.company} - {experience.grade}</p>
                            <p className="text-gray-700 mt-2">{experience.desc}</p>
                        </div>

                        <div className="ml-20">
                            {experience.projects.map((project) => (
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-4 h-4 rounded-lg bg-blue-600"></div>
                                    {project.linkYn ? (
                                        <Link to="/projects">
                                            <p className="text-gray-700 leading-relaxed hover:text-blue-600 hover:font-bold">
                                                {project.title}
                                            </p>
                                        </Link>
                                    ) : (
                                        <p className="text-gray-700 leading-relaxed">
                                            {project.title}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))};
        </>
    );
}

export default ExperienceItem;