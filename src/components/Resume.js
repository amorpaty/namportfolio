import React, {useState} from 'react';
import Lightbox from "react-image-lightbox";
import SkillList from "./SkillList";

function Resume() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FFDA05] p-4">
            <section className="min-h-screen p-6 md:p-12">
                {/* Header */}
                <div className="text-center mb-8 mt-16 mb-16">
                    <h2 className="text-4xl font-bold flex justify-center items-center">
                        <span className="bg-blue-600 w-4 h-4 mr-2 inline-block"></span>
                        Resume
                    </h2>
                </div>
                <div className="w-2/3 mx-auto">
                    <h3 className="text-3xl font-bold mb-12">Experience</h3>
                </div>
                {/* Experience Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-2/3 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Job Position */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold text-blue-600">2035 - Present</h4>
                            <p className="text-lg font-medium">JOB POSITION</p>
                            <p className="text-gray-600">Company Name</p>
                            <p className="text-gray-700 mt-2">
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit.”
                                dfdsfsdfsdfasdfffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffff
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font.
                            </p>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                I’m a great place for you to tell a story and let your users know
                                a little more about you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 mx-auto mt-32 mb-16">
                    <h3 className="text-3xl font-bold mb-12">Education</h3>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-32 w-2/3 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Job Position */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold text-blue-600">2035 - Present</h4>
                            <p className="text-lg font-medium">JOB POSITION</p>
                            <p className="text-gray-600">Company Name</p>
                            <p className="text-gray-700 mt-2">
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit.”
                                dfdsfsdfsdfasdfffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffff
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font.
                            </p>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                I’m a great place for you to tell a story and let your users know
                                a little more about you.
                            </p>
                        </div>
                    </div>
                </div>
                <SkillList />
            </section>
        </div>
    );
}

export default Resume;