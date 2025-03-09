import { FaGithub,  FaLinkedinIn  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Findme() {

    return (
        <div className="w-4/5 mx-auto p-4 mt-24 font-sans text-white">
            <div className="mt-12 px-4 py-6 md:px-16">
                <div className="text-4xl font-bold text-center">
                    <span className="shadow-sm bg-clip-text">
                        WHERE <span className="text-primary">TO</span> FIND <span className="text-primary">ME</span>
                    </span>
                </div>
            </div>
            <div className="flex space-x-6 mt-12 justify-center items-center pb-12">
                <a href="https://github.com/yassinekamouss/yassinekamouss" className="text-white">
                    <div className="w-12 h-12 bg-white p-3 flex justify-center items-center rounded-full  hover:text-primary hover:shadow-xl hover:shadow-primary transition-all duration-300">
                        <FaGithub className="w-16 h-16 text-primary"/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/yassine-kamouss-a69599331/" className="text-white">
                    <div className="w-12 h-12 bg-white p-3 flex justify-center items-center rounded-full  hover:text-primary hover:shadow-xl hover:shadow-primary transition-all duration-300">
                        <FaLinkedinIn className="w-16 h-16 text-primary" />
                    </div>
                </a>
                <a href="https://leetcode.com/u/yassinekamouss/" className="text-white">
                    <div className="w-12 h-12 bg-white p-3 flex justify-center items-center rounded-full  hover:text-primary hover:shadow-xl hover:shadow-primary transition-all duration-300">
                        <SiLeetcode className="w-12 h-12 text-primary" />
                    </div>
                </a>
                <a href="https://x.com/YKamouss17826" className="text-white">
                    <div className="w-12 h-12 bg-white p-3 flex justify-center items-center rounded-full  hover:text-primary hover:shadow-xl hover:shadow-primary transition-all duration-300">
                        <FaXTwitter className="w-16 h-16 text-primary" />
                    </div>
                </a>
            </div>
        </div>
    );
}