"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, ArrowRight, Building2, Calendar, MapPin, CheckCircle } from "lucide-react";

const keyExperiences = [
  {
    role: "Full-Stack Developer (Remote)",
    company: "Confidential Client",
    location: "Dubai, UAE (Remote)",
    period: "Dec 2023 – Present",
    details:
      "Architect & deliver full-stack web features across complete SDLC using React.js, Next.js, Node.js, and Express.js. Implemented secure RBAC authentication, Stripe payments, and Linux VPS server management with 99%+ uptime.",
    highlights: ["React.js", "Next.js", "Node.js", "Express.js", "GraphQL", "VPS Administration"]
  },
  {
    role: "Hotel Platforms & Healthcare Hub",
    company: "Ogiko Agency / Client Projects",
    location: "Remote",
    period: "2024 – Present",
    details:
      "Developed 3 hotel booking platforms (Santino Hotel, IOS Hospitality, Avenue Residence) & Service Hub Health. Built reservation dashboards, room inventory controls, and automated email confirmation systems.",
    highlights: ["Next.js", "SQLite", "REST APIs", "Automated Emails", "Service Hub"]
  },
  {
    role: "Founder & Lead Developer",
    company: "PlaySync (SaaS Platform)",
    location: "Remote",
    period: "2024 – Present",
    details:
      "Single-handedly designed, built, and launched PlaySync: SaaS platform for PlayStation lounges & gaming cafés. Implemented session tracking, subscription billing, RBAC, and VPS CI/CD pipelines.",
    highlights: ["Full-Stack SaaS", "RBAC", "Subscription Billing", "CI/CD"]
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Work <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Highlights of my technical track record in full-stack software development, SaaS products, and enterprise applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {keyExperiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {exp.role}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4">
                <Building2 size={13} />
                <span>{exp.company}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-6">
                {exp.details}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-800">
                {exp.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Link to Full Experience Page */}
      <div className="text-center">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/20"
        >
          <span>View Full Work Experience</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
