"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Touch</span>
      </motion.h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto text-sm md:text-base">
        Have a project in mind or interested in working together? Reach out directly via email, phone, or LinkedIn.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <a href="tel:+201068380630" className="font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600">
                    +20 106 838 0630
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a href="mailto:alikhaledomar8@gmail.com" className="font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600">
                    alikhaledomar8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    Cairo, Naser City, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
            <a
              href="https://linkedin.com/in/ali-khaled-29488a276"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alikhaled3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 transition"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/ali_khaled.___/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-950 hover:text-pink-600 transition"
              aria-label="Instagram Profile"
            >
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-xl font-bold mb-2">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-xl bg-gray-50 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-600"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-xl bg-gray-50 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-600"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border rounded-xl bg-gray-50 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-blue-600"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold p-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
