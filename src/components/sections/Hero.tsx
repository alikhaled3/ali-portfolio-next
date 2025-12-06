"use client";


import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-zinc-600 dark:text-zinc-300">Ali Khaled</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl mt-4 max-w-2xl text-zinc-700 dark:text-zinc-400"
      >
        Full-Stack Developer (MERN + Next.js)  
        I build modern, fast & scalable web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex gap-4 mt-8"
      >
        <Button className="px-6 py-3 text-lg" asChild>
          <a href="#projects">View Projects</a>
        </Button>

        <Button variant="outline" className="px-6 py-3 text-lg" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
}
