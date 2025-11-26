'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaPhp,
  FaJava,
  FaGithub,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSpring,
  SiFramer,
  SiJest,
  SiGit,
  SiMongodb,
} from 'react-icons/si';

// Simple inline SVGs for Livewire and cPanel (placeholders — replace with official logos if you have them)
function LivewireIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.06" />
      <path d="M6 12c2-4 6-6 10-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16c2-2 6-3 10-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CPanelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.06" />
      <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Skill = { id: string; name: string; Icon: React.ComponentType<any> };

const frontend: Skill[] = [
  { id: 'html5', name: 'HTML5', Icon: FaHtml5 },
  { id: 'css3', name: 'CSS3', Icon: FaCss3Alt },
  { id: 'react', name: 'React', Icon: SiReact },
  { id: 'nextjs', name: 'Next.js', Icon: SiNextdotjs },
  { id: 'tailwind', name: 'Tailwind CSS', Icon: SiTailwindcss },
];

const backend: Skill[] = [
  { id: 'node', name: 'Node.js', Icon: FaNodeJs },
  { id: 'express', name: 'Express', Icon: SiExpress },
  { id: 'laravel', name: 'Laravel', Icon: FaLaravel },
  { id: 'spring', name: 'Spring', Icon: SiSpring },
];

const tools: Skill[] = [
  { id: 'git', name: 'Git', Icon: SiGit },
  { id: 'github', name: 'GitHub', Icon: FaGithub },
  { id: 'framer', name: 'Framer Motion', Icon: SiFramer },
  { id: 'jest', name: 'Jest', Icon: SiJest },
  { id: 'livewire', name: 'Livewire', Icon: LivewireIcon },
  { id: 'cpanel', name: 'cPanel', Icon: CPanelIcon },
];

const databases: Skill[] = [
  { id: 'mysql', name: 'MySQL', Icon: SiMysql },
  { id: 'mongodb', name: 'MongoDB ', Icon: SiMongodb },
  { id: 'postgres', name: 'PostgreSQL', Icon: SiPostgresql },
];

const languages: Skill[] = [
  { id: 'ts', name: 'TypeScript', Icon: SiTypescript },
  { id: 'js', name: 'JavaScript', Icon: SiJavascript },
  { id: 'php', name: 'PHP', Icon: FaPhp },
  { id: 'java', name: 'Java', Icon: FaJava },
];

const groups = [
  { title: 'Frontend', skills: frontend },
  { title: 'Backend', skills: backend },
  { title: 'Databases', skills: databases },
  { title: 'Languages', skills: languages },
  { title: 'Tools', skills: tools },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">Explore my stack.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-4">{g.title}</h3>

              <div className="flex flex-wrap gap-3">
                {g.skills.map((s) => {
                  const tooltipId = `tt-${s.id}`;
                  return (
                    <motion.button
                      key={s.id}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-14 h-14 rounded-xl flex items-center justify-center bg-white/60 dark:bg-black/40 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-describedby={tooltipId}
                      title={s.name}
                      type="button"
                    >
                      <s.Icon className="w-7 h-7 text-indigo-600" aria-hidden />

                      {/* Accessible tooltip: appears on hover & focus */}
                      <span
                        id={tooltipId}
                        role="tooltip"
                        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0"
                      >
                        {s.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
