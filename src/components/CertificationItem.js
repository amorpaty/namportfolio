import React, {useState} from 'react';
import {certifications} from "../datas/Certifications";

function CertificationItem() {
    return (
        <>
            <div className="w-2/3 mx-auto mt-3 mb-16">
                <h3 className="text-3xl font-bold mb-12">Certifications</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-2/3 mx-auto">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row justify-between items-start md:items-center ${
                            index === certifications.length - 1 ? 'mb-4' : 'pb-4 mb-4'
                        }`}
                    >
                        {/* Left Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-blue-600">{cert.name}</h3>
                            <p className="text-gray-600">{cert.organization}</p>
                        </div>

                        {/* Right Section */}
                        <div className="mt-2 md:mt-0 text-gray-700">
                            <p>{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CertificationItem;