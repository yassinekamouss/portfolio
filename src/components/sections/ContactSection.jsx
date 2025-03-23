import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiHackerrank } from "react-icons/si";

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const serviceId = "service_9vas3kr";
    const templateId = "template_f6ss0n8";
    const publicKey = "BsG8ScSIvaXmcvtDD";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("Email envoyé avec succès:", result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error.text);
        setIsSubmitting(false);
        setError(
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
        );
      });
  };

  return (
    <section id="contact" className="py-20 bg-main font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Me Contacter
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ou une opportunité à discuter ?
            N'hésitez pas à me contacter ! Je suis toujours ouvert à de
            nouvelles collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-secondary/30 rounded-xl p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Informations de Contact
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <CgMail className="w-6 h-6" />,
                  title: "Email",
                  content: "yassinekamouss76@gmail.com",
                  link: "mailto:yassinekamouss76@gmail.com",
                },
                {
                  icon: <FaPhoneAlt className="w-6 h-6" />,
                  title: "Téléphone",
                  content: "+212 6 93 61 51 47",
                  link: "tel:+212693615147",
                },
                {
                  icon: <GrLocation className="w-6 h-6" />,
                  title: "Localisation",
                  content: "Casablanca, Maroc",
                  link: "#",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-primary transition-colors duration-300">
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social networks */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {[
                  { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
                  {
                    name: "LinkedIn",
                    icon: <FaLinkedin className="w-6 h-6" />,
                  },
                  { name: "Twitter", icon: <FaXTwitter className="w-6 h-6" /> },
                  {
                    name: "Leetcode",
                    icon: <TbBrandLeetcode className="w-6 h-6" />,
                  },
                  {
                    name: "Hackerrank",
                    icon: <SiHackerrank className="w-6 h-6" />,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-secondary/30 rounded-xl p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-moi un message
            </h3>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400 text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-sm mt-1">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-center">
                    <p>{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-main/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-main/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Votre email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-main/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-main/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Votre message"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
