'use client';

import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiNodedotjs,
  SiFramer,
  SiJest,
} from 'react-icons/si';

type Skill = { name: string; level: number; Icon: React.ComponentType<any> };

const frontend: Skill[] = [
  { name: 'TypeScript', level: 92, Icon: SiTypescript },
  { name: 'React', level: 90, Icon: SiReact },
  { name: 'Next.js', level: 86, Icon: SiNextdotjs },
  { name: 'Tailwind CSS', level: 88, Icon: SiTailwindcss },
];

const backend: Skill[] = [
  { name: 'Node.js', level: 80, Icon: SiNodedotjs },
  { name: 'MySQL', level: 74, Icon: SiMysql },
];

const tools: Skill[] = [
  { name: 'Framer Motion', level: 70, Icon: SiFramer },
  { name: 'Testing (Jest)', level: 58, Icon: SiJest },
];

const levelLabel = (n: number) => {
  if (n >= 88) return 'Expert';
  if (n >= 72) return 'Advanced';
  if (n >= 55) return 'Intermediate';
  return 'Familiar';
};

export default function Skills() {
  const groups = [
    { title: 'Frontend', skills: frontend },
    { title: 'Backend', skills: backend },
    { title: 'Tools & Libraries', skills: tools },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
              Technologies and tools I use day-to-day. Organized by category and shown with compact, modern
              indicators — ideal for a senior full‑stack portfolio.
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Selected tech stack • curated</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {groups.map((g) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-4">{g.title}</h3>

              <div className="space-y-3">
                {g.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/60 dark:bg-black/40 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <s.Icon className="w-6 h-6 text-indigo-600" aria-hidden />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="font-medium text-sm">{s.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{levelLabel(s.level)}</div>
                      </div>

                      {/* subtle progress bar (no percent shown) */}
                      <div
                        role="img"
                        aria-label={`${s.name} skill level: ${s.level} out of 100`}
                        className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          transition={{ duration: 0.9 }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
                        />
                      </div>
                    </div>

                    {/* compact dot indicator for quick glance */}
                    <div className="w-20 flex items-center justify-end">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const threshold = (i + 1) * 20; // 20,40,60,80,100
                          const filled = s.level >= threshold;
                          return (
                            <span
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                filled ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-700'
                              }`}
                              aria-hidden
                            />
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* small stack tag group */}
              <div className="mt-5 flex flex-wrap gap-2">
                {g.skills.slice(0, 4).map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 border border-gray-100 dark:border-gray-700 text-xs"
                  >
                    <s.Icon className="w-4 h-4 text-indigo-500" />
                    <span>{s.name.split(' ')[0]}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">Want this exported as a printable skills section? I can generate a PDF-friendly version.</p>
      </div>
    </section>
  );
}
