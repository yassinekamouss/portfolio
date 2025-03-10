import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaGithub,  FaLinkedinIn  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const SocialsContext = createContext([]);
const socials = [
  { id: 1, icon: <FaGithub />, link: "https://github.com/yassinekamouss/yassinekamouss/"},
  { id: 2, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/yassine-kamouss-a69599331/"},
  { id: 3, icon: <SiLeetcode />, link: "https://leetcode.com/u/yassinekamouss/"},
  { id: 4, icon: <FaXTwitter />, link: "https://x.com/YKamouss17826/"},
];

function App() {
  return (
    <div className="">
      <SocialsContext.Provider value={socials}>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </SocialsContext.Provider>
    </div>
  );
}

export default App;
