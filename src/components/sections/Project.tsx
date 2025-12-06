"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "Ecommerce App", link: "#", desc: "React.js, Node.js, Express.js, MongoDB, Bootstrap" },
  { name: "Movie Reviews App", link: "#", desc: "React.js, Bootstrap, REST API, Responsive Design" },
  { name: "Food Recipes App", link: "#", desc: "JavaScript, HTML, CSS, jQuery, API Integration" },
  { name: "Games Reviews App", link: "#", desc: "HTML, CSS, JavaScript, API, Responsive Design" },
  { name: "Weather App", link: "#", desc: "HTML, CSS, JavaScript, API, Responsive Design" },
  { name: "Saraha Messaging App", link: "#", desc: "Node.js, Express.js, MongoDB" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2 className="text-3xl font-bold mb-8 text-center">Projects</motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
