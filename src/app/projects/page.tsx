"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Rocket
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Full-Stack Projects" | "Frontend Apps" | "APIs & Web Apps";
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "service-hub-health",
    title: "Service Hub Health",
    category: "Full-Stack Projects",
    featured: true,
    image: "/projects-images/service-hub.health.png",
    description:
      "Full-stack healthcare service hub platform enabling patients and healthcare providers to manage medical services, consultations, and digital care workflows.",
    highlights: [
      "Engineered end-to-end full-stack healthcare workflow platform.",
      "Responsive UI built for mobile and desktop healthcare management.",
      "Secure backend APIs for patient bookings, service listings, and data processing."
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://service-hub.health/",
    githubUrl: "https://github.com/alikhaled3",
  },
  {
    id: "playsync-saas",
    title: "PlaySync — SaaS Platform",
    category: "Full-Stack Projects",
    featured: true,
    description:
      "SaaS platform designed for PlayStation lounges and gaming cafés to automate sessions, subscription billing, customer tracking, and operations.",
    highlights: [
      "Role-based access control (Owner / Manager / Staff) with real-time analytics dashboard.",
      "Session management, workflow automation, and custom billing modules.",
      "Deployed on Linux VPS infrastructure with domain, SSL, and automated deployment pipelines."
    ],
    tech: ["React.js", "Node.js", "Express.js", "SaaS", "RBAC", "VPS", "CI/CD"],
    githubUrl: "https://github.com/alikhaled3",
  },
  {
    id: "santino-hotel",
    title: "Santino Hotel Booking Platform",
    category: "Full-Stack Projects",
    featured: true,
    image: "/projects-images/thesantinohotel.com_.png",
    description:
      "Full-stack hotel booking engine & reservation dashboard for Santino Hotel (Ogiko Marketing Agency). Features room availability tracking and automated booking confirmations.",
    highlights: [
      "End-to-end booking workflows handling room availability & instant reservations.",
      "Admin dashboard enabling hotel staff to manage bookings & room pricing.",
      "Automated confirmation email workflows reducing manual follow-up by 80%."
    ],
    tech: ["Next.js", "Node.js", "SQLite", "REST APIs", "VPS Deployment"],
    liveUrl: "https://thesantinohotel.com/",
    githubUrl: "https://github.com/alikhaled3",
  },
  {
    id: "ios-hospitality",
    title: "IOS Hospitality Booking Engine",
    category: "Full-Stack Projects",
    featured: true,
    image: "/projects-images/ioshospitality.com_.png",
    description:
      "Enterprise reservation system built for IOS Hospitality. Handles room availability management, customer records, and multi-property booking tracking.",
    highlights: [
      "Real-time room availability status & reservation dashboard.",
      "Custom staff admin panel for booking management & customer communication.",
      "Deployed on Linux VPS infrastructure with zero-downtime release strategies."
    ],
    tech: ["Next.js", "Node.js", "Express.js", "REST APIs", "Nginx", "VPS"],
    liveUrl: "https://ioshospitality.com/",
    githubUrl: "https://github.com/alikhaled3",
  },
  {
    id: "avenue-residence",
    title: "Avenue Residence Platform",
    category: "Full-Stack Projects",
    featured: true,
    image: "/projects-images/theavenueresidence.com_.png",
    description:
      "Modern luxury hotel & residence booking platform featuring responsive UI, automated email notifications, and room availability management.",
    highlights: [
      "High-performance responsive UI optimized for desktop and mobile guests.",
      "Automated confirmation email notifications via transactional email APIs.",
      "Secure backend data models for customer reservations and room inventories."
    ],
    tech: ["Next.js", "React.js", "Node.js", "SQLite", "Mailgun"],
    liveUrl: "https://theavenueresidence.com/",
    githubUrl: "https://github.com/alikhaled3",
  },
  {
    id: "freshcart",
    title: "E-Commerce App — FreshCart",
    category: "Full-Stack Projects",
    featured: true,
    image: "/projects-images/freshcart..png",
    description:
      "Fully functional e-commerce storefront with product listings, category search, cart management, and checkout flow.",
    highlights: [
      "Product catalog with category navigation and search.",
      "Interactive shopping cart state management.",
      "RESTful API integration for product data and user accounts."
    ],
    tech: ["React.js", "REST APIs", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://alikhaled3.github.io/freshcart-v1/",
    githubUrl: "https://github.com/alikhaled3/freshcart-v1",
  },
  {
    id: "cinema-app",
    title: "Movie Reviews App — Cinéma",
    category: "Frontend Apps",
    featured: false,
    image: "/projects-images/cinmaScope.png",
    description:
      "Movie discovery app integrating a public movie API to fetch and display real-time film data with instant search and category filters.",
    highlights: [
      "Real-time search and genre filtering.",
      "Responsive layout for mobile and desktop screens.",
      "External REST API integration for dynamic media content."
    ],
    tech: ["React.js", "Bootstrap", "REST API", "Responsive Design"],
    liveUrl: "https://alikhaled3.github.io/cinma/",
    githubUrl: "https://github.com/alikhaled3/cinma",
  },
  {
    id: "yummy-app",
    title: "Food Recipes App — Yummy",
    category: "Frontend Apps",
    featured: false,
    image: "/projects-images/yummy .png",
    description:
      "Responsive culinary recipe finder application with category filtering, detailed recipe step views, and dynamic ingredient search.",
    highlights: [
      "Dynamic search by main ingredients and cuisine categories.",
      "Interactive recipe detail modal with ingredients breakdown.",
      "Fast API integration with clean UI transitions."
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "jQuery", "Recipe API"],
    liveUrl: "https://alikhaled3.github.io/yummy/",
    githubUrl: "https://github.com/alikhaled3/yummy",
  },
  {
    id: "game-reviews",
    title: "Game Reviews App",
    category: "Frontend Apps",
    featured: false,
    image: "/projects-images/game.png",
    description:
      "Video game review platform fetching live data from a gaming API with rating displays, release details, and genre-based filtering.",
    highlights: [
      "Live data fetching from gaming database API.",
      "Ratings display and metacritic score tags.",
      "Platform filtering (PC, PlayStation, Xbox)."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Gaming API"],
    liveUrl: "https://alikhaled3.github.io/gameReviews/",
    githubUrl: "https://github.com/alikhaled3/gameReviews",
  },
  {
    id: "weather-app",
    title: "Real-Time Weather App",
    category: "Frontend Apps",
    featured: false,
    image: "/projects-images/wether.app.png",
    description:
      "Real-time weather dashboard with automatic browser geolocation support and 5-day atmospheric forecast metrics.",
    highlights: [
      "Instant location weather detection.",
      "City search with weather data caching.",
      "5-day temperature and humidity forecasts."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Weather API"],
    liveUrl: "https://alikhaled3.github.io/weatherApp/",
    githubUrl: "https://github.com/alikhaled3/weatherApp",
  },
  {
    id: "saraha-app",
    title: "Saraha — Anonymous Messaging App",
    category: "APIs & Web Apps",
    featured: false,
    description:
      "Full-stack anonymous messaging application featuring secure user authentication, encrypted message storage, and notifications.",
    highlights: [
      "Backend REST API built with Node.js and Express.js.",
      "MongoDB database schemas for profiles and feedback messages.",
      "JWT authentication and security middleware."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    githubUrl: "https://github.com/alikhaled3/srahaApp",
  },
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", "Full-Stack Projects", "Frontend Apps", "APIs & Web Apps"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles size={14} /> Resume Portfolio Projects
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Real <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          Live web applications, hotel booking platforms, full-stack healthcare platforms, and API projects built by Ali Khaled.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedFilter === filter
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Project Image Header */}
              {project.image ? (
                <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold shadow">
                        <Rocket size={12} /> Featured
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold">
                      <Rocket size={12} /> Featured
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-6">
                      {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-1.5">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span className="line-clamp-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <Github size={15} /> GitHub Repo
                      </a>
                    ) : <div />}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition shadow"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
