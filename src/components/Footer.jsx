import { FaGithub,  FaLinkedinIn  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

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
                    <a href="https://github.com/yassinekamouss/yassinekamouss" target="_blank" className="text-white hover:text-primary hover:shadow-lg hover:shadow-primary transition-all duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/yassine-kamouss-a69599331/" target="_blank" className="text-white hover:text-primary hover:shadow-lg hover:shadow-primary transition-all duration-300">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://leetcode.com/u/yassinekamouss/" target="_blank" className="text-white hover:text-primary hover:shadow-lg hover:shadow-primary transition-all duration-300">
                        <SiLeetcode />
                    </a>
                    <a href="https://x.com/YKamouss17826" target="_blank" className="text-white hover:text-primary hover:shadow-lg hover:shadow-primary transition-all duration-300">
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </footer>
    )
}