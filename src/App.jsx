import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/70 px-6 py-10 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Harshad — All rights reserved.</p>
        <a href="#home" className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-2 text-sm text-neutral-800 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200">
          Scroll to top ↑
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
