import React, {useState} from 'react';
import Lightbox from "react-image-lightbox";
import ProjectList from "./ProjectList";

function Projects() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FFDA05] p-4">
            <ProjectList></ProjectList>
        </div>
    );
}

export default Projects;