import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DevFlow – Q&A for Developers',
    desc: 'StackOverflow-like platform built with MERN, JWT auth, and rich text editor.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: '#',
    tech: ['React', 'Node', 'Express', 'MongoDB']
  },
  {
    title: 'ShopSwift – E-commerce',
    desc: 'Modern e-commerce with cart, checkout, and Stripe integration.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: '#',
    tech: ['React', 'Redux', 'Node', 'MongoDB']
  },
  {
    title: 'TaskZen – Productivity',
    desc: 'Kanban-style task manager with drag and drop, and analytics.',
    img: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: '#',
    tech: ['React', 'Express', 'MongoDB']
  },
  {
    title: 'TrendPulse – Dashboard',
    desc: 'Admin dashboard with charts, dark mode, and role-based access.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: '#',
    tech: ['React', 'Tailwind', 'Node']
  }
];

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/70 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
          <div className="flex items-center gap-2">
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
              <Github className="h-3.5 w-3.5" /> Code
            </a>
            <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-2 py-1 text-xs text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
              <ExternalLink className="h-3.5 w-3.5" /> Live
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
      >
        Featured Projects
      </motion.h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-300">
        A selection of work that highlights my focus on user experience, performance, and clean code.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-[1] top-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-neutral-950" />
    </section>
  );
}
