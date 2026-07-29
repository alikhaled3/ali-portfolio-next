"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Mail, Phone, Globe, Linkedin, Github, Instagram } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          About <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Results-driven Full-Stack Developer with 2+ years of hands-on experience engineering scalable, high-performance web applications across the complete development lifecycle — from architecture design to production deployment.
        </p>
      </motion.div>

      {/* Grid for Professional Summary & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact & Highlights Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm space-y-4"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Contact & Bio Information
          </h3>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600 shrink-0" />
              <span>Cairo, Naser City, Egypt</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-600 shrink-0" />
              <a href="tel:+201068380630" className="hover:text-blue-600 transition">
                +20 106 838 0630
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-600 shrink-0" />
              <a href="mailto:alikhaledomar8@gmail.com" className="hover:text-blue-600 transition">
                alikhaledomar8@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin size={18} className="text-blue-600 shrink-0" />
              <a
                href="https://linkedin.com/in/ali-khaled-29488a276"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                linkedin.com/in/ali-khaled-29488a276
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github size={18} className="text-blue-600 shrink-0" />
              <a
                href="https://github.com/alikhaled3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                github.com/alikhaled3
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram size={18} className="text-blue-600 shrink-0" />
              <a
                href="https://www.instagram.com/ali_khaled.___/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                instagram.com/ali_khaled.___
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              Languages: Arabic (Native), English (Professional)
            </span>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              <p className="text-xs text-gray-500">Computer Science Degree</p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              Bachelor's Degree in Computer Science
            </h4>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Modern University for Technology & Information (MTI) – Cairo, Egypt
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              September 2021 – June 2025 | Grade: B
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
              <Award size={16} className="text-amber-500" />
              <span>Graduation Project</span>
            </div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              "Extracting Handwritten Prescriptions Using AI"
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Applied computer vision and machine learning techniques (image processing, OCR) to digitize and interpret handwritten medical prescriptions, improving data accuracy and reducing manual transcription effort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
