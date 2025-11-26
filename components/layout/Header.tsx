'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500" aria-hidden />
          <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Silas Tyokaha</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#about" className="hover:text-indigo-500 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-indigo-500 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-indigo-500 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-indigo-500 transition-colors">Contact</Link>
          <ThemeToggle />
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-black/40"
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-6 pb-4">
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="#about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link href="#skills" onClick={() => setOpen(false)} className="py-2">Skills</Link>
            <Link href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}
