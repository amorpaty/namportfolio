import React from "react";

function ProjectItem({projects}){
    return (
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 mb-20">
            {projects && projects.map((item, index) => (
                <div className="m-auto overflow-hidden rounded-lg shadow-md cursor-pointer h-90 w-full md:w-full">
                    <a href="#" className="block w-full h-full">
                        <img alt="blog photo" src={item.image} className="object-cover w-full max-h-40"/>
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                {item.title}
                            </p>
                            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                {item.dates}
                            </p>
                            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                {item.dept}
                            </p>
                            <p className="font-bold text-indigo-500 text-md">
                                {item.result}
                            </p>
                            <div className="flex flex-wrap items-center mt-4 justify-starts">
                                <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                    #Car
                                </div>
                                <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                    #Money
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectItem;