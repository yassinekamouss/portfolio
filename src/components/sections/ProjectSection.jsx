import LocaMaison from "../../assets/LocaMaison.png";
import phpPlanFlow from "../../assets/phpPlanFlow.png";
import preinscription from "../../assets/preinscription.png";
import sortingvisualizer from "../../assets/sortingvisualizer.png";
import Bag from "../../assets/Bag.png";
import MatheMagiqueMobile from "../../assets/mathemagique_mobile.jpg";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme de Location de Maisons en Ligne",
      category: "fullstack",
      image: LocaMaison,
      description:
        "Projet permettant aux utilisateurs de publier et rechercher des maisons à louer",
      technologies: ["React", "Tailwind", "MySQL", "Symfony"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/LocaMaison",
    },
    {
      id: 2,
      title: "Application web de gestion de projet",
      category: "fullstack",
      image: phpPlanFlow,
      description:
        "Projet Conçu pour aider les équipes à organiser, suivre et collaborer efficacement sur des projets.",
      technologies: ["Alpine.js", "Php", "MySQL", "Tailwind CSS"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/phpPlanFlow.git",
    },
    {
      id: 3,
      title: "Plateforme de Candidature en Ligne",
      category: "fullstack",
      image: preinscription,
      description:
        "Application web permet aux étudiants de postuler aux différentes formations (Licence, Master, Cycle d'Ingénieur)",
      technologies: ["Bootstrap", "Php", "MySQL", "JavaScript"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/Fstt-candidature.git",
    },
    {
      id: 4,
      title: "Visualisation interactive des algorithmes de tri",
      category: "frontend",
      image: sortingvisualizer,
      description:
        "Une application interactive permettant de visualiser et comparer différents algorithmes de tri en temps réel.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      demoLink: "https://sorting-visualizer-37e32b.netlify.app/",
      codeLink: "https://github.com/yassinekamouss/SortingVisualize.git",
    },
    {
      id: 5,
      title: "Plateforme de Vente de Pièces Automobiles",
      category: "fullstack",
      image: Bag,
      description:
        "Application web permettant aux utilisateurs de rechercher, filtrer et acheter des pièces automobiles en ligne avec un système de gestion des commandes et des paiements sécurisés.",
      technologies: ["Laravel", "JavaScript", "Stripe", "Bootstrap"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/BAG-app.git",
    },
    {
      id: 6,
      title: "Application mobile permettre aux parents de suivre les progrès et activités de leurs enfants.",
      category: "mobile",
      image: MatheMagiqueMobile,
      description:
        "Application mobile développée avec React Native (CLI) et Firebase pour permettre aux parents de suivre les progrès et activités de leurs enfants.",
      technologies: ["React Native", "React Navigation", "Firebase Authentication", "Firebse Realtime Database"],
      demoLink: "",
      codeLink: "https://github.com/yassinekamouss/EspaceParental.git",
    }
  ];

  return (
    <section id="projets" className="py-20 bg-secondary font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents. Chaque projet
            représente un défi unique que j'ai relevé en utilisant différentes
            technologies et approches.
          </p>
        </div>

        {/* Grille de projets */}
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
