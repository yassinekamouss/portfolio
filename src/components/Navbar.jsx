import { Link } from "react-router-dom";
import { CiHome, CiUser } from "react-icons/ci";
import { PiReadCvLogo } from "react-icons/pi";
import { TbMessage2Code } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-sm font-sans fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 flex justify-center p-4">
      <div className="w-4/5 flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src=""
            className="h-8"
            alt="My logo"
          /> */}
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            Y.Kamouss
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-xl rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li className="relative group py-2">
                    <div className="flex items-center text-white">
                        <CiHome />
                        <Link to="/" className="text-white ms-1">
                            Home
                        </Link>
                    </div>
                    <span className="absolute h-1 w-0 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group py-2">
                    <div className="flex items-center text-white">
                        <CiUser />
                        <Link to="/about" className="text-white ms-1">
                            About
                        </Link>
                    </div>
                    <span className="absolute h-1 w-0 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group py-2">
                    <div className="flex items-center text-white">
                      <AiOutlineFundProjectionScreen />
                        <Link to="/projects" className="text-white ms-1">
                            Projects
                        </Link>
                    </div>
                    <span className="absolute h-1 w-0 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group py-2">
                    <div className="flex items-center text-white">
                        <PiReadCvLogo />
                        <Link to="/resume" className="text-white ms-1">
                            Resume
                        </Link>
                    </div>
                    <span className="absolute h-1 w-0 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group py-2">
                    <div className="flex items-center text-white">
                        <TbMessage2Code />
                        <Link to="/contact" className="text-white ms-1">
                            Contact
                        </Link>
                    </div>
                    <span className="absolute h-1 w-0 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
