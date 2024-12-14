import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
    return (
        <Router basename="/namportfolio.github.io">
            <Header /> {/* 헤더를 항상 표시하려면 여기 추가 */}
            <Routes>
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Projects" element={<Projects />} />
                {/*<Route path="/" element={<AboutMe />} />*/}
                {/*<Route path="/resume" element={<Resume />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
