"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Box, SunMoon } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <nav
        className="glass"
        style={{
          background: "var(--card)",
          borderRadius: 0,
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Box style={{ color: "var(--accent)" }} />
                <span style={{ fontWeight: 700, color: "var(--text)" }}>Thinkable XAI</span>
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="transition"
                style={{ color: "var(--text)" }}
              >
               Services
              </a>
              <a
                href="#pricing"
                className="transition"
                style={{ color: "var(--text)" }}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="transition"
                style={{ color: "var(--text)" }}
              >
                Testimonials
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-md btn-accent"
                style={{ textDecoration: "none" }}
              >
                Get Started
              </a>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                className="p-2 rounded-md hover:opacity-95 transition"
                style={{ background: "transparent", border: "none", color: "var(--text)" }}
              >
                <SunMoon />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                style={{ color: "var(--text)" }}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                <SunMoon />
              </button>

              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                style={{ color: "var(--text)" }}
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "var(--card)" }}>
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="block transition"
                style={{ color: "var(--text)" }}
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block transition"
                style={{ color: "var(--text)" }}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => setOpen(false)}
                className="block transition"
                style={{ color: "var(--text)" }}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-2 px-4 py-2 rounded-md btn-accent text-center"
                style={{ textDecoration: "none" }}
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