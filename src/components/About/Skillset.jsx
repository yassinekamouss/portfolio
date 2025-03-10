import { FaJs, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiDocker, SiOracle, SiRedux, SiExpress, SiGit, SiVite, SiAngular, SiSymfony, SiLaravel, SiTypescript, SiSpringboot, SiFastapi } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    { id: 3, icon: <FaJs className="w-16 h-16 text-yellow-400" /> },
    { id: 4, icon: <FaReact className="w-16 h-16 text-blue-400" /> },
    { id: 5, icon: <FaNodeJs className="w-16 h-16 text-green-500" /> },
    { id: 6, icon: <FaPython className="w-16 h-16 text-yellow-400" /> },
    { id: 7, icon: <FaJava className="w-16 h-16 text-orange-500" /> },
    { id: 8, icon: <SiTailwindcss className="w-16 h-16 text-teal-400" /> },
    { id: 9, icon: <SiTypescript className="w-16 h-16 text-blue-600" /> },
    { id: 10, icon: <SiAngular className="w-16 h-16 text-red-600" /> },
    { id: 11, icon: <SiSymfony className="w-16 h-16 text-black" /> },
    { id: 12, icon: <SiLaravel className="w-16 h-16 text-red-600" /> },
    { id: 13, icon: <SiSpringboot className="w-16 h-16 text-green-600" /> },
    { id: 14, icon: <SiFastapi className="w-16 h-16 text-green-400" /> },
    { id: 15, icon: <SiMongodb className="w-16 h-16 text-green-400" /> },
    { id: 16, icon: <SiOracle className="w-16 h-16 text-red-600" /> },
    { id: 17, icon: <SiMysql className="w-16 h-16 text-orange-400" /> },
    { id: 18, icon: <SiRedux className="w-16 h-16 text-purple-600" /> },
    { id: 19, icon: <SiGit className="w-16 h-16 text-orange-500" /> },
    { id: 20, icon: <SiExpress className="w-16 h-16 text-black" /> },
    { id: 21, icon: <SiVite className="w-16 h-16 text-yellow-400" /> },
    { id: 22, icon: <SiDocker className="w-16 h-16 text-blue-500" /> },
];

export default function Skillset(){
    
    return (
        <div className="w-4/5 mx-auto p-4 mt-12 font-sans text-white">
            <div className="mt-12 px-4 py-6 md:px-16">
                <div className="text-4xl font-bold text-center">
                    <span className="shadow-sm bg-clip-text">
                    Technological <span className="text-primary">Expertise</span>  
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center w-3/5 mx-auto pb-24">
                    {skills.map(skill => (
                        <motion.div 
                            key={skill.id} 
                            className="flex items-center justify-center rounded-lg mt-6"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{
                                opacity: 1, 
                                y: 50,
                                transition: { duration: 1 }
                            }}
                            viewport={{ once: false }}
                            >
                            <div className="bg-main p-2 rounded-lg w-24 h-24 flex items-center justify-center shadow-lg shadow-primary">
                                {skill.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}