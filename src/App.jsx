import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
