import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const projects = [
        // {
        //   title: "",
        //   category: "",
        //   desc: "",
        //   image: "",
        //   technologies: [],
        //   sourceLink: "",
        //   liveLink: "",
        // },
    ];
    
    return (
        <div className="min-h-screen bg-main-gradient text-white pt-24 pb-24 font-sans">
            <div className="max-w-6xl mx-auto px-6 relative">
                <ParticlesBackground /> 
                <h2 className="text-5xl font-bold text-center mt-12">
                My Recent <span className="text-primary">Works</span>
                </h2>
                <p 
                className="text-xl text-center mb-12 mt-8 text-white/80 italic tracking-wide leading-relaxed max-w-2xl mx-auto relative"
                >
                <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent me-2">
                    Step into my world of innovation!
                </span>  
                Let’s explore the projects that shape my journey.
                </p>
                <div className="relative">
                    {/* Timeline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
