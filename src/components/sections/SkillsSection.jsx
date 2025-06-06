import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaSymfony,
  FaAngular,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiJquery,
  SiGraphql,
  SiTypescript,
  SiFastapi,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    {
      name: "Postgresql",
      icon: <BiLogoPostgresql className="text-blue-400" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-300" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Angular", icon: <FaAngular className="text-red-500" /> },
    { name: "FastApi", icon: <SiFastapi className="text-green-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-400" /> },
    { name: "Symfony", icon: <FaSymfony className="text-black" /> },
    { name: "Jquery", icon: <SiJquery className="text-blue-400" /> },
  ];

  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const updateSliderWidth = () => {
      const container = document.querySelector(".skills-slider");
      if (container) {
        setSliderWidth(container.scrollWidth / 2);
      }
    };

    updateSliderWidth();
    window.addEventListener("resize", updateSliderWidth);
    return () => window.removeEventListener("resize", updateSliderWidth);
  }, []);

  return (
    <section
      id="compétences"
      className="py-20 bg-main font-sans text-gray-300 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mes Compétences
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            En tant que développeur full stack, je maîtrise un large éventail de
            technologies et d'outils pour créer des applications web complètes
            et performantes.
          </p>
        </div>

        {/* Défilement infini avec fondu aux extrémités */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-main via-transparent to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-main via-transparent to-transparent z-10"></div>

          <motion.div
            className="flex items-center space-x-6 md:space-x-10 skills-slider"
            animate={{
              x: [-sliderWidth, 0],
            }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}>
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white text-lg min-w-[60px] md:min-w-[100px]">
                <div className="text-3xl md:text-4xl bg-secondary p-2 md:p-5 rounded-full shadow-primary shadow-md">
                  {skill.icon}
                </div>
                <span className="mt-2 text-xs md:text-sm">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
