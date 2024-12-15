import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-8 border-t">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm">&copy; 2024 by Nam Eun Ju.</p>
                    <p className="text-sm">
                        Powered and secured by Github
                    </p>
                </div>
                <div className="text-center ml-auto">
                    <div className="font-semibold">Write</div>
                    <p className="text-gray-600 hover:text-blue-500">ehdrmfkal0624@naver.com</p>
                </div>

                <div className="flex space-x-4">
                    <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-500">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-500">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-500">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
