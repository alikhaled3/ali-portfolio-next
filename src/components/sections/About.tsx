"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Highly skilled MERN Stack Developer with experience building dynamic, scalable, 
        and high-performance web applications. Proficient in end-to-end development using 
        MongoDB, Express.js, React.js, and Node.js, and adept at GraphQL and REST APIs. 
        Passionate about clean, maintainable code, optimizing performance, and staying 
        current with emerging technologies.
      </motion.p>
    </section>
  );
}
