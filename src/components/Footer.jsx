import { FaGithub,  FaLinkedinIn  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SocialsContext } from "../App";
import { useContext } from "react";

export default function Footer() {
    
    const socials = useContext(SocialsContext);

    return (
        <footer className="bg-secondary p-4 w-full font-sans">
            <div className="flex flex-col md:flex-row w-4/5 mx-auto justify-between items-center">
                <div className="text-white text-center">
                    Designed & Developed by Yassine Kamouss
                </div>
                <div className="text-white text-center md:ms-[-100px]">
                Copyright &copy; {new Date().getFullYear()}
                </div>
                <div className="flex space-x-4">
                    {socials.map(social => (
                        <a key={social.id} href={social.link} target="_blank" className="text-white hover:text-primary hover:shadow-lg hover:shadow-primary transition-all duration-300">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}