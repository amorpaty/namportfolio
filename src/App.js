import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
    return (
        <Router>
            <Header /> {/* 헤더를 항상 표시하려면 여기 추가 */}
            <Routes>
                <Route path="/namportfolio.github.io/aboutMe" element={<AboutMe />} />
                <Route path="/namportfolio.github.io/resume" element={<Resume />} />
                <Route path="/namportfolio.github.io/projects" element={<Projects />} />

                <Route path="*" element={<AboutMe />} />
                {/*<Route path="/resume" element={<Resume />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
