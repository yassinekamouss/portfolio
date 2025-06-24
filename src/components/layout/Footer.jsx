import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">Port</span>folio
            </h3>
            <p className="text-gray-300">
              Portfolio professionnel d'un développeur full stack passionné par
              la création d'applications web modernes et performantes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Navigation rapide
            </h3>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace("à", "a")}`}
                      className="text-gray-300 hover:text-primary transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Réseaux sociaux
            </h3>
            <div className="flex space-x-4">
              {[
                { name: "GitHub", icon: <FaGithub className="w-8 h-8" /> },
                { name: "LinkedIn", icon: <FaLinkedin className="w-8 h-8" /> },
                { name: "Twitter", icon: <FaXTwitter className="w-8 h-8" /> },
                {
                  name: "Hackerrank",
                  icon: <SiHackerrank className="w-8 h-8" />,
                },
                { name: "Leetcode", icon: <SiLeetcode className="w-8 h-8" /> },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                  aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Designed and developed by Yassine
            Kamouss.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 bg-primary hover:bg-primary/80 text-white rounded-full p-2 transition-colors duration-300"
            aria-label="Retour en haut">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
