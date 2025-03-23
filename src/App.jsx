import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import { useScrollAnimation } from "./components/ui/Animation";
import { FaCode, FaExternalLinkAlt, FaTools, FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
  // Activer les animations au défilement
  useScrollAnimation();
  return (
    <div className="min-h-screen bg-main text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
