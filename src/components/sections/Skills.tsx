"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js", "Next.js", "Node.js", "Express.js", "GraphQL", "TypeScript", 
  "JavaScript", "REST APIs", "Prisma ORM", "MySQL", "MongoDB", "Tailwind CSS",
  "Material UI", "JWT", "VPS Administration", "Nginx", "PM2", "Stripe", "Twilio"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 className="text-3xl font-bold mb-8 text-center">
        Technical <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Skills</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-blue-500 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
