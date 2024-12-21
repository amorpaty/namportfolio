import React from "react";
import { motion } from 'framer-motion';
import {projects} from "../datas/Projects";
import {sideProjects} from "../datas/SideProjects";
import ProjectItem from "./ProjectItem";

function ProjectList(){
    return (
        <>
            <motion.div
                className="p-12 m-4 mt-20 bg-white rounded-2xl"
                initial={{ opacity: 0, y: 20 }} // 시작 상태
                animate={{ opacity: 1, y: 0 }}  // 애니메이션 완료 상태
                transition={{ duration: 0.8, ease: "easeOut" }} // 애니메이션 속도 및 방식
            >
                <div className="flex items-end justify-between mb-8 header">
                    <div className="title">
                        <p className="mb-4 text-4xl font-bold text-gray-800">
                            Projects
                        </p>
                    </div>
                </div>
                <ProjectItem projects={projects}></ProjectItem>
                <div className="flex items-end justify-between mb-8 header">
                    <div className="title">
                        <p className="mb-4 text-4xl font-bold text-gray-800">
                            Side-Project
                        </p>
                    </div>
                </div>
                <ProjectItem projects={sideProjects}></ProjectItem>
            </motion.div>
        </>
    );
};

export default ProjectList;