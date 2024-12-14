import React from "react";
import {projects} from "../datas/Projects";
import ProjectItem from "./ProjectItem";

function ProjectList(){
    return (
        <div className="p-12 m-4 mt-20 bg-white rounded-2xl">
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
            <ProjectItem></ProjectItem>
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                {/*<ProjectItem></ProjectItem>*/}
                {/*<ProjectItem></ProjectItem>*/}
                {/*<ProjectItem></ProjectItem>*/}
                {/*<ProjectItem></ProjectItem>*/}
                {/*<ProjectItem></ProjectItem>*/}
            </div>
        </div>
    );
};

export default ProjectList;