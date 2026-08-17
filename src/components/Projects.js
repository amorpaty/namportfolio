import React, {useState} from 'react';
import ProjectList from "./ProjectList";
import SkillList from "./SkillList";

function Projects() {
    return (
        <div className="flex grid justify-center items-center min-h-screen bg-[#FFDA05] p-4">
            <ProjectList></ProjectList>
            <SkillList></SkillList>
        </div>
    );
}

export default Projects;