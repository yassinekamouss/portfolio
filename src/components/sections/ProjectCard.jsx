import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ProjectCard = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);

  const handleNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const filteredProjects = projects || [];
  const currentProject = filteredProjects[activeProject];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16">
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {/* Aperçu principal avec taille fixe */}
          <div className="lg:col-span-2 max-h-[38rem] bg-gradient-to-b from-primary/10 via-secondary to-main backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 transform transition-all duration-500 shadow-2xl">
            {/* Hauteur fixe pour l'image */}
            <div className="relative h-72 md:h-96 overflow-hidden">
              {currentProject.image && (
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full transition-transform duration-700 hover:scale-110"
                />
              )}

              {/* Overlay avec gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-70"></div>

              {/* Titre sur l'image */}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {currentProject.title}
                </h3>
                {/* Badges technos en bas de l'image */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full backdrop-blur-sm
                                border border-primary/30 flex items-center gap-1 shadow-glow">
                      <FaCode className="text-xs" /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description et boutons avec hauteur fixe */}
            <div className="p-6 h-48 overflow-y-auto">
              <p className="text-gray-300 mb-8 leading-relaxed">
                {currentProject.description}
              </p>

              <div className="flex items-center gap-4">
                {currentProject.demoLink && (
                  <a
                    href={currentProject.demoLink}
                    className="flex items-center gap-2 text-white font-medium
                             bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full
                             transition-all duration-300 shadow-lg hover:shadow-primary/20
                             hover:translate-y-1">
                    <FaExternalLinkAlt /> Voir la démo
                  </a>
                )}

                <a
                  href={currentProject.codeLink}
                  className="flex items-center gap-2 text-white font-medium
                           bg-gray-800 border border-gray-700 px-6 py-3 rounded-full
                           transition-all duration-300 hover:bg-gray-700">
                  <FaGithub /> Voir le code
                </a>
              </div>
            </div>
          </div>

          {/* Miniatures projets à droite avec hauteur fixe et défilement */}
          <div
            className="relative max-h-[38rem] flex lg:flex-col gap-4 overflow-x-auto 
                        lg:overflow-y-auto pb-4 lg:pb-2 pr-1 custom-scrollbar">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 lg:flex-shrink-0 cursor-pointer relative rounded-xl overflow-hidden
                          border-2 transition-all duration-300 
                          ${
                            activeProject === index
                              ? "border-primary shadow-lg shadow-primary/20"
                              : "border-gray-800 opacity-50 hover:opacity-80"
                          }
                         `}>
                <div className="w-64 lg:w-full h-32 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3">
                    <h4 className="text-sm font-medium text-white truncate">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies
                        ?.slice(0, 2)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      {project.technologies?.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center mt-10 gap-8">
        <button
          onClick={handlePrev}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all">
          <FaChevronLeft />
        </button>

        <div className="flex gap-2 overflow-x-auto pb-2 max-w-md">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProject(idx)}
              className={`w-3 h-3 rounded-full transition-all flex-shrink-0
                        ${
                          activeProject === idx
                            ? "bg-primary w-8"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
              aria-label={`Voir projet ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all">
          <FaChevronRight />
        </button>
      </div>

      {/* Ajout d'un élément décoratif */}
      <div
        className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default ProjectCard;
