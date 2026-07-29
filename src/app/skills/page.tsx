"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud,
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Users
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  description: string;
  skills: { name: string; tag?: string; highlight?: boolean }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building modern, responsive, and high-performance user interfaces.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "React Native" },
      { name: "Material UI (MUI)" },
      { name: "Ant Design" },
      { name: "React Hook Form" },
      { name: "React Router" },
      { name: "MUI X-Charts" },
      { name: "HTML5 & CSS3" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    description: "Architecting secure server architectures, GraphQL endpoints, and integrations.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "GraphQL (Apollo)", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "JWT & Passport.js" },
      { name: "RBAC (Role-Based Access)" },
      { name: "Stripe Integration" },
      { name: "Brevo & Mailgun & SendGrid" },
      { name: "Nodemailer" },
      { name: "Twilio (SMS & WhatsApp)" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "Relational and NoSQL database schemas, indexing, and object storage.",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Mongoose", highlight: true },
      { name: "SQLite", highlight: true },
      { name: "AWS S3" },
      { name: "MySQL Workbench" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cloud,
    description: "Production Linux server administration, VPS hosting, reverse proxies, and CI/CD.",
    skills: [
      { name: "VPS Management", highlight: true },
      { name: "Linux Server Administration", highlight: true },
      { name: "Nginx Reverse Proxy", highlight: true },
      { name: "PM2 Process Manager" },
      { name: "Domain & DNS Management" },
      { name: "SSL / TLS Configuration" },
      { name: "CI / CD Pipelines" },
      { name: "Application Deployment" },
    ],
  },
  {
    title: "Tools & Soft Skills",
    icon: Wrench,
    description: "Development workflow tools and collaborative engineering practices.",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Postman API Testing" },
      { name: "Cursor & Claude Code" },
      { name: "Agile / Scrum" },
      { name: "Technical Documentation" },
      { name: "Cross-functional Collaboration" },
      { name: "Problem Solving" },
      { name: "Client Communication" },
    ],
  },
];

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

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
          <Sparkles size={14} /> Verified Technical Stack
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Technical <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Skills</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          Detailed breakdown of technical proficiencies across frontend frameworks, backend microservices, database management, DevOps, and cloud deployment.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{cat.title}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cat.description}</p>
                </div>
              </div>

              <hr className="my-4 border-gray-100 dark:border-gray-800" />

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.04 * sIdx }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      skill.highlight
                        ? "bg-blue-50/80 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 shadow-sm"
                        : "bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700/60 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <CheckCircle2
                      size={14}
                      className={skill.highlight ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
