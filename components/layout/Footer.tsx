'use client';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} — Built with Next.js, TypeScript & Tailwind.
    </footer>
  );
}
