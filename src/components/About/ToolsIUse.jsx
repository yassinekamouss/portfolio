import { motion } from "framer-motion";
import { FaUbuntu , FaFigma, FaGithub } from "react-icons/fa";
import { SiPostman, SiIntellijidea, SiUml } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools= [
    {
        id: 1,
        icon: <SiPostman className="w-16 h-16 text-primary" />,
    },
    {
        id: 2,
        icon: <VscVscode className="w-16 h-16 text-primary" />,
    },
    {
        id: 3,
        icon: <SiIntellijidea className="w-16 h-16 text-primary" />,
    },
    {
        id: 4,
        icon: <FaUbuntu  className="w-16 h-16 text-primary" />,
    },
    {
        id: 5,
        icon: <FaFigma  className="w-16 h-16 text-primary" />,
    },
    {
        id: 6,
        icon: <FaGithub  className="w-16 h-16 text-primary" />,
    },
    {
        id: 7,
        icon: <SiUml   className="w-16 h-16 text-primary" />,
    },
]

export default function ToolsIUse() {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="w-4/5 mx-auto p-4 mt-12 font-sans text-white"
        >
            <div className="mt-12 px-4 py-6 md:px-16">
                <div className="text-4xl font-bold text-center">
                    <span className="shadow-sm bg-clip-text">
                        Tools I <span className="text-primary">Use</span>
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-12 space-x-6 pb-16">
                {tools.map(tool => (
                    <div key={tool.id} className="flex flex-col items-center text-center">
                        {tool.icon}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
