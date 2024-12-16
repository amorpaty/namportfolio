import React from "react";
import { skills } from "../datas/Skills.js";

function SkillList(){
    return (
        //p-10 m-4 bg-white rounded-2xl
        // bg-white rounded-lg shadow-lg p-6 md:p-8 w-2/3 mx-auto
        <>
            <div className="w-2/3 mx-auto mt-32 mb-16">
                <h3 className="text-3xl font-bold mb-12">Skills</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-2/3 mx-auto">

                <div className="grid gap-4 grid-cols-4 md:grid-cols-6 xl:grid-cols-8 m-3">
                     {skills.map((item, index) => (
                        <div key={index} className="shadow-md rounded-2xl bg-white dark:bg-gray-800 p-4 h-30 w-30">
                            <div className="flex-col flex justify-center items-center">
                                <div className="flex-shrink-0">
                                    <img alt="profile" src={item.image} className="mx-auto object-cover rounded-full h-14 w-14" />
                                </div>
                                <div className="mt-2 text-center flex flex-col">
                                <span className="text-lg font-medium text-gray-600 dark:text-white">
                                    {item.skillName}
                                </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default SkillList;