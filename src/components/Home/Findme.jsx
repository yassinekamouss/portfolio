import { FaGithub,  FaLinkedinIn  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SocialsContext } from "../../App";
import { React, useContext } from "react";


export default function Findme() {

    const socials = useContext(SocialsContext);
    
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-4/5 mx-auto p-4 mt-24 font-sans text-white">
            <div className="mt-12 px-4 py-6 md:px-16">
                <div className="text-4xl font-bold text-center">
                    <span className="shadow-sm bg-clip-text">
                        WHERE <span className="text-primary">TO</span> FIND <span className="text-primary">ME</span>
                    </span>
                </div>
            </div>
            <div className="flex space-x-6 mt-12 justify-center items-center pb-12">
                {socials.map(social => (
                    <a key={social.id} href={social.link} className="text-white">
                        <div className="w-12 h-12 text-2xl text-primary bg-white p-3 flex justify-center items-center rounded-full  hover:text-primary hover:shadow-xl hover:shadow-primary transition-all duration-300">
                        {social.icon}
                        </div>
                    </a>
                ))}
            </div>
        </motion.div>
    );
}