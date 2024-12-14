import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(){
    return (
        <div className="p-12 m-4 bg-white rounded-2xl">
            <div className="flex items-end justify-between mb-8 header">
                <div className="title">
                    <p className="mb-4 text-4xl font-bold text-gray-800">
                        Projects
                    </p>
                </div>
            </div>
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 mb-20">
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
            </div>
            <div className="flex items-end justify-between mb-8 header">
                <div className="title">
                    <p className="mb-4 text-4xl font-bold text-gray-800">
                        Side-Project
                    </p>
                </div>
            </div>
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
            </div>
        </div>
    );
};

export default ProjectList;