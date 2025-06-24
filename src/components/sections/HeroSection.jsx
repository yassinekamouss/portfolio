import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  const roles = [
    "Développeur Full Stack",
    "Étudiant ingénieur en logiciels et systèmes intelligents",
    "Développeur MERN/MEAN",
  ];
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: roles,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Nettoyage lorsque le composant est démonté
    };
  }, []);

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-main to-black/90 font-sans overflow-hidden px-4 sm:px-6 hero-mobile-optimized">
      {/* Decorative circles in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-primary/5 -top-10 -left-10 sm:-top-20 sm:-left-20 blur-2xl sm:blur-3xl"></div>
        <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-primary/10 bottom-5 right-5 sm:bottom-10 sm:right-10 blur-xl sm:blur-2xl"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-primary/5 top-1/2 left-1/3 blur-lg sm:blur-xl"></div>
      </div>

      {/* Decorative grille */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto z-10 relative w-full">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}>
          {/* Layout avec image et contenu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Contenu texte */}
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1 text-center lg:text-left hero-text-container">
              <motion.div
                className="flex items-center justify-center lg:justify-start mb-4"
                variants={itemVariants}>
                <div className="h-1 w-8 sm:w-16 bg-primary rounded-full mr-2 sm:mr-4"></div>
                <p className="text-gray-300 uppercase tracking-widest text-xs sm:text-sm font-medium">
                  Portfolio
                </p>
                <div className="h-1 w-8 sm:w-16 bg-primary rounded-full ml-2 sm:ml-4"></div>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start"
                variants={itemVariants}>
                <span>Yassine</span>
                <span className="text-primary sm:ms-5 mt-1 sm:mt-0">
                  Kamouss
                </span>
              </motion.h1>

              <motion.div
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 h-10 sm:h-12 flex items-center justify-center lg:justify-start"
                variants={itemVariants}>
                <span ref={typedElement}></span>
              </motion.div>

              <motion.p
                className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-10"
                variants={itemVariants}>
                Je conçois et développe des expériences numériques
                exceptionnelles qui combinent performance technique et design
                intuitif.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-8 sm:mb-12 justify-center lg:justify-start hero-buttons"
                variants={itemVariants}>
                <a
                  href="#projets"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20 text-sm sm:text-base touch-optimized">
                  Découvrir mes projets
                </a>
                <a
                  href="#contact"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm sm:text-base touch-optimized">
                  Me contacter
                </a>
              </motion.div>

              <motion.div
                className="flex space-x-4 sm:space-x-5 justify-center lg:justify-start hero-social-icons"
                variants={itemVariants}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 touch-optimized">
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 touch-optimized">
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 touch-optimized">
                  <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image de profil */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0 hero-image-container mt-8 sm:mt-12 lg:mt-0"
              variants={imageVariants}>
              <div className="relative">
                {/* Cercle décoratif derrière l'image */}
                <div className="absolute inset-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl sm:blur-2xl"></div>

                {/* Image de profil */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <img
                    src="/src/assets/YASSINEKMAOUSS.jpg"
                    alt="Yassine Kamouss"
                    className="w-full h-full object-cover hero-profile-image"
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                    onLoad={(e) => {
                      e.target.classList.add("loaded");
                    }}
                  />
                  {/* Fallback si pas d'image */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                    YK
                  </div>
                </div>

                {/* Éléments décoratifs autour de l'image */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-secondary rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary/50 rounded-full animate-pulse delay-500"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow with soft effect */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
            Découvrir
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Style for the decorative grid */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
        }

        @media (min-width: 640px) {
          .bg-grid-pattern {
            background-size: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
