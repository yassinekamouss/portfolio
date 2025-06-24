import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocaMaison from "../../assets/LocaMaison.png";
import phpPlanFlow from "../../assets/phpPlanFlow.png";
import preinscription from "../../assets/preinscription.png";
import sortingvisualizer from "../../assets/sortingvisualizer.png";
import Bag from "../../assets/Bag.png";
import MatheMagiqueMobile from "../../assets/mathemagique_mobile.jpg";
import GameDashboard from "../../assets/admin_dashboard.png";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFilter,
  FaReact,
  FaLaravel,
  FaPhp,
  FaDatabase,
  FaCss3,
  FaMobile,
  FaDesktop,
  FaServer,
  FaCode,
  FaEye,
  FaEyeSlash,
  FaAngular,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiSymfony,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiStripe,
  SiVite,
  SiTypescript,
} from "react-icons/si";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  // Mapping des technologies vers leurs icônes
  const techIcons = {
    React: SiReact,
    "React Native": FaMobile,
    Tailwind: SiTailwindcss,
    "Tailwind CSS": SiTailwindcss,
    MySQL: SiMysql,
    Symfony: SiSymfony,
    Bootstrap: SiBootstrap,
    Php: FaPhp,
    JavaScript: SiJavascript,
    Laravel: FaLaravel,
    Stripe: SiStripe,
    Firebase: SiFirebase,
    Vite: SiVite,
    Angular: FaAngular,
    Css: FaCss3,
    Typescript: SiTypescript,
    "Alpine.js": FaCode,
    "React Navigation": FaMobile,
    "Firebase Authentication": SiFirebase,
    "Firebse Realtime Database": SiMysql,
  };

  const projects = [
    {
      id: 1,
      title: "Game Dashboard – Suivi Pédagogique Interactif",
      category: "fullstack",
      image: GameDashboard,
      description:
        "Game Dashboard est une plateforme web interactive conçue pour le suivi pédagogique des étudiants sous forme de gamification. Elle permet aux enseignants de gérer les cours, de suivre les progrès des élèves, et d'afficher des statistiques dynamiques à travers une interface utilisateur moderne.",
      technologies: ["Angular", "Css", "Firebase", "Typescript"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/game-dashboard.git",
      features: [
        "Authentification des utilisateurs (étudiants et enseignants)",
        "Tableau de bord personnalisé",
        "Gestion des classes et groupes",
        "Suivi des performances",
        "Rapports et statistiques",
      ],
    },
    {
      id: 2,
      title: "Plateforme de Location de Maisons en Ligne",
      category: "fullstack",
      image: LocaMaison,
      description:
        "Projet permettant aux utilisateurs de publier et rechercher des maisons à louer avec un système de gestion complet incluant authentification, recherche avancée et gestion des réservations.",
      technologies: ["React", "Tailwind", "MySQL", "Symfony"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/LocaMaison",
      features: [
        "Authentification utilisateur",
        "Recherche avancée",
        "Gestion des réservations",
        "Interface responsive",
      ],
    },
    {
      id: 3,
      title: "Plateforme de Vente de Pièces Automobiles",
      category: "fullstack",
      image: Bag,
      description:
        "Application web permettant aux utilisateurs de rechercher, filtrer et acheter des pièces automobiles en ligne avec un système de gestion des commandes et des paiements sécurisés.",
      technologies: ["Laravel", "JavaScript", "Stripe", "Bootstrap"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/BAG-app.git",
      features: [
        "Catalogue de produits",
        "Paiements sécurisés",
        "Gestion des commandes",
        "Système de recherche",
      ],
    },
    {
      id: 4,
      title: "Plateforme de Candidature en Ligne",
      category: "fullstack",
      image: preinscription,
      description:
        "Application web permet aux étudiants de postuler aux différentes formations (Licence, Master, Cycle d'Ingénieur) avec un système de suivi des candidatures.",
      technologies: ["Bootstrap", "Php", "MySQL", "JavaScript"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/Fstt-candidature.git",
      features: [
        "Gestion des candidatures",
        "Validation des documents",
        "Suivi des statuts",
        "Interface administrative",
      ],
    },
    {
      id: 5,
      title: "Application web de gestion de projet",
      category: "fullstack",
      image: phpPlanFlow,
      description:
        "Projet Conçu pour aider les équipes à organiser, suivre et collaborer efficacement sur des projets avec des outils de gestion avancés.",
      technologies: ["Alpine.js", "Php", "MySQL", "Tailwind CSS"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/phpPlanFlow.git",
      features: [
        "Gestion des tâches",
        "Collaboration en temps réel",
        "Tableaux Kanban",
        "Rapports et statistiques",
      ],
    },
    {
      id: 6,
      title: "Visualisation interactive des algorithmes de tri",
      category: "frontend",
      image: sortingvisualizer,
      description:
        "Une application interactive permettant de visualiser et comparer différents algorithmes de tri en temps réel avec des animations fluides.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      demoLink: "https://sorting-visualizer-37e32b.netlify.app/",
      codeLink: "https://github.com/yassinekamouss/SortingVisualize.git",
      features: [
        "Visualisation en temps réel",
        "Comparaison d'algorithmes",
        "Contrôles interactifs",
        "Animations fluides",
      ],
    },
    {
      id: 7,
      title: "Application mobile de suivi parental",
      category: "mobile",
      image: MatheMagiqueMobile,
      description:
        "Application mobile développée avec React Native (CLI) et Firebase pour permettre aux parents de suivre les progrès et activités de leurs enfants.",
      technologies: [
        "React Native",
        "React Navigation",
        "Firebase Authentication",
        "Firebse Realtime Database",
      ],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/EspaceParental.git",
      features: [
        "Suivi des progrès",
        "Notifications push",
        "Interface intuitive",
        "Synchronisation cloud",
      ],
    },
  ];

  const filters = [
    { id: "all", label: "Tous les projets", icon: FaCode },
    { id: "fullstack", label: "Full Stack", icon: FaServer },
    { id: "frontend", label: "Frontend", icon: FaDesktop },
    { id: "mobile", label: "Mobile", icon: FaMobile },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const toggleExpanded = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section
      id="projets"
      className="py-16 sm:py-20 bg-secondary font-sans relative overflow-hidden project-section-compact">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-primary/5 -top-20 -right-20 blur-3xl"></div>
        <div className="absolute w-80 h-80 rounded-full bg-primary/10 bottom-10 left-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Découvrez une sélection de mes projets récents. Chaque projet
            représente un défi unique que j'ai relevé en utilisant différentes
            technologies et approches.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 filter-button ${
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}>
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{filter.label}</span>
                <span className="sm:hidden">{filter.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grille de projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 project-grid-compact"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProject === project.id;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 project-card project-card-compact"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}>
                  {/* Image du projet avec aspect ratio fixe */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 project-card-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-60"></div>

                    {/* Badge de catégorie */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm ${
                          project.category === "fullstack"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : project.category === "frontend"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}>
                        {project.category === "fullstack"
                          ? "Full Stack"
                          : project.category === "frontend"
                          ? "Frontend"
                          : "Mobile"}
                      </span>
                    </div>

                    {/* Overlay avec informations au hover */}
                    <div
                      className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}>
                      <div className="text-center p-4">
                        <h3 className="text-white font-bold text-base mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-xs mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => {
                              const TechIcon = techIcons[tech] || FaCode;
                              return (
                                <span
                                  key={index}
                                  className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                  <TechIcon className="w-2 h-2" />
                                  {tech}
                                </span>
                              );
                            })}
                          {project.technologies.length > 3 && (
                            <span className="text-gray-400 text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>

                    <p
                      className={`text-gray-300 text-xs sm:text-sm mb-3 transition-all duration-300 ${
                        isExpanded ? "line-clamp-none" : "line-clamp-2"
                      }`}>
                      {project.description}
                    </p>

                    {/* Bouton pour étendre/réduire la description */}
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className="flex items-center gap-1 text-primary text-xs sm:text-sm font-medium mb-3 hover:text-primary/80 transition-colors duration-300">
                      {isExpanded ? (
                        <>
                          <FaEyeSlash className="w-3 h-3" />
                          Voir moins
                        </>
                      ) : (
                        <>
                          <FaEye className="w-3 h-3" />
                          Voir plus
                        </>
                      )}
                    </button>

                    {/* Fonctionnalités (visible seulement si étendu) */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-3">
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">
                          Fonctionnalités principales :
                        </h4>
                        <ul className="space-y-1">
                          {project.features?.map((feature, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-xs flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Technologies avec icônes */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, index) => {
                        const TechIcon = techIcons[tech] || FaCode;
                        return (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary text-xs px-2 py-1.5 rounded-md border border-primary/20 flex items-center gap-1.5 hover:bg-primary/20 transition-colors duration-300 tech-badge">
                            <TechIcon className="w-2.5 h-2.5" />
                            <span className="hidden sm:inline">{tech}</span>
                            <span className="sm:hidden">
                              {tech.split(" ")[0]}
                            </span>
                          </span>
                        );
                      })}
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex gap-2">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-medium py-2 px-3 rounded-md transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20">
                          <FaExternalLinkAlt className="w-2.5 h-2.5" />
                          <span className="hidden sm:inline">Démo</span>
                          <span className="sm:hidden">Live</span>
                        </a>
                      )}
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm font-medium py-2 px-3 rounded-md transition-all duration-300 hover:scale-105">
                        <FaGithub className="w-2.5 h-2.5" />
                        <span className="hidden sm:inline">Code</span>
                        <span className="sm:hidden">Repo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Message si aucun projet trouvé */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <p className="text-gray-400 text-lg">
              Aucun projet trouvé pour cette catégorie.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
