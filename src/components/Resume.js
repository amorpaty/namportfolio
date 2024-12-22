import React from 'react';
import { motion } from 'framer-motion';

import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";

function Resume() {
    return (
        <motion.div
            className="flex justify-center items-center min-h-screen bg-[#FFDA05] p-4"
            initial={{ opacity: 0, y: 20 }} // 시작 상태
            animate={{ opacity: 1, y: 0 }}  // 애니메이션 완료 상태
            transition={{ duration: 0.8, ease: "easeOut" }} // 애니메이션 속도 및 방식
        >
            <section className="min-h-screen p-6 md:p-12">
                {/* Header */}
                <div className="text-center mb-8 mt-16 mb-16">
                    <h2 className="text-4xl font-bold flex justify-center items-center">
                        <span className="bg-blue-600 w-4 h-4 mr-2 inline-block"></span>
                        Resume
                    </h2>
                </div>
                <ExperienceItem></ExperienceItem>
                <EducationItem></EducationItem>
                <CertificationItem></CertificationItem>
            </section>
        </motion.div>
    );
}

export default Resume;