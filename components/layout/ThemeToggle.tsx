'use client';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle color mode"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-white/60 dark:bg-black/40 border-gray-200 dark:border-gray-700"
      >
        <span className="w-5 h-5 block" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const current = theme === 'system' ? systemTheme : theme;
  const isDark = current === 'dark';

  return (
    <button
      aria-label="Toggle color mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-white/60 dark:bg-black/40 border-gray-200 dark:border-gray-700"
    >
      {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
