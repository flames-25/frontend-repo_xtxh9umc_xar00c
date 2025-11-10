import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-neutral-200/60 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60">
        <a href="#home" className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
          Harshad.dev
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              {l.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center rounded-xl border border-neutral-200 bg-white/70 p-2 text-neutral-700 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Menu className="h-5 w-5 text-neutral-900 dark:text-white" />
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-neutral-200/60 bg-white/70 p-4 backdrop-blur-md md:hidden dark:border-neutral-800 dark:bg-neutral-900/60">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800">
                {l.label}
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white/70 p-2 text-neutral-700 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
