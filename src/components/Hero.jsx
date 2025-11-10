import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowUpRight, Github, Linkedin, Mail, Rocket } from 'lucide-react';

const GradientOverlay = () => (
  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.2),transparent_40%)]"
  />
);

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <GradientOverlay />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-28 sm:pt-32">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/40 bg-white/60 px-3 py-1 text-xs text-neutral-700 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/40 dark:text-neutral-200">
            <Rocket className="h-3.5 w-3.5 text-blue-500" />
            <span>Available for freelance & remote roles</span>
          </div>

          <h1 className="mt-6 font-semibold tracking-tight text-neutral-900 dark:text-white">
            <span className="block text-3xl sm:text-5xl">Hi, I’m Harshad 👋</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-4xl text-transparent sm:text-7xl">
              MERN Stack Developer
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
            I craft modern, performant web apps with React, Node.js, Express, and MongoDB. I love building
            delightful user experiences with beautiful motion and rock-solid architectures.
          </p>

          <motion.div
            style={{ y: y2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition-colors hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-white"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </a>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <a
                href="https://github.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-neutral-800 backdrop-blur-md hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-neutral-800 backdrop-blur-md hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60" />
    </section>
  );
}
