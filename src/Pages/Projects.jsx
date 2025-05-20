import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Responsive Real-Time Chat Application (In Progress)",
    tech: "MERN Stack, Socket.IO, JWT, Tailwind CSS",
    github: "https://github.com/DKnama2287/Responsive-Chat-app", 
    live: "#", // Add live link when ready
    description:
    "Building a responsive real-time chat app with authentication, one-on-one messaging, typing indicators, chat history, and online status using MERN and Socket.IO.",
  },

  {
    name: "Food Ordering Web Application",
    tech: "MERN Stack, Material-UI",
    github: "https://github.com/DKnama2287/CSP_WEB_PROJECT.git",
    live: "#",
    description:
      "Built a full-featured food ordering web app with user authentication, dynamic menu system, cart functionality, order tracking, and an admin dashboard using MERN stack.",
  },
  {
    name: "Currency Converter Web App",
    tech: "HTML, CSS, JavaScript, Fetch API",
    github: "https://github.com/dknama2287/CURRENCY_CONVERTER_APP",
    live: "https://dknama2287.github.io/CURRENCY_CONVERTER_APP/",
    description:
      "Built a responsive currency converter with real-time exchange rate integration and a clean, intuitive user interface. Optimized for seamless use across phones, tablets, and desktops to ensure a smooth experience on any device.",
  },
  {
    name: "Tic-Tac-Toe Game",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/dknama2287/Tic-Tac-Toe-game",
    live: "https://dknama2287.github.io/Tic-Tac-Toe-game/",
    description:
      "Developed an interactive browser-based Tic-Tac-Toe game featuring real-time turn-based gameplay, winner detection logic, and a seamless restart functionality. Built using JavaScript event listeners and direct DOM manipulation to deliver an engaging and dynamic user experience.",
  },
  {
    name: "Rock Paper Scissor Game",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/dknama2287/ROCK_PAPER_SCISSOR_GAME",
    live: "https://dknama2287.github.io/ROCK_PAPER_SCISSOR_GAME/",
    description:
      "A classic Rock-Paper-Scissors game where players compete against the computer. Includes score tracking, real-time outcome display, and follows the standard rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Built with clean UI and DOM manipulation.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-blue-100 to-sky-200 text-gray-900"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💼 Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="relative bg-white p-6 rounded-xl shadow-lg border-2 border-blue-300 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }} // Ensures animation re-triggers
          >
            {/* Flashing Border Effect */}
            <div className="absolute inset-0 rounded-xl border-4 border-blue-400 animate-pulse opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              <div className="text-sm text-gray-600 font-medium mb-4">
                🚀 <span className="text-blue-800">{project.tech}</span>
              </div>
              <div className="space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
