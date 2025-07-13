import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { projects } from "../datas/Projects";
import { sideProjects } from "../datas/SideProjects";
import ProjectItem from "./ProjectItem";
import ProjectDetailModal from "./ProjectDetailModal";
import { useLocation, useNavigate } from "react-router-dom";

function ProjectList() {

    const location = useLocation(); // 전달받은 state 접근
    const selectProject = location.state?.project; // 전달받은 프로젝트 데이터

    const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

    // useEffect로 selectProject 값이 있을 때 모달을 열기
    useEffect(() => {
        if (selectProject) {
            // 프로젝트가 `projects` 또는 `sideProjects`에 있는지 확인
            const projectList = projects.filter((s) => s.title === selectProject.title);
            const sideProjectList = sideProjects.filter((s) => s.title === selectProject.title);

            if (projectList.length > 0 || sideProjectList.length > 0) {
                const project = projectList.length > 0 ? projectList[0] : sideProjectList[0];
                setSelectedProject(project);
                setIsModalOpen(true);
            }
        }
    }, [selectProject]);

    // 프로젝트 클릭 핸들러
    const handleProjectClick = (project) => {
        setSelectedProject(project); // 선택된 프로젝트 설정
        setIsModalOpen(true); // 모달 열기
    };

    // 모달 닫기 핸들러
    const closeModal = () => {
        setSelectedProject(null); // 선택된 프로젝트 초기화
        setIsModalOpen(false); // 모달 닫기
    };

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
                <ProjectItem projects={projects} onProjectClick={handleProjectClick} ></ProjectItem>
                <div className="flex items-end justify-between mb-8 header">
                    <div className="title">
                        <p className="mb-4 text-4xl font-bold text-gray-800">
                            Side-Project
                        </p>
                    </div>
                </div>
                <ProjectItem projects={sideProjects} onProjectClick={handleProjectClick} ></ProjectItem>
            </motion.div>

            {/* 모달 컴포넌트 */}
            {isModalOpen && (
                <ProjectDetailModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );
};

export default ProjectList;