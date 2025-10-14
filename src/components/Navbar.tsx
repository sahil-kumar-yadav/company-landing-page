"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Box } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-shadow backdrop-blur-sm ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="bg-white/90 dark:bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Box className="text-primary-600 dark:text-primary-400" />
                <span className="font-bold text-primary-600 dark:text-primary-400">
                  StartUp
                </span>
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary-600 dark:bg-primary-500 text-white hover:opacity-95 transition"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {open ? <X className="text-slate-800 dark:text-white" /> : <Menu className="text-slate-800 dark:text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="block text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => setOpen(false)}
                className="block text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-2 px-4 py-2 rounded-md bg-primary-600 dark:bg-primary-500 text-white text-center hover:opacity-95 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
