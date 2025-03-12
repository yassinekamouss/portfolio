import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Avatar from "../../assets/screenshot.png";

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center justify-between my-8 ${
        isEven ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      {/* Card Container */}
      <motion.div
        className="w-full max-w-md bg-secondary p-4 rounded-lg relative overflow-hidden transition-all duration-300"
        
      >
        {/* Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Card Content */}
        <div className="relative z-10">
          {/* Image */}
          <div className="w-full h-[16rem] mx-auto mb-4 overflow-hidden">
            <img
              src={Avatar}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Title and Category */}
          <div className="text-center">
            <div className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-1">
              {project.category}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-[rgba(255,255,255,0.8)] text-sm mb-4 line-clamp-2">
              {project.desc}
            </p>
          </div>

          {/* See More Button */}
          <div className="text-center">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-1.5 flex space-x-3 text-sm text-white bg-main hover:bg-primary/40 rounded-full transition-colors duration-300 border border-primary/30"
            >
                <FaGithub className=""/>
                <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}