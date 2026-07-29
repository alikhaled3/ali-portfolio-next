"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle, 
  Building2,
  Hotel,
  Globe,
  Gamepad2,
  Server
} from "lucide-react";

interface SubProject {
  title: string;
  agency: string;
  icon: any;
  bullets: string[];
  tech: string[];
}

const confidentialSubProjects: SubProject[] = [
  {
    title: "Hotel Booking Platforms",
    agency: "Ogiko Marketing Agency",
    icon: Hotel,
    bullets: [
      "Developed and maintained 3 hotel booking platforms (Santino Hotel, IOS Hospitality, Avenue) using Next.js, Node.js, SQLite, and REST APIs.",
      "Built room availability management systems, end-to-end booking workflows, and reservation tracking dashboards handling 1,000+ monthly transactions.",
      "Engineered admin dashboards enabling hotel staff to manage rooms, bookings, customers, and dynamic content without technical assistance.",
      "Implemented automated email notification systems for booking confirmations, reducing manual follow-up by 80%.",
      "Deployed and maintained applications on Linux VPS infrastructure with zero-downtime release strategies."
    ],
    tech: ["Next.js", "Node.js", "SQLite", "REST APIs", "VPS Deployment", "Automated Emails"]
  },
  {
    title: "Agency Website",
    agency: "Marvik Marketing Agency",
    icon: Globe,
    bullets: [
      "Developed and maintained the full Marvik agency website from concept to production deployment.",
      "Built a library of modular, reusable React components, cutting future feature development time by 40%.",
      "Implemented SEO best practices (semantic HTML, meta optimization, structured data) achieving measurable organic ranking improvements.",
      "Integrated email-based lead generation contact forms directly supporting client acquisition.",
      "Achieved a 95+ Google Lighthouse performance score through code splitting, lazy loading, and asset optimization."
    ],
    tech: ["React.js", "Tailwind CSS", "SEO Optimization", "Google Lighthouse 95+", "Lead Generation"]
  },
  {
    title: "Founder & Lead Developer",
    agency: "PlaySync (SaaS Platform)",
    icon: Gamepad2,
    bullets: [
      "Founded and single-handedly designed, developed, and launched a SaaS platform for PlayStation lounges and gaming cafés.",
      "Built core modules including session management, subscription billing, customer tracking, and operational workflow automation.",
      "Implemented role-based access control (Owner / Manager / Staff) with real-time dashboard analytics.",
      "Managed end-to-end infrastructure: VPS hosting, domain configuration, DNS management, SSL certificates, and CI/CD pipelines.",
      "Onboarded early adopters and iterated on features based on direct user feedback following lean product methodologies."
    ],
    tech: ["Full-Stack SaaS", "React.js", "Node.js", "RBAC", "VPS Administration", "CI/CD", "Billing Automation"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles size={14} /> Resume Track Record
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          2+ years of hands-on experience engineering scalable, high-performance web applications across the complete SDLC.
        </p>
      </motion.div>

      {/* Main Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-md mb-12"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                December 2023 – Present
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                Remote Role
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Full-Stack Developer
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                <Building2 size={16} /> Confidential Client
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={16} /> Dubai, UAE (Remote)
              </span>
            </div>
          </div>
        </div>

        {/* High-level role responsibilities */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Core Scope &amp; Responsibilities
          </h3>
          <ul className="space-y-2">
            {[
              "Architect and deliver full-stack features across the complete SDLC — from requirements analysis and system design through testing, deployment, and post-launch maintenance.",
              "Build responsive, performant user interfaces using React.js and Next.js, paired with robust Node.js/Express.js backend services consumed via REST and GraphQL APIs.",
              "Implement secure authentication and role-based access control (RBAC) with JWT and Passport.js, safeguarding sensitive business data across multiple platforms.",
              "Integrate third-party services including Stripe for payments, Twilio for SMS/WhatsApp, and Brevo/SendGrid for transactional email workflows.",
              "Optimize database queries and API response times, reducing average page load by 35% across deployed platforms.",
              "Manage production environments on Linux VPS servers using Nginx, PM2, and SSL configuration, ensuring 99%+ uptime.",
              "Participate in Agile sprint planning, daily standups, code reviews, and technical design discussions within a fully remote international team."
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Detailed Projects under this role */}
        <div className="space-y-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Server size={20} className="text-blue-600" /> Key Key Engagements &amp; Products
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {confidentialSubProjects.map((sub, sIdx) => {
              const SubIcon = sub.icon;
              return (
                <div
                  key={sub.title}
                  className="p-5 md:p-6 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
                      <SubIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                        {sub.title}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {sub.agency}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {sub.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sub.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
