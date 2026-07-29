"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "Service Hub Health",
    image: "/projects-images/service-hub.health.png",
    link: "https://service-hub.health/",
    github: "https://github.com/alikhaled3",
    desc: "Full-stack healthcare service hub platform enabling patient & provider workflows, medical bookings, and digital care management."
  },
  { 
    name: "Santino Hotel Booking Platform", 
    image: "/projects-images/thesantinohotel.com_.png",
    link: "https://thesantinohotel.com/",
    github: "https://github.com/alikhaled3",
    desc: "Next.js & Node.js hotel reservation engine featuring real-time room availability tracking, guest bookings, and staff admin dashboard." 
  },
  { 
    name: "FreshCart — E-Commerce App", 
    image: "/projects-images/freshcart..png",
    link: "https://alikhaled3.github.io/freshcart-v1/", 
    github: "https://github.com/alikhaled3/freshcart-v1",
    desc: "Full-featured e-commerce storefront with product search, category navigation, cart state management, and checkout workflow." 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto">
          A selection of top full-stack web applications, healthcare hubs, and hotel booking engines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-xl transition overflow-hidden flex flex-col justify-between group"
            whileHover={{ y: -4 }}
          >
            {project.image && (
              <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-4 leading-relaxed">{project.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 text-xs font-semibold">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Site <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick link button to Real Projects Page */}
      <div className="text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/20"
        >
          <span>View All Real Projects</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
