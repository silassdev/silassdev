'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Hi, I’m Your Name — Full-stack engineer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl"
          >
            I build performant, accessible web apps with a focus on great developer experience and clean design.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white" href="#projects">
              See projects
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div>
          <div className="h-64 rounded-2xl bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-black/30 dark:to-black/20 border border-gray-100 dark:border-gray-800 flex items-center justify-center">
            Preview
          </div>
        </div>
      </div>
    </section>
  );
}
