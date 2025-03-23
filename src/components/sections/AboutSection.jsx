import React from "react";
import { AnimatedElement } from "../ui/Animation";

const AboutSection = () => {
  return (
    <section id="a propos" className="py-20 bg-secondary/95 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedElement className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              À Propos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile picture */}
          <AnimatedElement className="animate-slide-left">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl max-w-md mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-primary/40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary"></div>
            </div>
          </AnimatedElement>

          {/* Personal information */}
          <div className="text-gray-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Développeur Full Stack & Étudiant en Ingénierie Logicielle
            </h3>

            <p className="mb-4 text-lg text-justify">
              Actuellement en première année d'ingénierie logicielle et systèmes
              intelligents, je suis un développeur full stack passionné par la
              création d’applications web modernes et performantes. Mon parcours
              m’a permis d’acquérir une solide expérience en développement
              front-end et back-end, me permettant de concevoir des solutions
              efficaces et adaptées aux besoins des utilisateurs.
            </p>

            <p className="mb-6 text-lg text-justify">
              Ma philosophie repose sur trois principes clés : un code propre,
              une expérience utilisateur fluide et une architecture évolutive.
              Toujours en quête de nouveaux défis, j’aime explorer et apprendre
              les dernières technologies pour créer des solutions innovantes et
              optimisées.
            </p>

            {/* Personal information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <span className="text-primary font-bold">Nom:</span> Yassine
                  Kamouss
                </p>
                <p>
                  <span className="text-primary font-bold">Âge:</span> 22 ans
                </p>
                <p>
                  <span className="text-primary font-bold">Disponibilité:</span>{" "}
                  Disponible
                </p>
              </div>
              <div>
                <p>
                  <span className="text-primary font-bold">Email:</span>{" "}
                  yassinekamouss76@gmail.com
                </p>
                <p>
                  <span className="text-primary font-bold">Localisation:</span>{" "}
                  Casablanca, Maroc
                </p>
                <p>
                  <span className="text-primary font-bold">Expérience:</span> 2
                  ans
                </p>
              </div>
            </div>

            {/* Resume download button*/}
            <a
              href="/YassineKamouss-CV-french.pdf"
              download="YassineKamouss-CV-french.pdf"
              className="inline-flex items-center bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
