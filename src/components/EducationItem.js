import React, {useState} from 'react';
import {educations} from "../datas/Educations";

function EducationItem() {
    return (
        <>
            <div className="w-2/3 mx-auto mt-3 mb-16">
                <h3 className="text-3xl font-bold mb-12">Education</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-2/3 mx-auto mb-20">
                {educations.map((education, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 md:grid-cols-[30%_70%] ${
                            index === educations.length - 1 ? '' : 'pb-4 mb-4'
                        }`}
                    >
                        {/* Left Section */}
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-blue-600">{education.dates}</h3>
                            <p className="text-lg font-medium">{education.degree}</p>
                            <p className="text-gray-600">{education.schoolName}</p>
                        </div>

                        {/* Right Section */}
                        <div className="mt-4 md:mt-0 md:ml-6 text-gray-700 leading-relaxed">
                            {education.description}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default EducationItem;