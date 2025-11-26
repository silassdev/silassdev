'use client';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  // `mounted` avoids hydration mismatch (we don't show computed state until after mount)
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setMounted(true);

    // read saved preference or system preference
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme | null) : null;
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      setTheme(saved);
      return;
    }

    // fallback to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
    setTheme(prefersDark ? 'dark' : 'light');

    // optional: respond to system preference changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      // only change when user hasn't set an explicit preference
      const stored = localStorage.getItem('theme');
      if (!stored) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
        setTheme(newTheme);
      }
    };
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    localStorage.setItem('theme', next);
  }

  // render a stable UI to avoid hydration mismatch
  return (
    <button
      aria-label="Toggle color mode"
      onClick={toggle}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-white/60 dark:bg-black/40 border-gray-200 dark:border-gray-700"
    >
      {/* show nothing until mounted to avoid mismatch */}
      {!mounted ? (
        <span className="w-5 h-5 block" />
      ) : theme === 'dark' ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
