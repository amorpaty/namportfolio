import React from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectDetailModal({ project, onClose }) {

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.dept}</p>
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}

export default ProjectDetailModal;
