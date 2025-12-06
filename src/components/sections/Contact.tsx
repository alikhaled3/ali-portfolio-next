"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 max-w-md mx-auto">
      <motion.h2 className="text-3xl font-bold mb-6 text-center">Contact Me</motion.h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="text" placeholder="Your Name" className="p-3 border rounded bg-gray-50 dark:bg-gray-800" required />
        <input type="email" placeholder="Your Email" className="p-3 border rounded bg-gray-50 dark:bg-gray-800" required />
        <textarea placeholder="Message" className="p-3 border rounded bg-gray-50 dark:bg-gray-800" rows={5} required />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
