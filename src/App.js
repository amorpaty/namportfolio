import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Main from "./components/Main";
import Layout from "./components/Layout";

function App() {
    return (
        <Router basename="/namportfolio">
            <Routes>
                {/* Main은 독립적으로 렌더링 */}
                <Route path="/" element={<Main />} />

                {/* 공통 레이아웃에 묶인 페이지 */}
                <Route element={<Layout />}>
                    <Route path="aboutMe" element={<AboutMe />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="projects/skills" element={<Projects />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
