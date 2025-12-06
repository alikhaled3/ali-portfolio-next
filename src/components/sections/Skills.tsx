"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js", "Next.js", "React Native", "HTML5", "CSS3", "Bootstrap", 
  "Tailwind CSS", "Ant Design", "Node.js", "Express.js", "GraphQL", "REST API",
  "Prisma", "JWT", "MongoDB", "Mongoose", "MySQL", "TypeScript", "JavaScript"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2 className="text-3xl font-bold mb-6 text-center">Skills</motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
