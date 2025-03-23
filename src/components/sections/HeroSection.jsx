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

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-main to-black/90 font-sans overflow-hidden">
      {/* Decorative circles in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-primary/5 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-80 h-80 rounded-full bg-primary/10 bottom-10 right-10 blur-2xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-primary/5 top-1/2 left-1/3 blur-xl"></div>
      </div>

      {/* Decorative grille */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}>
          <motion.div
            className="flex items-center justify-center mb-4"
            variants={itemVariants}>
            <div className="h-1 w-16 bg-primary rounded-full mr-4"></div>
            <p className="text-gray-300 uppercase tracking-widest text-sm font-medium">
              Portfolio
            </p>
            <div className="h-1 w-16 bg-primary rounded-full ml-4"></div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6"
            variants={itemVariants}>
            Yassine <span className="text-primary">Kamouss</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-white text-center mb-6 h-12 flex items-center justify-center"
            variants={itemVariants}>
            <span ref={typedElement}></span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-10"
            variants={itemVariants}>
            Je conçois et développe des expériences numériques exceptionnelles
            qui combinent performance technique et design intuitif.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-5 mb-12"
            variants={itemVariants}>
            <a
              href="#projets"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20">
              Découvrir mes projets
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/20">
              Me contacter
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-5"
            variants={itemVariants}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaXTwitter className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll arrow with soft effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-2">Découvrir</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}>
            <svg
              className="w-6 h-6 text-primary"
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
          background-size: 50px 50px;
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
      `}</style>
    </section>
  );
};

export default HeroSection;
