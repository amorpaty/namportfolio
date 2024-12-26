import React from "react";
import { motion } from 'framer-motion';
import { skills } from "../datas/Skills.js";

function SkillList(){
    return (
        <motion.div
            className="p-8 m-4  bg-white rounded-2xl"
            initial={{ opacity: 0, y: 20 }} // 시작 상태
            animate={{ opacity: 1, y: 0 }}  // 애니메이션 완료 상태
            transition={{ duration: 0.8, ease: "easeOut" }} // 애니메이션 속도 및 방식
        >
            <div className="flex items-end justify-between mb-8 header">
                <div className="title">
                    <p className="mb-4 text-4xl font-bold text-gray-800">
                        Skills
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-lg md:p-4 mx-auto">

                <div className="grid gap-4 grid-cols-4 md:grid-cols-6 xl:grid-cols-12 m-3">
                     {skills.map((item, index) => (
                        <motion.div key={index}
                            className="shadow-md rounded-2xl bg-white dark:bg-gray-800 p-4 h-30 w-30"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring" }}
                        >
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
};

export default SkillList;