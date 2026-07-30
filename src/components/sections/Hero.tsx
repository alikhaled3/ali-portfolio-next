"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
      >
        <Sparkles size={14} /> Full-Stack Developer • 2+ Years Experience
      </motion.div>
 
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Ali
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl mt-6 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal"
      >
        Engineering scalable, high-performance web applications with{" "}
        <strong className="text-gray-900 dark:text-white font-semibold">
          React.js, Next.js, Node.js, GraphQL
        </strong>{" "}
        &amp; modern DevOps infrastructure. Building end-to-end solutions for SaaS platforms, hospitality products, and digital agencies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        <Button
          className="px-6 py-3 text-base font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 flex items-center gap-2"
          asChild
        >
          <Link href="/projects">
            View Real Projects <ArrowRight size={16} />
          </Link>
        </Button>

        <Button
          variant="outline"
          className="px-6 py-3 text-base font-semibold rounded-xl flex items-center gap-2"
          asChild
        >
          <a href="/Ali_Khaled_CV.docx" download="Ali_Khaled_CV.docx">
            <Download size={16} /> Download CV
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
