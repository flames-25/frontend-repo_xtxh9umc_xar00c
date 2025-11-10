import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Formspree example endpoint; replace with your own if desired
    const endpoint = 'https://formspree.io/f/mgegvjpa';

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    };

    try {
      setStatus('loading');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
      >
        Contact
      </motion.h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-neutral-600 dark:text-neutral-300">
        Got a project or opportunity? Let’s build something great together.
      </p>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200/60 bg-white/60 p-4 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
            <Mail className="h-4 w-4 text-blue-500" /> Email
          </div>
          <a href="mailto:hello@harshad.dev" className="mt-2 block text-sm text-neutral-600 hover:underline dark:text-neutral-300">
            hello@harshad.dev
          </a>
        </div>
        <a
          href="https://github.com/" target="_blank" rel="noreferrer"
          className="rounded-2xl border border-neutral-200/60 bg-white/60 p-4 backdrop-blur-md transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50"
        >
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
            <Github className="h-4 w-4 text-neutral-900 dark:text-white" /> GitHub
          </div>
          <span className="mt-2 block text-sm text-neutral-600 dark:text-neutral-300">/harshad</span>
        </a>
        <a
          href="https://linkedin.com/" target="_blank" rel="noreferrer"
          className="rounded-2xl border border-neutral-200/60 bg-white/60 p-4 backdrop-blur-md transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50"
        >
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
            <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn
          </div>
          <span className="mt-2 block text-sm text-neutral-600 dark:text-neutral-300">/in/harshad</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-3xl space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none backdrop-blur-md focus:ring-2 focus:ring-blue-400 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none backdrop-blur-md focus:ring-2 focus:ring-blue-400 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about your project..."
          className="w-full rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none backdrop-blur-md focus:ring-2 focus:ring-blue-400 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : (
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
        {status === 'success' && (
          <p className="text-sm text-emerald-600">Thanks! I’ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">Something went wrong. Please try again later.</p>
        )}
      </form>
    </section>
  );
}
