import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="/namportfolio">
            {/* Header는 항상 표시 */}
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/aboutMe" element={<AboutMe />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={<AboutMe />} />
                </Routes>
            </div>
            {/* Footer는 항상 표시 */}
            <Footer />
        </Router>
    );
}

export default App;
