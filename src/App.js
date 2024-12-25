import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="/namportfolio" >
            <Header /> {/* 헤더를 항상 표시하려면 여기 추가 */}
            <Routes>
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                {/*<Route path="/contact" element={<Contact />} />*/}
                <Route path="/" element={<AboutMe />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
