import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Braces } from 'lucide-react';

const skills = [
  { name: 'React', level: 90, icon: Code2 },
  { name: 'Node.js', level: 85, icon: Server },
  { name: 'Express', level: 80, icon: Braces },
  { name: 'MongoDB', level: 85, icon: Database },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            I’m Harshad, a MERN Stack Developer who loves crafting fast, accessible and delightful web
            experiences. I focus on clean architecture, reusability, and motion-driven interfaces that feel
            alive.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            When I’m not building, I explore new tooling, contribute to open-source, and design micro-interactions
            that bring products to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-4"
        >
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-neutral-200/60 bg-white/60 p-4 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <div className="mb-2 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">{s.name}</span>
                  <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">{s.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
